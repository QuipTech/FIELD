import type { DemoRequestValues } from "@/lib/demoRequestFields";

export type DemoRequestPayload = {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  phone?: string;
  message?: string;
  website: string;
};

export type DemoRequestResult = { ok: true } | { ok: false; message: string };

type DemoRequestErrorBody = {
  message?: string | string[];
};

const GENERIC_ERROR = "Something went wrong. Please try again.";
const NOT_CONFIGURED_ERROR =
  "Demo requests aren't available right now (the form isn't connected to our server). Please email us instead.";
const NETWORK_ERROR = "We couldn't reach our server. Check your internet connection and try again.";

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/+$/, "");

// Trims every value and leaves out empty optional fields; the API rejects unknown keys.
export const buildDemoRequestPayload = (
  values: DemoRequestValues,
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
    website,
  };
};

const firstMessage = (body: DemoRequestErrorBody) =>
  Array.isArray(body.message) ? body.message[0] : body.message;

export const getDemoRequestErrorMessage = (status: number, body: DemoRequestErrorBody) => {
  if (status === 400 || status === 422) return firstMessage(body) || "Please check your details and try again.";
  if (status === 404) return "Demo requests aren't available right now. Please try again later or email us.";
  if (status === 429) return "Too many requests. Please wait a few minutes and try again.";
  if (status === 503) return "We couldn't send your request just now. Please try again in a few minutes.";
  if (status >= 500) return `Our server had a problem (error ${status}). Please try again in a few minutes.`;
  return firstMessage(body) || `${GENERIC_ERROR} (error ${status})`;
};

export const submitDemoRequest = async (payload: DemoRequestPayload): Promise<DemoRequestResult> => {
  if (!API_BASE_URL) {
    // Set NEXT_PUBLIC_API_BASE_URL (.env.local locally, API_BASE_URL secret in GitHub Actions) and rebuild.
    console.error("Demo request: NEXT_PUBLIC_API_BASE_URL was empty when this site was built.");
    return { ok: false, message: NOT_CONFIGURED_ERROR };
  }

  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}/public/demo-requests`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    // Offline, DNS failure, or blocked by CORS: the browser hides which one from the page.
    console.error("Demo request: could not reach", API_BASE_URL, error);
    return { ok: false, message: NETWORK_ERROR };
  }

  if (response.ok) return { ok: true };

  const body = (await response.json().catch(() => ({}))) as DemoRequestErrorBody;
  console.error(`Demo request: server responded ${response.status}`, body);
  return { ok: false, message: getDemoRequestErrorMessage(response.status, body) };
};
