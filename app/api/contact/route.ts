import { NextResponse } from "next/server";
import { Resend } from "resend";
import { parseEmailRecipients } from "@/lib/emailRecipients";

/**
 * Contact-form endpoint for Cloudhack 2026.
 *
 * The contact form is for team signups / hackathon enquiries. It POSTs JSON
 * here; we validate server-side, then send a structured enquiry email via
 * Resend to the team inbox. Reply-To is set to the submitter so the team can
 * reply directly. No mail is sent back to the submitter. (Sponsor enquiries are
 * handled separately on the contact page - they're directed to Sharukesh.)
 *
 * ───────────────────────────────────────────────────────────────────────────
 *  ENVIRONMENT VARIABLES (set in .env.local - never hardcode secrets)
 * ───────────────────────────────────────────────────────────────────────────
 *  RESEND_API_KEY      Resend API secret (server-only, never NEXT_PUBLIC_*).
 *  CONTACT_FROM_EMAIL  The "from" address. MUST be on a Resend-verified domain
 *                      (DNS/SPF/DKIM). Use onboarding@resend.dev for local
 *                      testing before glenr.io is verified - note that
 *                      in test mode Resend only delivers to the account owner.
 *  CONTACT_TO_EMAIL    Comma-separated recipients for contact-form enquiries.
 * ───────────────────────────────────────────────────────────────────────────
 */

type ContactPayload = {
  firstname?: string;
  lastname?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // ── Server-side validation (mirrors the client, never trust the client) ──
  const errors: Record<string, string> = {};

  if (!body.firstname?.trim()) errors.firstname = "First name is required.";
  if (!body.email?.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(body.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!body.message?.trim()) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[cloudhack] RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const to = parseEmailRecipients(
    process.env.CONTACT_TO_EMAIL,
    "info@glenr.io",
  );
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  const data = {
    firstname: body.firstname!.trim(),
    lastname: body.lastname?.trim() || "",
    email: body.email!.trim(),
    subject: body.subject?.trim() || "",
    message: body.message!.trim(),
    submittedAt: new Date().toISOString(),
  };

  const fullName = `${data.firstname} ${data.lastname}`.trim();
  const emailSubject = `Cloudhack 2026 - New signup enquiry from ${fullName}`;

  const text = [
    `New Cloudhack 2026 team signup enquiry`,
    ``,
    `Name:         ${fullName}`,
    `Email:        ${data.email}`,
    `Subject:      ${data.subject || "-"}`,
    ``,
    `Message:`,
    data.message,
    ``,
    `Submitted at: ${data.submittedAt}`,
  ].join("\n");

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #111; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New Cloudhack 2026 team signup enquiry</h2>
      <table style="border-collapse: collapse;">
        <tr><td style="padding: 4px 16px 4px 0; color: #666;">Name</td><td style="padding: 4px 0;">${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding: 4px 16px 4px 0; color: #666;">Email</td><td style="padding: 4px 0;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 4px 16px 4px 0; color: #666;">Subject</td><td style="padding: 4px 0;">${escapeHtml(data.subject) || "-"}</td></tr>
      </table>
      <h3 style="margin: 20px 0 8px;">Message</h3>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(data.message)}</p>
      <p style="margin: 24px 0 0; color: #999; font-size: 12px;">Submitted at ${escapeHtml(data.submittedAt)}</p>
    </div>
  `.trim();

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: emailSubject,
      text,
      html,
    });

    if (error) {
      console.error("[cloudhack] resend error:", error);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[cloudhack] contact send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your message." },
      { status: 500 },
    );
  }
}
