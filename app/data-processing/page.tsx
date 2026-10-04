import type { Metadata } from "next";
import { LegalLayout } from "@/components/common/LegalLayout";

export const metadata: Metadata = {
  title: "Data Processing — QuipTech FIELD",
  description: "How QuipTech processes customer data as a processor on behalf of FIELD customers.",
};

const DataProcessingPage = () => {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Data Processing"
      lastUpdated="Placeholder — pending legal review"
      intro="For most FIELD customers, the customer is the data controller and QuipTech is the data processor for the asset, service and account data processed on their behalf. This page summarises how that processing works; enterprise customers can request our full Data Processing Agreement (DPA)."
      sections={[
        {
          heading: "1. Roles &amp; responsibilities",
          body: (
            <p>
              The customer determines what data is uploaded to FIELD and who can access it.
              QuipTech processes that data only as instructed by the customer and as needed to
              operate the platform.
            </p>
          ),
        },
        {
          heading: "2. Categories of data processed",
          body: (
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Asset &amp; machine records (make, model, service history, configuration).</li>
              <li>Fault, diagnostic and question/answer logs.</li>
              <li>Uploaded manuals, bulletins and internal procedures.</li>
              <li>User accounts and role assignments.</li>
            </ul>
          ),
        },
        {
          heading: "3. Subprocessors",
          body: (
            <p>
              We use a small number of subprocessors for hosting, storage and infrastructure
              (for example, cloud hosting in Australia). A current subprocessor list is available
              to enterprise customers on request.
            </p>
          ),
        },
        {
          heading: "4. Security measures",
          body: (
            <p>
              Data is encrypted in transit and at rest, access is role-scoped, and every
              question asked, document approved and answer given is audit-logged. See our{" "}
              <a href="/security" className="text-primary hover:text-primaryHover">
                Security
              </a>{" "}
              page for detail.
            </p>
          ),
        },
        {
          heading: "5. International transfers",
          body: (
            <p>
              FIELD is hosted in Australia. Any transfer outside Australia by a subprocessor is
              subject to contractual safeguards.
            </p>
          ),
        },
        {
          heading: "6. Data subject requests",
          body: (
            <p>
              Where an individual raises an access, correction or deletion request, we support
              the customer (as controller) in responding to it within a reasonable timeframe.
            </p>
          ),
        },
        {
          heading: "7. Audit rights",
          body: (
            <p>
              Enterprise customers may request evidence of our security controls, including
              relevant audit or compliance reports, subject to confidentiality terms.
            </p>
          ),
        },
        {
          heading: "8. Breach notification",
          body: (
            <p>
              We will notify affected customers without undue delay after becoming aware of a
              data breach affecting their data, consistent with our contractual and legal
              obligations.
            </p>
          ),
        },
        {
          heading: "9. Retention &amp; deletion",
          body: (
            <p>
              On offboarding, customer data is deleted or returned within an agreed window, per
              the customer&rsquo;s order form or our standard retention schedule.
            </p>
          ),
        },
        {
          heading: "10. Request the full DPA",
          body: (
            <p>
              Enterprise customers can request our standard Data Processing Agreement via{" "}
              <a href="mailto:legal@quiptechfield.com" className="text-primary hover:text-primaryHover">
                legal@quiptechfield.com
              </a>{" "}
              or the{" "}
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

export default DataProcessingPage;
