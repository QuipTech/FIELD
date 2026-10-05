export type DemoFieldName = "email" | "firstName" | "lastName" | "company" | "country" | "phone" | "message";

export type DemoRequestValues = Record<DemoFieldName, string>;

export type DemoFieldErrors = Partial<Record<DemoFieldName, string>>;

export const demoFieldLimits: Record<DemoFieldName, number> = {
  email: 254,
  firstName: 100,
  lastName: 100,
  company: 200,
  country: 100,
  phone: 30,
  message: 2000,
};

const requiredFields: DemoFieldName[] = ["email", "firstName", "lastName", "company", "country"];

const requiredMessages: Partial<Record<DemoFieldName, string>> = {
  email: "Enter your business email.",
  firstName: "Enter your first name.",
  lastName: "Enter your last name.",
  company: "Enter your company name.",
  country: "Select your country.",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const countries = [
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

export const validateDemoRequest = (values: DemoRequestValues) => {
  const errors: DemoFieldErrors = {};

  (Object.keys(demoFieldLimits) as DemoFieldName[]).forEach((field) => {
    const value = values[field].trim();
    if (requiredFields.includes(field) && !value) {
      errors[field] = requiredMessages[field];
    } else if (value.length > demoFieldLimits[field]) {
      errors[field] = `Must be ${demoFieldLimits[field]} characters or fewer.`;
    }
  });

  if (!errors.email && !EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
};
