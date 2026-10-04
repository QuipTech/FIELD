"use client";

import { useState, type FormEvent } from "react";

const countries = [
  "Australia",
  "United States",
  "Canada",
  "United Kingdom",
  "New Zealand",
  "South Africa",
  "Chile",
  "Peru",
  "Brazil",
  "Indonesia",
  "India",
  "Germany",
  "United Arab Emirates",
  "Saudi Arabia",
  "Other",
];

const inputClasses =
  "w-full rounded-lg border border-borderGray bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-mutedGray focus:border-primary focus:outline-none focus:ring-2 focus:ring-primaryTint";

export const DemoRequestForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const body = [
      `First name: ${form.get("firstName")}`,
      `Last name: ${form.get("lastName")}`,
      `Business email: ${form.get("email")}`,
      `Company: ${form.get("company")}`,
      `Country: ${form.get("country")}`,
      `Phone: ${form.get("phone") || "—"}`,
      "",
      String(form.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:sales@quiptechfield.com?subject=${encodeURIComponent(
      "Demo request from quiptechfield.com",
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-borderGray bg-white p-6 shadow-[0_16px_40px_rgba(30,32,36,0.08)] min-[900px]:p-8"
    >
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Business email
        <input
          name="email"
          type="email"
          required
          placeholder="jordan@company.com"
          className={inputClasses}
        />
      </label>
      <div className="grid gap-4 min-[520px]:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          First name
          <input name="firstName" type="text" required placeholder="Jordan" className={inputClasses} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Last name
          <input name="lastName" type="text" required placeholder="Smith" className={inputClasses} />
        </label>
      </div>
      <div className="grid gap-4 min-[520px]:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Company
          <input name="company" type="text" required placeholder="Company name" className={inputClasses} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Country
          <select name="country" required defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Select country
            </option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Phone number <span className="font-normal text-mutedGray">(optional)</span>
        <input name="phone" type="tel" placeholder="+61 4XX XXX XXX" className={inputClasses} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Is there anything specific you&rsquo;d like us to know?
        <textarea
          name="message"
          rows={4}
          placeholder="Fleet size, sites, machine brands, what you're hoping to solve..."
          className={`${inputClasses} resize-none`}
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-primaryHover min-[520px]:w-fit min-[520px]:px-8"
      >
        Schedule demo
      </button>
      <p className="text-[13px] text-mutedGray" aria-live="polite">
        {submitted
          ? "Opening your email client to send this request — thanks!"
          : "This opens your email client with the request pre-filled — we don't store anything you type here."}
      </p>
    </form>
  );
};
