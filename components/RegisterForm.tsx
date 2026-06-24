"use client";

import { useState } from "react";
import { site } from "@/content/site";

type Errors = Partial<Record<string, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initial = {
  teamName: "",
  teamSize: "",
  email: "",
  phone: "",
  university: "",
  role: "",
  link: "",
};

function validate(values: typeof initial): Errors {
  const errors: Errors = {};
  if (!values.teamName.trim()) errors.teamName = "Team name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.university.trim())
    errors.university = "Please pick your university / institution.";
  if (!values.role.trim()) errors.role = "Please select a role.";
  if (values.teamSize) {
    const n = Number(values.teamSize);
    if (!Number.isInteger(n) || n < 1 || n > 4)
      errors.teamSize = "Teams are 1–4 members.";
  }
  if (values.link.trim() && !/^https?:\/\/|^[\w.-]+\.\w/.test(values.link.trim()))
    errors.link = "Enter a valid URL.";
  return errors;
}

const fieldBase =
  "w-full rounded-xl border bg-[var(--color-paper)] px-4 py-3 text-[var(--color-text)] placeholder-[var(--color-text-2)]/60 transition focus:outline-none focus:ring-2 focus:ring-[#0071e3]/50";

export function RegisterForm() {
  const { signup } = site;
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [formError, setFormError] = useState<string | null>(null);

  function update<K extends keyof typeof initial>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function borderFor(key: keyof typeof initial) {
    return errors[key] ? "border-red-500/70" : "border-[var(--color-line)]";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // focus the first invalid field
      const first = Object.keys(found)[0];
      document.getElementById(first)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (json?.errors) setErrors(json.errors);
        setFormError(
          json?.error ?? "We couldn't submit your registration. Please try again.",
        );
        setStatus("idle");
        return;
      }
      setStatus("success");
    } catch {
      setFormError("Network error. Please check your connection and try again.");
      setStatus("idle");
    }
  }

  // ── Success confirmation state ──────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper)] p-10 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal via-cyan to-violet text-white">
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
        <h2 className="mt-6 text-2xl font-semibold text-[var(--color-text)]">
          You&apos;re on the list, {values.teamName}.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[var(--color-text-2)]">
          We&apos;ve recorded your registration and will email{" "}
          <span className="font-medium text-[#0071e3]">{values.email}</span> with
          next steps and confirmation. Keep an eye on your inbox.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initial);
            setStatus("idle");
          }}
          className="mt-8 rounded-full border border-[var(--color-line)] px-6 py-2.5 text-sm text-[var(--color-text)] transition hover:bg-black/[0.04]"
        >
          Register another team
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      {formError && (
        <div
          role="alert"
          className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700"
        >
          {formError}
        </div>
      )}

      {/* Team name */}
      <Field
        id="teamName"
        label="Team name"
        required
        error={errors.teamName}
      >
        <input
          id="teamName"
          name="teamName"
          type="text"
          autoComplete="off"
          placeholder="e.g. Neural Knights"
          value={values.teamName}
          onChange={(e) => update("teamName", e.target.value)}
          aria-invalid={!!errors.teamName}
          className={`${fieldBase} ${borderFor("teamName")}`}
        />
      </Field>

      {/* Team size */}
      <Field
        id="teamSize"
        label="Number of team members"
        hint="Teams of 3–4 (1–4 accepted while you finalise)"
        error={errors.teamSize}
      >
        <input
          id="teamSize"
          name="teamSize"
          type="number"
          min={1}
          max={4}
          inputMode="numeric"
          placeholder="4"
          value={values.teamSize}
          onChange={(e) => update("teamSize", e.target.value)}
          aria-invalid={!!errors.teamSize}
          className={`${fieldBase} ${borderFor("teamSize")}`}
        />
      </Field>

      {/* Email */}
      <Field
        id="email"
        label="Captain's email"
        hint="The team registry person we'll contact"
        required
        error={errors.email}
      >
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="captain@example.com"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={!!errors.email}
          className={`${fieldBase} ${borderFor("email")}`}
        />
      </Field>

      {/* Phone */}
      <Field id="phone" label="Phone number" hint="Optional" error={errors.phone}>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+94 7X XXX XXXX"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={`${fieldBase} ${borderFor("phone")}`}
        />
      </Field>

      {/* University */}
      <Field
        id="university"
        label="University / Institution"
        required
        error={errors.university}
      >
        <input
          id="university"
          name="university"
          type="text"
          list="universities"
          placeholder="Start typing or pick one"
          value={values.university}
          onChange={(e) => update("university", e.target.value)}
          aria-invalid={!!errors.university}
          className={`${fieldBase} ${borderFor("university")}`}
        />
        <datalist id="universities">
          {signup.universities.map((u) => (
            <option key={u} value={u} />
          ))}
        </datalist>
      </Field>

      {/* Role */}
      <Field id="role" label="Role" required error={errors.role}>
        <select
          id="role"
          name="role"
          value={values.role}
          onChange={(e) => update("role", e.target.value)}
          aria-invalid={!!errors.role}
          className={`${fieldBase} ${borderFor("role")} ${
            values.role ? "text-[var(--color-text)]" : "text-[var(--color-text-2)]"
          }`}
        >
          <option value="" disabled>
            Select a role
          </option>
          {signup.roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>

      {/* Link */}
      <Field
        id="link"
        label="GitHub or portfolio link"
        hint="Optional"
        error={errors.link}
      >
        <input
          id="link"
          name="link"
          type="url"
          autoComplete="url"
          placeholder="https://github.com/your-team"
          value={values.link}
          onChange={(e) => update("link", e.target.value)}
          aria-invalid={!!errors.link}
          className={`${fieldBase} ${borderFor("link")}`}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--color-text)] px-8 py-4 text-sm font-semibold text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-teal via-cyan to-violet opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
        <span className="relative">
          {status === "submitting" ? "Submitting…" : "Register team"}
        </span>
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 flex items-baseline justify-between text-sm font-medium text-[var(--color-text)]"
      >
        <span>
          {label}
          {required && <span className="ml-1 text-[#0071e3]">*</span>}
        </span>
        {hint && (
          <span className="text-xs font-normal text-[var(--color-text-2)]">
            {hint}
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
