"use client";

import React, { useState } from "react";
import { Globe, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
  /** Sponsor-enquiry contact, shown as a card below the form. */
  sponsor?: {
    heading: string;
    name: string;
    role: string;
    email: string;
    phone: string;
  };
}

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Contact section adapted from a shadcnblocks "Contact 2" block.
 *
 * Re-themed for this site's dark aesthetic: the form lives in a frosted-glass
 * card (matching the cards used elsewhere) so the global gradient field shows
 * through, and contact details use lucide icons. Tailwind v4-safe — the
 * original's `container` / `max-w-screen-*` utilities (removed in v4) are
 * replaced with the site's `mx-auto max-w-*` pattern.
 *
 * On submit the form POSTs to /api/contact, which emails the enquiry via Resend
 * and routes to the right inbox based on the selected enquiry type.
 */
export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
  sponsor,
}: Contact2Props) => {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // capture before await — React nullifies currentTarget
    const data = new FormData(form);
    const payload = {
      firstname: String(data.get("firstname") ?? "").trim(),
      lastname: String(data.get("lastname") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    setStatus("submitting");
    setFormError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setFormError(
          json?.error ?? "We couldn't send your message. Please try again.",
        );
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setFormError(
        "Network error. Please check your connection and try again.",
      );
      setStatus("error");
    }
  };

  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-3 text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-full lg:mx-0">
              <h3 className="mb-6 text-center text-xl font-semibold text-[var(--color-text)] lg:text-left">
                Contact Details
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-graphite border border-tarmac text-stark-white">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-[var(--color-text)] transition hover:text-ignition-orange"
                  >
                    {phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-graphite border border-tarmac text-stark-white">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="text-[var(--color-text)] transition hover:text-ignition-orange"
                  >
                    {email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-graphite border border-tarmac text-stark-white">
                    <Globe className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <a
                    href={web.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text)] transition hover:text-ignition-orange"
                  >
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {status === "success" ? (
            <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-4 rounded-lg border border-[var(--color-line)] bg-[var(--color-paper)] p-10 text-center sm:p-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-graphite border border-tarmac">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-ignition-orange"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-[var(--color-text)]">
                Message sent!
              </h2>
              <p className="max-w-md text-muted-foreground">
                Thanks for reaching out. The Cloudhack team has your message and
                will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 rounded-lg border border-[var(--color-line)] px-6 py-2.5 text-sm text-[var(--color-text)] transition hover:bg-white/5"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-2xl flex-col gap-6 rounded-lg border border-[var(--color-line)] bg-[var(--color-paper)] p-8 sm:p-10"
            >
              {status === "error" && formError && (
                <div
                  role="alert"
                  className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700"
                >
                  {formError}
                </div>
              )}
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  placeholder="Type your message here."
                  id="message"
                  name="message"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Send Message"}
              </Button>
            </form>
          )}
        </div>

        {sponsor && (
          <section className="mt-16 rounded-lg border border-[var(--color-line)] bg-[var(--color-paper)] p-7">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-2)]">
              {sponsor.heading}
            </h2>
            <p className="mt-4 text-[var(--color-text-2)]">
              Interested in setting a problem or backing the event? Sponsorship
              enquiries go to {sponsor.name.split(" ")[0]} directly:
            </p>
            <div className="mt-4 text-sm">
              <div className="font-semibold text-[var(--color-text)]">
                {sponsor.name}
                <span className="ml-2 font-normal text-[var(--color-text-2)]">
                  {sponsor.role}
                </span>
              </div>
              <div className="mt-2 flex flex-col gap-1 text-[var(--color-text-2)]">
                <a
                  href={`mailto:${sponsor.email}`}
                  className="transition hover:text-ignition-orange"
                >
                  {sponsor.email}
                </a>
                <a
                  href={`tel:${sponsor.phone.replace(/\s/g, "")}`}
                  className="transition hover:text-ignition-orange"
                >
                  {sponsor.phone}
                </a>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};
