import type { Metadata } from "next";
import { LegalLayout } from "@/components/common/LegalLayout";

export const metadata: Metadata = {
  title: "Accessibility — QuipTech FIELD",
  description: "QuipTech FIELD's commitment to accessible design.",
};

const AccessibilityPage = () => {
  return (
    <LegalLayout
      eyebrow="Trust"
      title="Accessibility"
      lastUpdated="Placeholder — pending legal review"
      intro="Field technicians use FIELD glove-friendly, offline, and sometimes in bright sun or low light — accessibility isn't an afterthought for us. Here's where we stand today and where we're headed."
      sections={[
        {
          heading: "1. Our commitment",
          body: (
            <p>
              We aim to make FIELD&rsquo;s web app, mobile app and marketing site usable by
              people with a wide range of abilities, including those using assistive technology.
            </p>
          ),
        },
        {
          heading: "2. Standard we target",
          body: (
            <p>
              We design towards the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA,
              across colour contrast, keyboard navigation, semantic structure and text
              alternatives.
            </p>
          ),
        },
        {
          heading: "3. What we've done so far",
          body: (
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Semantic headings and landmarks throughout the site and app.</li>
              <li>Keyboard-navigable menus, cards and forms with visible focus states.</li>
              <li>Colour palettes checked for contrast against WCAG AA thresholds.</li>
              <li>Alt text on meaningful images and icons.</li>
            </ul>
          ),
        },
        {
          heading: "4. Known limitations",
          body: (
            <p>
              Some product videos and demo recordings don&rsquo;t yet have captions or
              transcripts. We&rsquo;re working through these as part of an ongoing accessibility
              backlog.
            </p>
          ),
        },
        {
          heading: "5. Assistive technology",
          body: (
            <p>
              We test regularly with keyboard-only navigation and common screen readers. If
              something doesn&rsquo;t work well with the assistive technology you use, please
              tell us — that report goes straight into our backlog.
            </p>
          ),
        },
        {
          heading: "6. Feedback",
          body: (
            <p>
              Contact{" "}
              <a href="mailto:accessibility@quiptechfield.com" className="text-primary hover:text-primaryHover">
                accessibility@quiptechfield.com
              </a>{" "}
              or use our{" "}
              <a href="/contact" className="text-primary hover:text-primaryHover">
                contact page
              </a>{" "}
              to report an accessibility barrier. Include the page or feature and, where
              possible, the assistive technology you were using.
            </p>
          ),
        },
      ]}
    />
  );
};

export default AccessibilityPage;
