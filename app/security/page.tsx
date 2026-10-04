import type { Metadata } from "next";
import { LegalLayout } from "@/components/common/LegalLayout";

export const metadata: Metadata = {
  title: "Security — QuipTech FIELD",
  description: "How QuipTech FIELD protects customer data and critical asset information.",
};

const SecurityPage = () => {
  return (
    <LegalLayout
      eyebrow="Trust"
      title="Security"
      lastUpdated="Placeholder — pending legal review"
      intro="FIELD is built for sites where data separation and access control matter. Here's an overview of how we protect the platform and the data on it."
      sections={[
        {
          heading: "1. Infrastructure &amp; hosting",
          body: (
            <p>
              FIELD is hosted on cloud infrastructure in Australia. Data is encrypted at rest
              (AES-256) and in transit (TLS 1.2+). Backups are encrypted and access to production
              infrastructure is restricted to authorised engineers.
            </p>
          ),
        },
        {
          heading: "2. Multi-tenancy &amp; data isolation",
          body: (
            <p>
              FIELD is multi-tenant by design, with strict data separation between operations. A
              technician or manager can only see data scoped to their tenant and role.
            </p>
          ),
        },
        {
          heading: "3. Access control",
          body: (
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Role-scoped permissions for technicians, managers and remote experts.</li>
              <li>SSO/SAML available on Enterprise plans.</li>
              <li>Enforced password policies and session expiry.</li>
            </ul>
          ),
        },
        {
          heading: "4. Audit logging",
          body: (
            <p>
              Every question asked, document approved and answer given is attributable and
              exportable. Admins get a full audit trail through the FIELD portal.
            </p>
          ),
        },
        {
          heading: "5. Approval-gated knowledge",
          body: (
            <p>
              Manuals, service bulletins and known issues only reach technicians after
              approval — nothing unreviewed reaches the field.
            </p>
          ),
        },
        {
          heading: "6. Compliance",
          body: (
            <p>
              QuipTech aligns its controls with SOC 2 Type II. Compliance reports and
              certifications are available to enterprise customers under NDA.
            </p>
          ),
        },
        {
          heading: "7. Vulnerability management",
          body: (
            <p>
              We run regular vulnerability scanning and engage third-party penetration testers
              on a periodic basis. Findings are triaged and remediated against defined severity
              timelines.
            </p>
          ),
        },
        {
          heading: "8. Incident response",
          body: (
            <p>
              We maintain an incident response process covering detection, containment, customer
              notification and post-incident review.
            </p>
          ),
        },
        {
          heading: "9. Reporting a vulnerability",
          body: (
            <p>
              Found a security issue? Email{" "}
              <a href="mailto:security@quiptechfield.com" className="text-primary hover:text-primaryHover">
                security@quiptechfield.com
              </a>
              . We follow responsible disclosure and will acknowledge reports within a reasonable
              timeframe.
            </p>
          ),
        },
      ]}
    />
  );
};

export default SecurityPage;
