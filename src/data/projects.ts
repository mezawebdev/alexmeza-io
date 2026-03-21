export interface Project {
  year: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    year: "2024",
    title: "Payments Infrastructure Rebuild",
    role: "Tech Lead",
    description:
      "Migrated a legacy monolith to a distributed payment system handling 2M+ daily transactions. Cut p99 latency by 60% and eliminated the single point of failure behind three major outages.",
    tags: ["go", "kafka", "postgres"],
  },
  {
    year: "2023",
    title: "Developer Portal & API Platform",
    role: "Full-stack Engineer",
    description:
      "Built the public developer experience end to end — interactive docs, SDK generation, sandbox environments, and API key management for 4,000+ external developers.",
    tags: ["typescript", "react", "openapi"],
  },
  {
    year: "2022",
    title: "Real-time Analytics Pipeline",
    role: "Backend Engineer",
    description:
      "Designed the event ingestion pipeline from scratch — collecting, transforming, and surfacing usage data for a team of 30 across eng, product, and data science.",
    tags: ["python", "clickhouse", "aws"],
  },
  {
    year: "2021",
    title: "Mobile Banking App",
    role: "iOS Engineer",
    description:
      "Core contributor to a neobank app from 0 to launch. Built the onboarding flow, biometric auth, and real-time transaction feed serving 50K users in the first quarter.",
    tags: ["swift", "swiftui", "graphql"],
  },
];
