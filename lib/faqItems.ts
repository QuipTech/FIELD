import type { IconName } from "@/components/icons/Icon";

export type FaqItem = {
  icon: IconName;
  question: string;
  answer: string;
  wide?: boolean;
};

export type FaqCategory = {
  title: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    title: "The product",
    items: [
      {
        icon: "book",
        question: "Where do the answers come from?",
        answer:
          "Only from documents your team has uploaded and approved: OEM manuals, service bulletins, your own procedures, plus that asset's service and configuration history. Nothing comes from the open web.",
      },
      {
        icon: "shield",
        question: "Can the AI be wrong, and would we know?",
        answer:
          "Every answer cites the document and page behind it. Technicians can flag an answer as wrong, and low-confidence or flagged answers go to an admin review queue. FIELD supports a qualified technician's judgement; it doesn't replace your isolation, safety or OEM procedures.",
      },
      {
        icon: "life",
        question: "What happens when there's no answer in the documents?",
        answer:
          "FIELD says so rather than guessing, and offers to open a live session with a remote expert. The question and the machine's record travel with it, so the expert starts with context.",
      },
      {
        icon: "truck",
        question: "Does it work across brands?",
        answer:
          "Yes. Every make on site is modelled the same way, so a technician moves from a CAT truck to a Komatsu loader without changing tools.",
      },
      {
        icon: "book",
        question: "How does the knowledge base grow?",
        answer:
          "When a fault is resolved, FIELD drafts a step-by-step record of the fix. A knowledge manager on your team reviews and approves it before any other technician sees it. Raw conversations are never added to the library.",
      },
      {
        icon: "history",
        question: "What is configuration history?",
        answer:
          "A record of what's fitted to each machine over time: components, firmware versions, parts. FIELD shows exactly what changed since the machine last worked, which is often where the fault is.",
      },
    ],
  },
  {
    title: "In the field",
    items: [
      {
        icon: "truck",
        question: "What happens with no signal in the pit?",
        answer:
          "Saved manuals and the asset record stay readable offline. Entries and photos queue on the device and sync once it's back in range.",
      },
      {
        icon: "video",
        question: "What devices does it run on?",
        answer:
          "Phones and tablets, from the browser or as an installed app. Hands-free smart glasses are supported for remote expert sessions. We'll recommend hardware during your pilot; it's quoted separately.",
      },
      {
        icon: "users",
        question: "Do technicians need training?",
        answer:
          "Very little. They ask in plain language, from the machine record. Onboarding includes a short session per site for technicians and a longer one for managers and knowledge managers.",
      },
    ],
  },
  {
    title: "Data & security",
    items: [
      {
        icon: "shield",
        question: "Where is our data stored?",
        answer:
          "In Australia. The platform and its AI processing run in Australian data centres.",
      },
      {
        icon: "lock",
        question: "Can other customers see our documents or data?",
        answer:
          "No. Each customer's data is isolated at the database level, and there's no shared document library between customers. Your OEM licences are only used within your account.",
      },
      {
        icon: "lock",
        question: "Is our data used to train AI models?",
        answer:
          "No. Your documents, questions and records are used to answer your team's questions, and aren't used to train third-party AI models.",
      },
      {
        icon: "file",
        question: "Who owns the knowledge we build?",
        answer:
          "You do. Your documents, service records and approved fixes remain yours, and you can export them if you leave.",
      },
    ],
  },
  {
    title: "Commercial",
    items: [
      {
        icon: "file",
        question: "How is FIELD priced?",
        answer:
          "Per asset under management, billed monthly, with an AI query allowance included. Enterprise plans are annual and negotiated per deal. All prices are ex-GST.",
      },
      {
        icon: "check",
        question: "What does a pilot involve?",
        answer:
          "A fixed fee for 30 or 60 days on one site, covering 10 to 20 assets with the full Standard feature set. At the end it converts to a Standard plan or ends on the agreed date.",
      },
      {
        icon: "history",
        question: "How long does a rollout take?",
        answer:
          "A site goes live once your documents are loaded and roles are set up; typically days, not months, and one site at a time.",
      },
      {
        icon: "spark",
        question: "What happens if a site runs over its AI allowance?",
        answer:
          "Technicians are never cut off mid-job. Usage above the allowance is billed as overage, and we'll suggest a better-fitting plan if it keeps happening.",
      },
      {
        icon: "users",
        question: "Can we offer FIELD under our own brand?",
        answer:
          "Yes. Dealers, OEMs and integrators can white-label FIELD. See Partners & dealers.",
      },
    ],
  },
];
