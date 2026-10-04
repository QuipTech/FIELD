"use client";

import { useState, type FormEvent } from "react";

const topics = ["Sales", "Support", "Partnership", "Press", "Other"] as const;

const inputClasses =
  "w-full rounded-lg border border-borderGray bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-mutedGray focus:border-primary focus:outline-none focus:ring-2 focus:ring-primaryTint";

export const ContactForm = () => {
  const [topic, setTopic] = useState<(typeof topics)[number]>("Sales");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const company = form.get("company");
    const message = form.get("message");

    const body = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Company: ${company}`,
      "",
      String(message ?? ""),
    ].join("\n");

    window.location.href = `mailto:hello@quiptechfield.com?subject=${encodeURIComponent(
      `[${topic}] Website contact form`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-borderGray p-6 min-[900px]:p-8"
    >
      <div className="grid gap-4 min-[600px]:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Name
          <input name="name" type="text" required placeholder="Jordan Smith" className={inputClasses} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Work email
          <input
            name="email"
            type="email"
            required
            placeholder="jordan@company.com"
            className={inputClasses}
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Company
        <input name="company" type="text" placeholder="Company name" className={inputClasses} />
      </label>
      <div className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        What can we help with?
        <div className="flex flex-wrap gap-2">
          {topics.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTopic(item)}
              className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                topic === item
                  ? "border-primary bg-primary text-white"
                  : "border-borderGray text-bodyGray hover:border-primary hover:text-primary"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Message
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your fleet, sites and what you're hoping FIELD can help with."
          className={`${inputClasses} resize-none`}
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex h-12 w-fit items-center justify-center rounded-lg bg-primary px-6 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-primaryHover"
      >
        Send message
      </button>
      <p className="text-[13px] text-mutedGray">
        This opens your email client with the message pre-filled — we don&rsquo;t store
        anything you type here.
      </p>
    </form>
  );
};
