import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Team registration endpoint for Cloudhack 2026.
 *
 * The form POSTs JSON here. We validate server-side, then send a structured
 * registration email via Resend to the team inbox. Reply-To is set to the
 * captain's email so the team can reply directly.
 *
 * Uses the same env vars as the contact endpoint (see app/api/contact/route.ts):
 *   RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL.
 */

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

type RegistrationPayload = {
  teamName?: string;
  teamSize?: number | string;
  email?: string;
  phone?: string;
  university?: string;
  role?: string;
  link?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: RegistrationPayload;

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

  if (!body.teamName?.trim()) errors.teamName = "Team name is required.";
  if (!body.email?.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(body.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  // University / institution and role are optional.

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

  const to = process.env.CONTACT_TO_EMAIL ?? "info@convoy-tech.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  const data = {
    teamName: body.teamName!.trim(),
    teamSize: body.teamSize ? Number(body.teamSize) : null,
    email: body.email!.trim(),
    phone: body.phone?.trim() || null,
    university: body.university?.trim() || null,
    role: body.role?.trim() || null,
    link: body.link?.trim() || null,
    submittedAt: new Date().toISOString(),
  };

  const emailSubject = `Cloudhack 2026 — New team registration: ${data.teamName}`;

  const text = [
    `New Cloudhack 2026 team registration`,
    ``,
    `Team name:   ${data.teamName}`,
    `Team size:   ${data.teamSize ?? "—"}`,
    `Email:       ${data.email}`,
    `Phone:       ${data.phone ?? "—"}`,
    `University:  ${data.university ?? "—"}`,
    `Role:        ${data.role ?? "—"}`,
    `Link:        ${data.link ?? "—"}`,
    ``,
    `Submitted at: ${data.submittedAt}`,
  ].join("\n");

  const row = (label: string, value: string) =>
    `<tr><td style="padding: 4px 16px 4px 0; color: #666;">${label}</td><td style="padding: 4px 0;">${value}</td></tr>`;

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #111; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New Cloudhack 2026 team registration</h2>
      <table style="border-collapse: collapse;">
        ${row("Team name", `<strong>${escapeHtml(data.teamName)}</strong>`)}
        ${row("Team size", String(data.teamSize ?? "—"))}
        ${row("Email", `<a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>`)}
        ${row("Phone", data.phone ? escapeHtml(data.phone) : "—")}
        ${row("University", data.university ? escapeHtml(data.university) : "—")}
        ${row("Role", data.role ? escapeHtml(data.role) : "—")}
        ${row("Link", data.link ? `<a href="${escapeHtml(data.link)}">${escapeHtml(data.link)}</a>` : "—")}
      </table>
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
        {
          ok: false,
          error: "We couldn't submit your registration. Please try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[cloudhack] registration failed:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong saving your registration." },
      { status: 500 },
    );
  }
}
