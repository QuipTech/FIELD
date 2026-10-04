"use client";

import { useState, type FormEvent } from "react";
import type { LeadDetails } from "@/lib/chatApi";

const inputClasses =
  "w-full rounded-lg border border-borderGray bg-white px-3 py-2 text-[13px] text-ink placeholder:text-mutedGray focus:border-primary focus:outline-none focus:ring-2 focus:ring-primaryTint";

type LeadFormProps = {
  onSubmit: (lead: LeadDetails) => Promise<string | null>;
  onCancel: () => void;
};

export const LeadForm = ({ onSubmit, onCancel }: LeadFormProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    setSubmitting(true);
    setError(null);
    const failure = await onSubmit({
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      company: String(form.get("company") ?? "").trim(),
      message: String(form.get("message") ?? "").trim(),
    });
    setSubmitting(false);
    if (failure) setError(failure);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-2 rounded-xl border border-borderGray bg-white p-3 shadow-[0_6px_18px_rgba(30,32,36,0.06)]"
    >
      <p className="text-[13px] font-semibold text-ink">Connect with the FIELD team</p>
      <input name="name" type="text" required maxLength={100} placeholder="Your name" aria-label="Name" className={inputClasses} />
      <input
        name="email"
        type="email"
        required
        maxLength={254}
        placeholder="Work email"
        aria-label="Work email"
        className={inputClasses}
      />
      <input
        name="company"
        type="text"
        required
        maxLength={150}
        placeholder="Company"
        aria-label="Company"
        className={inputClasses}
      />
      <textarea
        name="message"
        rows={2}
        maxLength={1000}
        placeholder="Anything we should know? (optional)"
        aria-label="Message"
        className={`${inputClasses} resize-none`}
      />
      {error && <p className="text-[12px] text-priorityHigh">{error}</p>}
      <div className="flex items-center gap-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-8 items-center justify-center rounded-full bg-primary px-4 text-[13px] font-medium text-white transition-colors hover:bg-primaryHover disabled:opacity-40"
        >
          {submitting ? "Sending…" : "Send details"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="h-8 rounded-full px-3 text-[13px] text-bodyGray transition-colors hover:text-primary"
        >
          Not now
        </button>
      </div>
    </form>
  );
};
