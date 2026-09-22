import type { IconName } from "@/components/icons/Icon";

export type Capability = {
  icon: IconName;
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    icon: "spark",
    title: "AI Assistant",
    description:
      "Instant, sourced answers drawn only from approved manuals and bulletins, every response cites the document and page it came from.",
  },
  {
    icon: "history",
    title: "Machine & system history",
    description:
      "A full service record per asset, down to the component, searchable by fault, part number, date or technician.",
  },
  {
    icon: "book",
    title: "Knowledge centre",
    description:
      "Manuals, service bulletins and known issues in one approval-gated library, nothing reaches the field unreviewed.",
  },
  {
    icon: "video",
    title: "Remote expert support",
    description:
      "Live AR and video assistance launched from the machine record, so the expert arrives already holding the context.",
  },
  {
    icon: "truck",
    title: "Multi-OEM fleet support",
    description:
      "One library and one workflow across every brand on site, mixed fleets are the norm, not an exception to configure around.",
  },
  {
    icon: "diff",
    title: "Configuration history",
    description:
      "Snapshot diffs showing exactly what changed since a machine last worked, components swapped, firmware moved, parts removed.",
  },
];
