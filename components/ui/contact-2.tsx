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
}

type Status = "idle" | "submitting" | "success" | "error";

/**
 * The partnership enquiry form — POSTs to /api/contact (Resend), which was
 * already fully built and working but unused anywhere in the previous
 * design. Restyled to the flat DISPATCH surface: hard borders, ink-bordered
 * icon plates, no rounded corners or glassmorphism.
 */
export const Contact2 = ({
  title = "Talk to us",
  description = "Questions, partnership ideas, or want to set a track? Send a message and the CloudHack team will get back to you.",
  phone = "+94 00 000 0000",
  email = "email@example.com",
  web = { label: "cloudhacksrilanka.com", url: "https://www.cloudhacksrilanka.com" },
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
        setFormError(json?.error ?? "We couldn't send your message. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setFormError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-16">
      <div className="flex w-full max-w-sm flex-col justify-between gap-10">
        <div>
          <h2 className="text-3xl font-extralight tracking-[-0.02em] text-ink sm:text-4xl">{title}</h2>
          <p className="mt-3 text-ink-2">{description}</p>
        </div>
        <div>
          <h3 className="mb-5 font-mono text-xs font-light uppercase tracking-[0.16em] text-ink-2">
            Direct contact
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-line-strong bg-paper text-stamp">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="font-mono text-sm text-ink transition-colors hover:text-stamp"
              >
                {phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-line-strong bg-paper text-stamp">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <a
                href={`mailto:${email}`}
                className="font-mono text-sm text-ink transition-colors hover:text-stamp"
              >
                {email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-line-strong bg-paper text-stamp">
                <Globe className="h-4 w-4" aria-hidden="true" />
              </span>
              <a
                href={web.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-ink transition-colors hover:text-stamp"
              >
                {web.label}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {status === "success" ? (
        <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-4 border border-line-strong bg-paper-raised p-10 text-center shadow-raised sm:p-12">
          <div className="flex h-16 w-16 items-center justify-center border border-line-strong bg-paper text-stamp">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h2 className="text-2xl font-extralight text-ink">Message sent</h2>
          <p className="max-w-md text-ink-2">
            Thanks for reaching out — the CloudHack team has your message and will get back to you
            shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-2 border border-line-strong px-6 py-2.5 text-sm font-light text-ink transition-colors hover:border-stamp hover:text-stamp"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-2xl flex-col gap-6 border border-line-strong bg-paper-raised p-8 shadow-raised sm:p-10"
        >
          {status === "error" && formError && (
            <div role="alert" className="border border-stamp bg-stamp-wash px-4 py-3 text-sm text-ink">
              {formError}
            </div>
          )}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="firstname">First name</Label>
              <Input type="text" id="firstname" name="firstname" placeholder="First name" required />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="lastname">Last name</Label>
              <Input type="text" id="lastname" name="lastname" placeholder="Last name" />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" placeholder="you@company.com" required />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" name="subject" placeholder="e.g. Track Partner enquiry" />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea placeholder="Tell us about your organization and what you're looking for." id="message" name="message" required />
          </div>
          <Button type="submit" className="w-full" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send message"}
          </Button>
        </form>
      )}
    </div>
  );
};
