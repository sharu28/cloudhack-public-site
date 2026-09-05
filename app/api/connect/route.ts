import { NextResponse } from "next/server";
import { Resend } from "resend";
import { parseEmailRecipients } from "@/lib/emailRecipients";

type ConnectPayload = {
  name?: string;
  contact?: string;
  building?: string;
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidContact(value: string) {
  if (EMAIL_RE.test(value)) return true;
  return value.replace(/\D/g, "").length >= 7;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let body: ConnectPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (body.website?.trim()) return NextResponse.json({ ok: true });

  const name = body.name?.trim() ?? "";
  const contact = body.contact?.trim() ?? "";
  const building = body.building?.trim() ?? "";
  const errors: Record<string, string> = {};

  if (!name) errors.name = "Add your name so I know who to follow up with.";
  if (!contact) {
    errors.contact = "Add an email address or WhatsApp number.";
  } else if (!isValidContact(contact)) {
    errors.contact = "Enter a valid email address or WhatsApp number.";
  }

  if (name.length > 100) errors.name = "Keep your name under 100 characters.";
  if (contact.length > 160) errors.contact = "Keep your contact details under 160 characters.";
  if (building.length > 500) errors.building = "Keep this note under 500 characters.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[connect] RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "Follow-up inbox is not configured yet." },
      { status: 500 },
    );
  }

  const to = parseEmailRecipients(
    process.env.MEETUP_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL,
    "info@glenr.io",
  );
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";
  const submittedAt = new Date().toISOString();
  const emailContact = EMAIL_RE.test(contact) ? contact : undefined;

  const text = [
    "New builder meetup connection",
    "",
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Building: ${building || "Not provided"}`,
    `Submitted: ${submittedAt}`,
  ].join("\n");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #171717; line-height: 1.6;">
      <h2 style="margin: 0 0 18px;">New builder meetup connection</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tr><td style="padding: 6px 18px 6px 0; color: #666; vertical-align: top;">Name</td><td style="padding: 6px 0;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 6px 18px 6px 0; color: #666; vertical-align: top;">Contact</td><td style="padding: 6px 0;">${escapeHtml(contact)}</td></tr>
        <tr><td style="padding: 6px 18px 6px 0; color: #666; vertical-align: top;">Building</td><td style="padding: 6px 0; white-space: pre-wrap;">${escapeHtml(building || "Not provided")}</td></tr>
        <tr><td style="padding: 6px 18px 6px 0; color: #666; vertical-align: top;">Submitted</td><td style="padding: 6px 0;">${escapeHtml(submittedAt)}</td></tr>
      </table>
    </div>
  `.trim();

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: emailContact,
      subject: `Builder meetup connection — ${name}`,
      text,
      html,
    });

    if (error) {
      console.error("[connect] resend error:", error);
      return NextResponse.json(
        { ok: false, error: "That didn't reach the follow-up inbox. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[connect] submission failed:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong saving your details." },
      { status: 500 },
    );
  }
}
