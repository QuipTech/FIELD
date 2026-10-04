import type { Metadata } from "next";
import { LegalLayout } from "@/components/common/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — QuipTech FIELD",
  description: "How QuipTech collects, uses and protects data in the FIELD platform.",
};

const PrivacyPage = () => {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="Placeholder — pending legal review"
      intro="This page explains what data QuipTech FIELD collects, why, and the choices you have. It covers technicians, managers and visitors using our sites, mobile app and portal."
      sections={[
        {
          heading: "1. Overview",
          body: (
            <p>
              QuipTech Pty Ltd (&ldquo;QuipTech&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides the
              FIELD platform to operations running critical assets. This policy applies to our
              marketing site, mobile app, admin portal and support channels. It does not cover
              third-party sites we may link to.
            </p>
          ),
        },
        {
          heading: "2. Information we collect",
          body: (
            <>
              <p>We collect the following categories of information:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  <strong className="text-ink">Account &amp; profile data</strong> — name, work
                  email, role, employer, phone number.
                </li>
                <li>
                  <strong className="text-ink">Asset &amp; service data</strong> — machine
                  records, fault history, questions asked, documents uploaded, technician notes.
                </li>
                <li>
                  <strong className="text-ink">Usage &amp; diagnostic data</strong> — pages
                  visited, features used, device type, crash logs.
                </li>
                <li>
                  <strong className="text-ink">Support &amp; communications</strong> — messages
                  sent through remote expert sessions, demo requests, support tickets.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "3. How we use your information",
          body: (
            <ul className="list-disc space-y-1.5 pl-5">
              <li>To operate and improve the FIELD platform, including AI-assisted answers.</li>
              <li>To provide remote expert support and maintain machine service history.</li>
              <li>To secure accounts and detect misuse, in line with our approach to <a href="/security" className="text-primary hover:text-primaryHover">security</a>.</li>
              <li>To communicate product updates, billing notices and support responses.</li>
              <li>To meet legal, tax and compliance obligations.</li>
            </ul>
          ),
        },
        {
          heading: "4. How we share information",
          body: (
            <p>
              We do not sell personal information. We share data only with subprocessors that
              host or support the platform (see our{" "}
              <a href="/data-processing" className="text-primary hover:text-primaryHover">
                Data Processing page
              </a>
              ), with OEM or dealer partners a customer explicitly connects, or where required by
              law.
            </p>
          ),
        },
        {
          heading: "5. Data retention",
          body: (
            <p>
              Asset and service records are retained for the duration of a customer&rsquo;s
              subscription plus a defined offboarding window, after which they are deleted or
              anonymised, unless a longer period is required by law or agreed in a customer
              contract.
            </p>
          ),
        },
        {
          heading: "6. Your rights",
          body: (
            <p>
              Depending on where you&rsquo;re located, you may have the right to access, correct,
              export or delete your personal information, and to object to certain processing.
              To exercise these rights, contact us using the details below.
            </p>
          ),
        },
        {
          heading: "7. International data transfers",
          body: (
            <p>
              FIELD is hosted in Australia. Where data is processed outside Australia by a
              subprocessor, we require contractual safeguards consistent with the Australian
              Privacy Act and, where applicable, the GDPR.
            </p>
          ),
        },
        {
          heading: "8. Changes to this policy",
          body: (
            <p>
              We&rsquo;ll update this page when our practices change and revise the &ldquo;last
              updated&rdquo; date above. Material changes will be communicated to account admins.
            </p>
          ),
        },
        {
          heading: "9. Contact us",
          body: (
            <p>
              Questions about this policy or a privacy request? Email{" "}
              <a href="mailto:privacy@quiptechfield.com" className="text-primary hover:text-primaryHover">
                privacy@quiptechfield.com
              </a>{" "}
              or use our{" "}
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

export default PrivacyPage;
