import type { Metadata } from "next";
import { LegalLayout } from "@/components/common/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — QuipTech FIELD",
  description: "How QuipTech collects, uses, holds and discloses personal information in the FIELD Services.",
};

const PrivacyPage = () => {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="30/06/2026"
      intro={"QuipTech Pty Ltd (ABN 86 655 802 083) (\"QuipTech\", \"we\", \"us\") operates the QuipTech FIELD platform, including the website at quiptechfield.com.au, the FIELD web portal and the FIELD mobile and wearable apps (together, the \"Services\"). This policy explains how we collect, use, hold and disclose personal information, and how you can access or correct it or make a complaint.\n\nWe handle personal information in line with the Australian Privacy Principles (APPs) in the Privacy Act 1988 (Cth)."}
      sections={[
        {
          heading: "1. Two roles we play",
          body: (
            <>
              <p>{"Our own information. For website visitors, prospective customers, partners and account administrators, we decide how personal information is used. This policy applies in full."}</p>
              <p>{"Information we handle for customers. When a business uses FIELD, its technicians, managers and experts create content in the platform: questions, photos, video sessions, service records and notes (\"Customer Data\"). We process Customer Data on that business's behalf and under our agreement with them. If you use FIELD through your employer or a contractor, they control how your information is used, and you should contact them first about their privacy practices. We will help them respond to your request."}</p>
            </>
          ),
        },
        {
          heading: "2. What we collect",
          body: (
            <>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>{"Contact and account details: name, email, phone, company, job title, site, role and login details."}</li>
                <li>{"Enquiry and commercial information: demo requests, partner enquiries, correspondence, and billing contact details. Card payments are handled by our payment provider; we don't store full card numbers."}</li>
                <li>{"Platform content: questions asked of the AI assistant, answers, flags and feedback, photos, notes, service and configuration records, and the audio and video of remote expert sessions where recording is enabled by the customer."}</li>
                <li>{"Usage and device information: log data, IP address, device and browser type, app version, timestamps, and the features used. This supports security, billing (including AI usage metering) and product improvement."}</li>
                <li>{"Location: only where a customer enables it, to associate entries with a site or asset."}</li>
                <li>{"Website analytics and cookies: see section 8."}</li>
              </ul>
              <p>{"We collect information directly from you, from the business you work for when they set up your account, and automatically when you use the Services. We don't seek sensitive information (such as health information), and we ask users not to enter it into the platform."}</p>
              <p>{"You can browse the website without identifying yourself. To use the platform, we need to identify you."}</p>
            </>
          ),
        },
        {
          heading: "3. How we use it",
          body: (
            <>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>{"To provide, operate, secure and support the Services"}</li>
                <li>{"To generate answers to questions from the customer's own approved documents and records"}</li>
                <li>{"To connect technicians with remote experts"}</li>
                <li>{"To bill customers and partners, including measuring usage against plan allowances"}</li>
                <li>{"To respond to enquiries, run demos and pilots, and manage our customer and partner relationships"}</li>
                <li>{"To send service notices, and marketing where you've agreed or where permitted by the Spam Act 2003 (you can unsubscribe at any time)"}</li>
                <li>{"To improve the Services, using aggregated or de-identified usage information"}</li>
                <li>{"To meet legal obligations and enforce our terms"}</li>
              </ul>
            </>
          ),
        },
        {
          heading: "4. AI processing",
          body: (
            <>
              <p>{"FIELD uses large language models to answer questions. These models run in Australian data centres operated by our cloud provider. Questions and the relevant extracts from a customer's documents are sent to the model to produce an answer, along with citations."}</p>
              <p>{"We do not use Customer Data to train third-party AI models, and our cloud provider does not use it to train its models. Raw conversations are not added to a customer's knowledge library; only fix records approved by the customer's own staff are added."}</p>
              <p>{"FIELD does not use automated processes to make decisions about individuals that could significantly affect their rights or interests. [Lawyer to confirm this statement covers the automated decision-making disclosure obligations commencing 10 December 2026.]"}</p>
            </>
          ),
        },
        {
          heading: "5. Who we disclose it to",
          body: (
            <>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>{"The customer you work for, including its administrators and authorised remote experts"}</li>
                <li>{"A partner or reseller that provides FIELD to your organisation, to the extent needed to set up, support and bill the account"}</li>
                <li>{"Service providers who help us run the Services, under contract: cloud hosting and AI infrastructure, remote video support, payment processing, email delivery, customer support and analytics"}</li>
                <li>{"Professional advisers, and anyone acquiring our business, under confidentiality"}</li>
                <li>{"Authorities, where required or authorised by law"}</li>
              </ul>
              <p>{"We don't sell personal information."}</p>
            </>
          ),
        },
        {
          heading: "6. Overseas disclosure",
          body: (
            <>
              <p>{"The FIELD platform and Customer Data are hosted in Australia. Some of our service providers may process limited personal information overseas, mainly account, billing, support and email information. These are located in [list countries, e.g. the United States, India, the European Union — confirm against each provider]. We take reasonable steps to make sure they handle it consistently with the APPs."}</p>
            </>
          ),
        },
        {
          heading: "7. Storage, security and retention",
          body: (
            <>
              <p>{"We store information in Australian data centres with encryption in transit and at rest, role-based access, isolation between customers' data, and audit logging of platform activity. Staff access is limited to what their role requires."}</p>
              <p>{"We keep personal information for as long as needed to provide the Services and meet legal, accounting and contractual obligations. When a customer's agreement ends, we delete or de-identify Customer Data within [90] days after offering an export, unless the law requires us to keep it."}</p>
              <p>{"If we experience a data breach likely to result in serious harm, we will notify affected individuals and the Office of the Australian Information Commissioner (OAIC) as required by the Notifiable Data Breaches scheme, and the affected customer."}</p>
            </>
          ),
        },
        {
          heading: "8. Cookies and analytics",
          body: (
            <>
              <p>{"The website uses essential cookies to keep it working and sign you in, and [analytics tool] to understand how the site is used. You can block cookies in your browser; some features may then not work."}</p>
            </>
          ),
        },
        {
          heading: "9. Access, correction and complaints",
          body: (
            <>
              <p>{"You can ask for access to, or correction of, the personal information we hold about you. We'll respond within 30 days. If your information sits in a customer's account, we may refer you to that customer and help them respond."}</p>
              <p>{"If you have a privacy complaint, contact us first. We'll acknowledge it within 7 days and aim to resolve it within 30 days. If you're not satisfied, you can contact the OAIC at oaic.gov.au or on 1300 363 992."}</p>
            </>
          ),
        },
        {
          heading: "10. Children",
          body: (
            <>
              <p>{"The Services are for business use and not directed at anyone under 18."}</p>
            </>
          ),
        },
        {
          heading: "11. Changes",
          body: (
            <>
              <p>{"We may update this policy. We'll post the new version here with its date and tell customers of material changes."}</p>
            </>
          ),
        },
        {
          heading: "12. Contact",
          body: (
            <>
              <p>
                {"Privacy Officer, QuipTech Pty Ltd (ABN 86 655 802 083). Email: "}
                <a href="mailto:contact@quiptechsolutions.com" className="text-primary hover:text-primaryHover">
                  contact@quiptechsolutions.com
                </a>
              </p>
            </>
          ),
        },
      ]}
    />
  );
};

export default PrivacyPage;
