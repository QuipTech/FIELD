"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTurnstile } from "@/components/common/useTurnstile";
import { DemoFormField } from "@/components/demoRequest/DemoFormField";
import { buildDemoRequestPayload, submitDemoRequest } from "@/lib/demoRequestApi";
import {
  countries,
  demoFieldLimits,
  validateDemoRequest,
  type DemoFieldErrors,
  type DemoFieldName,
  type DemoRequestValues,
} from "@/lib/demoRequestFields";

const emptyValues: DemoRequestValues = {
  email: "",
  firstName: "",
  lastName: "",
  company: "",
  country: "",
  phone: "",
  message: "",
};

type DemoRequestFieldsProps = {
  onSuccess: () => void;
};

export const DemoRequestFields = ({ onSuccess }: DemoRequestFieldsProps) => {
  const turnstile = useTurnstile();
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState<DemoFieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const field = event.target.name as DemoFieldName;
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting || !turnstile.token) return;

    const fieldErrors = validateDemoRequest(values);
    const firstInvalid = Object.keys(fieldErrors)[0];
    setErrors(fieldErrors);
    if (firstInvalid) {
      document.getElementById(`demo-${firstInvalid}`)?.focus();
      return;
    }

    const website = String(new FormData(event.currentTarget).get("website") ?? "");
    // Tokens are single use, so this also resets the widget for any retry.
    const token = turnstile.consumeToken();
    if (!token) return;

    setSubmitting(true);
    setSubmitError(null);
    const result = await submitDemoRequest(buildDemoRequestPayload(values, token, website));
    setSubmitting(false);

    if (result.ok) onSuccess();
    else setSubmitError(result.message);
  };

  const fieldProps = (field: DemoFieldName) => ({
    name: field,
    value: values[field],
    onChange: handleChange,
    maxLength: demoFieldLimits[field],
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <DemoFormField id="demo-email" label="Business email" error={errors.email}>
        {(control) => (
          <input {...control} {...fieldProps("email")} type="email" autoComplete="email" required placeholder="jordan@company.com" />
        )}
      </DemoFormField>
      <div className="grid gap-4 min-[520px]:grid-cols-2">
        <DemoFormField id="demo-firstName" label="First name" error={errors.firstName}>
          {(control) => (
            <input {...control} {...fieldProps("firstName")} type="text" autoComplete="given-name" required placeholder="Jordan" />
          )}
        </DemoFormField>
        <DemoFormField id="demo-lastName" label="Last name" error={errors.lastName}>
          {(control) => (
            <input {...control} {...fieldProps("lastName")} type="text" autoComplete="family-name" required placeholder="Smith" />
          )}
        </DemoFormField>
      </div>
      <div className="grid gap-4 min-[520px]:grid-cols-2">
        <DemoFormField id="demo-company" label="Company" error={errors.company}>
          {(control) => (
            <input {...control} {...fieldProps("company")} type="text" autoComplete="organization" required placeholder="Company name" />
          )}
        </DemoFormField>
        <DemoFormField id="demo-country" label="Country" error={errors.country}>
          {(control) => (
            <select {...control} name="country" value={values.country} onChange={handleChange} required>
              <option value="" disabled>
                Select country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          )}
        </DemoFormField>
      </div>
      <DemoFormField id="demo-phone" label="Phone number" optional error={errors.phone}>
        {(control) => <input {...control} {...fieldProps("phone")} type="tel" autoComplete="tel" placeholder="+61 4XX XXX XXX" />}
      </DemoFormField>
      <DemoFormField id="demo-message" label="Is there anything specific you’d like us to know?" optional error={errors.message}>
        {(control) => (
          <textarea
            {...control}
            {...fieldProps("message")}
            rows={4}
            placeholder="Fleet size, sites, machine brands, what you're hoping to solve..."
            className={`${control.className} resize-none`}
          />
        )}
      </DemoFormField>

      {/* Honeypot: off-screen (not display:none) so bots fill it and real users never see it. */}
      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="demo-website">Website</label>
        <input id="demo-website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div ref={turnstile.containerRef} />

      <div role="alert" className="text-[13px] text-priorityHigh empty:hidden">
        {submitError ??
          (turnstile.failed ? "We couldn't verify your browser. Please refresh the page and try again." : null)}
      </div>

      <button
        type="submit"
        disabled={submitting || !turnstile.token}
        aria-busy={submitting}
        className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary text-base font-medium text-white transition-all enabled:hover:-translate-y-0.5 enabled:hover:bg-primaryHover disabled:cursor-not-allowed disabled:opacity-50 min-[520px]:w-fit min-[520px]:px-8"
      >
        {submitting ? "Sending…" : turnstile.token ? "Schedule demo" : "Verifying…"}
      </button>
      <p className="text-[13px] text-mutedGray">
        We&rsquo;ll only use these details to arrange your demo.
      </p>
    </form>
  );
};
