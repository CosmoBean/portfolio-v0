import agenticAi from "@/content/domains/agentic-ai.json";
import aiMl from "@/content/domains/ai-ml.json";
import appliedScience from "@/content/domains/applied-science.json";
import deepLearning from "@/content/domains/deep-learning.json";
import mlops from "@/content/domains/mlops.json";
import systems from "@/content/domains/systems.json";

export type DomainIconName = "Brain" | "Cpu" | "Server" | "Bot" | "GitBranch" | "HeartPulse";

export interface DomainSummary {
  color: string;
  description: string;
  highlightMetric: string;
  icon: DomainIconName;
  name: string;
  projectCount: number;
  related: string[];
  skills: string[];
  slug: string;
  tagline: string;
  title: string;
}

const domainMetrics: Record<string, { highlightMetric: string; projectCount: number; related: string[] }> = {
  "deep-learning": {
    highlightMetric: "4 deep dives",
    projectCount: 4,
    related: ["ai-ml", "applied-science"],
  },
  "ai-ml": {
    highlightMetric: "4 shipped systems",
    projectCount: 4,
    related: ["agentic-ai", "systems"],
  },
  systems: {
    highlightMetric: "40% faster queries",
    projectCount: 3,
    related: ["mlops", "ai-ml"],
  },
  "agentic-ai": {
    highlightMetric: "2 autonomous flows",
    projectCount: 2,
    related: ["ai-ml", "applied-science"],
  },
  mlops: {
    highlightMetric: "70% cost cut",
    projectCount: 2,
    related: ["systems", "ai-ml"],
  },
  "applied-science": {
    highlightMetric: "85-92% accuracy",
    projectCount: 3,
    related: ["deep-learning", "agentic-ai"],
  },
};

const domainCatalog = [
  deepLearning,
  aiMl,
  systems,
  agenticAi,
  mlops,
  appliedScience,
];

export const domainSummaries: DomainSummary[] = domainCatalog.map((domain) => ({
  ...domain,
  ...domainMetrics[domain.slug],
  icon: domain.icon as DomainIconName,
  title: domain.name,
}));

export function getDomainSummary(slug: string) {
  return domainSummaries.find((domain) => domain.slug === slug);
}
