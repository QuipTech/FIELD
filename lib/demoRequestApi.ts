import type { DemoRequestValues } from "@/lib/demoRequestFields";

export type DemoRequestPayload = {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  phone?: string;
  message?: string;
  turnstileToken: string;
  website: string;
};

export type DemoRequestResult = { ok: true } | { ok: false; message: string };

type DemoRequestErrorBody = {
  message?: string | string[];
};

const GENERIC_ERROR = "Something went wrong. Please try again.";

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/+$/, "");

// Trims every value and leaves out empty optional fields; the API rejects unknown keys.
export const buildDemoRequestPayload = (
  values: DemoRequestValues,
  turnstileToken: string,
  website: string,
): DemoRequestPayload => {
  const phone = values.phone.trim();
  const message = values.message.trim();

  return {
    email: values.email.trim(),
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    company: values.company.trim(),
    country: values.country.trim(),
    ...(phone && { phone }),
    ...(message && { message }),
    turnstileToken,
    website,
  };
};

export const getDemoRequestErrorMessage = (status: number, body: DemoRequestErrorBody) => {
  if (status === 400) {
    const message = Array.isArray(body.message) ? body.message[0] : body.message;
    return message || GENERIC_ERROR;
  }
  if (status === 429) return "Too many requests. Please try again later.";
  if (status === 503) return "We couldn't send your request just now. Please try again in a few minutes.";
  return GENERIC_ERROR;
};

export const submitDemoRequest = async (payload: DemoRequestPayload): Promise<DemoRequestResult> => {
  if (!API_BASE_URL) return { ok: false, message: GENERIC_ERROR };

  try {
    const response = await fetch(`${API_BASE_URL}/public/demo-requests`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (response.ok) return { ok: true };

    const body = (await response.json().catch(() => ({}))) as DemoRequestErrorBody;
    return { ok: false, message: getDemoRequestErrorMessage(response.status, body) };
  } catch {
    return { ok: false, message: GENERIC_ERROR };
  }
};
