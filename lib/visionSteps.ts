export type VisionStep = {
  number: string;
  title: string;
  description: string;
};

export const visionSteps: VisionStep[] = [
  {
    number: "01",
    title: "Identifies the machine",
    description: "Model and variant recognised from the frame",
  },
  {
    number: "02",
    title: "Reads the fault codes",
    description: "Display panels read straight from the camera",
  },
  {
    number: "03",
    title: "Spots the issue",
    description:
      "“The aftercooler sensor connector isn't fully seated.”",
  },
  {
    number: "04",
    title: "Finds the precedent",
    description: "The same repair on a sister unit, four months earlier",
  },
];
