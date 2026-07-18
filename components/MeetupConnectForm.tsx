"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

type Values = {
  name: string;
  contact: string;
  building: string;
  website: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const initialValues: Values = {
  name: "",
  contact: "",
  building: "",
  website: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidContact(value: string) {
  if (EMAIL_RE.test(value)) return true;
  return value.replace(/\D/g, "").length >= 7;
}

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) errors.name = "Add your name so I know who to follow up with.";
  if (!values.contact.trim()) {
    errors.contact = "Add an email address or WhatsApp number.";
  } else if (!isValidContact(values.contact.trim())) {
    errors.contact = "Enter a valid email address or WhatsApp number.";
  }

  return errors;
}

const fieldClass =
  "mt-2 min-h-12 w-full border border-line-strong bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-2/60 focus:border-stamp focus:outline-none focus:ring-2 focus:ring-stamp/30";

export function MeetupConnectForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  function update(key: keyof Values, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(firstError)?.focus();
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (result?.errors) setErrors(result.errors);
        setFormError(result?.error ?? "That didn't go through. Please try once more.");
        setStatus("idle");
        return;
      }

      setStatus("success");
    } catch {
      setFormError("No connection right now. Check your signal and try again.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center px-3 py-12 text-center" role="status">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-stamp bg-stamp-wash text-stamp">
          <Check className="h-6 w-6" aria-hidden="true" />
        </span>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-stamp">Connection saved</p>
        <h2 className="mt-3 text-3xl font-extralight text-ink">Great meeting you, {values.name.trim()}.</h2>
        <p className="mt-3 max-w-sm text-ink-2">I&apos;ve got your details and will follow up after the meetup.</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      {formError && (
        <div role="alert" className="border border-stamp bg-stamp-wash px-4 py-3 text-sm text-ink">
          {formError}
        </div>
      )}

      <div>
        <label htmlFor="name" className="text-sm text-ink">
          Your name <span className="text-stamp">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={100}
          placeholder="How should I remember you?"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClass}
        />
        {errors.name && <p id="name-error" className="mt-2 text-sm text-stamp">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact" className="text-sm text-ink">
          Email or WhatsApp <span className="text-stamp">*</span>
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          autoComplete="email"
          inputMode="email"
          maxLength={160}
          placeholder="you@email.com or +94 7X XXX XXXX"
          value={values.contact}
          onChange={(event) => update("contact", event.target.value)}
          aria-invalid={!!errors.contact}
          aria-describedby={errors.contact ? "contact-error" : "contact-hint"}
          className={fieldClass}
        />
        {errors.contact ? (
          <p id="contact-error" className="mt-2 text-sm text-stamp">{errors.contact}</p>
        ) : (
          <p id="contact-hint" className="mt-2 text-xs text-ink-2">Whichever one you actually check.</p>
        )}
      </div>

      <div>
        <label htmlFor="building" className="text-sm text-ink">
          What are you building? <span className="text-ink-2">(optional)</span>
        </label>
        <textarea
          id="building"
          name="building"
          rows={3}
          maxLength={500}
          placeholder="One line is plenty."
          value={values.building}
          onChange={(event) => update("building", event.target.value)}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div hidden aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-stamp-deep bg-stamp-deep px-6 py-3 text-sm font-medium text-ink shadow-stamp transition hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
      >
        {status === "submitting" ? "Saving…" : "Send my details"}
        {status !== "submitting" && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </button>

      <p className="text-center text-xs leading-relaxed text-ink-2">
        Takes about 30 seconds. One useful follow-up after the meetup—no mailing list, no spam.
      </p>
    </form>
  );
}
