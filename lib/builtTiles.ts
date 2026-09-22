import type { IconName } from "@/components/icons/Icon";

export type BuiltTile = {
  icon: IconName;
  title: string;
  description: string;
};

export const builtTiles: BuiltTile[] = [
  {
    icon: "lock",
    title: "Multi-tenant",
    description: "Isolated per operation, per site",
  },
  {
    icon: "file",
    title: "Audit-logged",
    description: "Every action attributable and exportable",
  },
  {
    icon: "users",
    title: "Role-scoped",
    description: "Permissions by role, not by trust",
  },
  {
    icon: "shield",
    title: "Approval-gated",
    description: "No unreviewed content reaches the field",
  },
];
