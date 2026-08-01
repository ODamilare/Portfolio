export type StackGroup = {
  key: string;
  label: string;
  path: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    key: "interface",
    label: "Interface",
    path: "~/stack/interface.tsx",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
  },
  {
    key: "forms",
    label: "Forms & data",
    path: "~/stack/forms-data.ts",
    items: ["React Hook Form", "Yup", "Recharts", "Chart.js", "React Query"],
  },
  {
    key: "backend",
    label: "Backend & infra",
    path: "~/stack/backend-infra.ts",
    items: ["NestJS", "PostgreSQL", "TypeORM / Prisma", "Redis", "Docker", "Supabase"],
  },
  {
    key: "practice",
    label: "Practice",
    path: "~/stack/practice.md",
    items: ["JWT / OAuth", "RBAC", "Swagger / OpenAPI", "Audit logging", "CI-ready builds"],
  },
];

// Used by the proficiency chart in the Stack section.
// Adjust these to reflect your real confidence level (0-100).
export const proficiency = [
  { skill: "React / Next.js", value: 92 },
  { skill: "TypeScript", value: 88 },
  { skill: "UI / Tailwind", value: 90 },
  { skill: "NestJS / APIs", value: 65 },
  { skill: "PostgreSQL", value: 60 },
  { skill: "Auth / RBAC", value: 62 },
];
