export type HowStep = {
  number: string;
  title: string;
  description: string;
  headBg: string;
  imageLabel: string;
  image?: string;
};

export const howSteps: HowStep[] = [
  {
    number: "01",
    title: "The technician asks",
    description:
      "In plain language, from the machine record or the mobile app, glove-friendly and offline-tolerant.",
    headBg: "#4A34C7",
    imageLabel: "Technician speaking a question into the app",
    image: "/images/howItWorks/technicianAskingQuestion.jpg",
  },
  {
    number: "02",
    title: "FIELD searches",
    description:
      "Approved knowledge, that asset's service record and its configuration history, together, not separately.",
    headBg: "#5B47D0",
    imageLabel: "Close-up of the app searching machine history",
    image: "/images/howItWorks/appSearchingMachineHistory.jpg",
  },
  {
    number: "03",
    title: "A sourced answer",
    description:
      "Steps, torque figures and part numbers with citations back to the manual or bulletin behind them.",
    headBg: "#372697",
    imageLabel: "Technician reading the sourced answer on a machine",
    image: "/images/howItWorks/technicianReadingSourcedAnswer.jpg",
  },
  {
    number: "04",
    title: "Or it escalates",
    description:
      "When confidence is low, FIELD opens a live expert session carrying the question and asset context with it.",
    headBg: "#1E2024",
    imageLabel: "Remote expert joining the session on a call",
    image: "/images/howItWorks/remoteExpertSession.jpg",
  },
];
