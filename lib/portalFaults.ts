export type PortalFault = {
  asset: string;
  priority: "High" | "Medium" | "Low";
  status: "In progress" | "Unassigned" | "Resolved";
};

export const portalFaults: PortalFault[] = [
  { asset: "CAT 793F · HT-2201", priority: "High", status: "In progress" },
  { asset: "Komatsu 930E · LT-0847", priority: "Medium", status: "Unassigned" },
  { asset: "CAT 793F · HT-2188", priority: "Low", status: "Resolved" },
];

export const priorityClasses: Record<PortalFault["priority"], string> = {
  High: "text-priorityHigh",
  Medium: "text-priorityMedium",
  Low: "text-bodyGray",
};

export const statusClasses: Record<PortalFault["status"], string> = {
  "In progress": "bg-primaryTint text-primaryTintText",
  Unassigned: "bg-surfaceGray text-bodyGray",
  Resolved: "bg-successBg text-successText",
};
