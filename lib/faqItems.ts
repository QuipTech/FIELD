import type { IconName } from "@/components/icons/Icon";

export type FaqItem = {
  icon: IconName;
  question: string;
  answer: string;
  wide?: boolean;
};

export const faqItems: FaqItem[] = [
  {
    icon: "book",
    question: "Where do the answers come from?",
    answer:
      "Only from documents your team has uploaded and approved, OEM manuals, service bulletins, your own procedures, plus that asset's service and configuration history. Nothing from the open web.",
  },
  {
    icon: "truck",
    question: "What happens with no signal in the pit?",
    answer:
      "Saved manuals and the asset record stay readable offline, and entries queue locally with their photos, syncing the moment the device is back in range.",
  },
  {
    icon: "shield",
    question: "Can the AI be wrong, and would we know?",
    answer:
      "Every answer carries its citations, technicians can flag one as wrong, and low-confidence or flagged conversations land in an admin review queue rather than disappearing.",
  },
  {
    icon: "diff",
    question: "Does it work across brands?",
    answer:
      "Yes. The machine library models every make on site the same way, so a technician moves between a CAT truck and a Komatsu loader without changing tools.",
  },
  {
    icon: "file",
    question: "How long does a rollout take?",
    answer:
      "Phase 1 goes live per site once your document set is ingested and roles are mapped, typically weeks, not quarters, and one site at a time.",
    wide: true,
  },
];
