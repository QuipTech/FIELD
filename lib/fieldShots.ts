export type FieldShot = {
  step: string;
  title: string;
  description: string;
  imageLabel: string;
  imageSrc: string;
};

export const fieldShots: FieldShot[] = [
  {
    step: "01 · At the machine",
    title: "Scan the asset, ask out loud",
    description:
      "The record opens with history, faults and manuals already attached.",
    imageLabel: "Technician at a stopped haul truck, phone in hand",
    imageSrc: "/images/fieldShots/image-slot-1.svg",
  },
  {
    step: "02 · While working",
    title: "Log it as it happens",
    description: "Photos, hours and downtime captured in three taps, offline-safe.",
    imageLabel: "Gloved hands holding the app on a phone",
    imageSrc: "/images/fieldShots/image-slot-2.svg",
  },
  {
    step: "03 · When it's stuck",
    title: "An expert joins with context",
    description:
      "The session carries the asset, the question and the history with it.",
    imageLabel: "Remote expert on a video call, workshop behind them",
    imageSrc: "/images/fieldShots/image-slot-3.svg",
  },
];
