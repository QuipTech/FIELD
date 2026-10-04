import type { Metadata } from "next";
import { LegalLayout } from "@/components/common/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — QuipTech FIELD",
  description: "The terms that govern use of the QuipTech FIELD platform.",
};

const TermsPage = () => {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="Placeholder — pending legal review"
      intro="These terms govern access to and use of QuipTech FIELD, including our web app, mobile app and admin portal. By creating an account or using FIELD, you agree to these terms."
      sections={[
        {
          heading: "1. Acceptance of terms",
          body: (
            <p>
              By accessing or using FIELD you agree to be bound by these terms on behalf of
              yourself and, if applicable, the organisation you represent. If you do not agree,
              do not use the platform.
            </p>
          ),
        },
        {
          heading: "2. The service",
          body: (
            <p>
              FIELD provides AI-assisted diagnostics, machine &amp; system history, a knowledge
              centre, and remote expert support for field technicians and technical managers
              working on critical assets. Features vary by plan; see{" "}
              <a href="/#pricing" className="text-primary hover:text-primaryHover">
                Pricing
              </a>
              .
            </p>
          ),
        },
        {
          heading: "3. Accounts &amp; roles",
          body: (
            <p>
              Accounts are role-scoped (technician, manager, remote expert, admin). Customers are
              responsible for managing user access, keeping credentials confidential, and
              promptly deactivating accounts for departed staff.
            </p>
          ),
        },
        {
          heading: "4. Subscriptions &amp; billing",
          body: (
            <p>
              Standard plans are billed monthly per asset under management; Enterprise plans are
              annual and negotiated per deal. Fees are exclusive of GST unless stated. Non-payment
              may result in suspension after notice.
            </p>
          ),
        },
        {
          heading: "5. Acceptable use",
          body: (
            <ul className="list-disc space-y-1.5 pl-5">
              <li>No reverse engineering, scraping or reselling access to FIELD.</li>
              <li>No uploading content you don&rsquo;t have rights to, or unlawful material.</li>
              <li>No attempting to bypass role-based permissions or approval workflows.</li>
              <li>AI-generated answers must be used as guidance, not as a substitute for site safety procedures.</li>
            </ul>
          ),
        },
        {
          heading: "6. Customer data",
          body: (
            <p>
              Customers retain ownership of the asset, service and document data they upload.
              QuipTech processes that data to provide the service, as described in our{" "}
              <a href="/data-processing" className="text-primary hover:text-primaryHover">
                Data Processing
              </a>{" "}
              page.
            </p>
          ),
        },
        {
          heading: "7. Intellectual property",
          body: (
            <p>
              FIELD, the QuipTech name and logo, and the underlying software are the property of
              QuipTech Pty Ltd. Nothing in these terms transfers that ownership to customers or
              users.
            </p>
          ),
        },
        {
          heading: "8. Availability &amp; support",
          body: (
            <p>
              We aim for high availability. Standard plans do not include a contractual uptime SLA; Enterprise SLAs are
              defined in the order form.
            </p>
          ),
        },
        {
          heading: "9. Limitation of liability",
          body: (
            <p>
              To the extent permitted by law, QuipTech&rsquo;s liability arising from use of
              FIELD is limited to fees paid in the twelve months preceding the claim. FIELD
              provides AI-assisted guidance and does not replace OEM procedures or professional
              judgement on site.
            </p>
          ),
        },
        {
          heading: "10. Termination",
          body: (
            <p>
              Either party may terminate for material breach not cured within a reasonable
              notice period. On termination, customer data is retained per our{" "}
              <a href="/privacy" className="text-primary hover:text-primaryHover">
                Privacy Policy
              </a>{" "}
              and then deleted or anonymised.
            </p>
          ),
        },
        {
          heading: "11. Governing law",
          body: <p>These terms are governed by the laws of Australia.</p>,
        },
        {
          heading: "12. Changes &amp; contact",
          body: (
            <p>
              We may update these terms from time to time; material changes will be notified to
              account admins. Questions? Reach us via our{" "}
              <a href="/contact" className="text-primary hover:text-primaryHover">
                contact page
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
};

export default TermsPage;
