import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface ProjectSummary {
  category: string;
  description: string;
  domains: string[];
  headlineMetric: string;
  slug: string;
  status: "concept" | "research" | "shipped";
  tech: string[];
  title: string;
}

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  description: string;
  domains: string[];
  category: string;
  date: string;
  headline_metric: string;
  tech: string[];
  status: string;
}

export interface HeadingEntry {
  id: string;
  level: 2 | 3;
  text: string;
}

export interface ProjectDocument {
  content: string;
  frontmatter: ProjectFrontmatter;
  headings: HeadingEntry[];
}

const projectsDirectory = path.join(process.cwd(), "src", "content", "projects");

export const projectSummaries: ProjectSummary[] = [
  {
    category: "PRODUCTION SYSTEMS",
    description: "Scaled AI-driven filtering infrastructure through sharding strategy, workload analysis, and disciplined rollout across multi-tenant traffic.",
    domains: ["systems", "ai-ml"],
    headlineMetric: "40% faster query response",
    slug: "phenom-filter-scaling",
    status: "shipped",
    tech: ["PostgreSQL", "Sharding", "Performance Tuning", "Python"],
    title: "AI Filter Platform Scaling at Phenom",
  },
  {
    category: "CLOUD PLATFORM",
    description: "Cut ECS waste, stabilized CRM delivery, and improved cost discipline with scheduled scaling and service ownership.",
    domains: ["systems", "mlops"],
    headlineMetric: "70% AWS ECS cost reduction",
    slug: "byjus-cloud-optimization",
    status: "shipped",
    tech: ["AWS ECS", "Spring Boot", "React", "Cost Optimization"],
    title: "BYJU'S Cloud Optimization",
  },
  {
    category: "BIOMEDICAL ML",
    description: "Classified hand gestures from EMG sequences with attention-assisted CNN/LSTM experiments and robust preprocessing.",
    domains: ["deep-learning", "applied-science"],
    headlineMetric: "85-92% gesture accuracy",
    slug: "emg-gesture-recognition",
    status: "research",
    tech: ["PyTorch", "EMG", "CNN/LSTM", "Attention"],
    title: "EMG Gesture Recognition",
  },
  {
    category: "APPLIED AI PRODUCT",
    description: "Built an asynchronous summarization workflow for long-form video, focused on output quality and user time saved.",
    domains: ["ai-ml"],
    headlineMetric: "70% watch-time saved",
    slug: "youtube-digest",
    status: "research",
    tech: ["FastAPI", "Gemini API", "Async Jobs", "Prompting"],
    title: "YouTube Digest",
  },
  {
    category: "RAG SYSTEM",
    description: "Designed a deterministic repository retrieval stack that prioritizes precision, provenance, and failure visibility.",
    domains: ["ai-ml", "agentic-ai"],
    headlineMetric: "High-precision answers",
    slug: "deterministic-rag",
    status: "concept",
    tech: ["RAG", "Embeddings", "Vector DB", "Evaluation"],
    title: "Deterministic RAG",
  },
  {
    category: "CLINICAL AGENT",
    description: "Combined structured risk modeling with explainable language output for longitudinal glioma monitoring workflows.",
    domains: ["agentic-ai", "applied-science"],
    headlineMetric: "Decision support workflow",
    slug: "glioma-monitoring-agent",
    status: "concept",
    tech: ["XGBoost", "SHAP", "LLM", "Clinical AI"],
    title: "Glioma Monitoring Agent",
  },
  {
    category: "FOUNDATIONS",
    description: "Implemented backpropagation from first principles to make gradient flow, loss shaping, and optimization fully inspectable.",
    domains: ["deep-learning"],
    headlineMetric: "Math-to-code clarity",
    slug: "backprop-engine",
    status: "research",
    tech: ["Python", "NumPy", "Optimization", "Autodiff"],
    title: "Backprop Engine",
  },
  {
    category: "SYSTEMS TOOLING",
    description: "Explored self-hosted remote terminal access with transport security, observability, and low-friction operator workflows.",
    domains: ["systems"],
    headlineMetric: "Low-latency remote control",
    slug: "termbridge",
    status: "concept",
    tech: ["Node.js", "WebSockets", "Auth", "Terminal IO"],
    title: "Termbridge",
  },
  {
    category: "GRAPH LEARNING",
    description: "Studied oversmoothing dynamics in graph convolutions to clarify where additional depth stops improving representation quality.",
    domains: ["deep-learning"],
    headlineMetric: "Depth-vs-signal analysis",
    slug: "gcn-oversmoothing",
    status: "research",
    tech: ["PyTorch Geometric", "GCN", "Graph Theory", "Evaluation"],
    title: "GCN Oversmoothing",
  },
  {
    category: "ML PLATFORM",
    description: "Set up experiment tracking and reproducible training workflows that separate model iteration from environment chaos.",
    domains: ["mlops"],
    headlineMetric: "Reproducible experiments",
    slug: "mlflow-pipeline",
    status: "concept",
    tech: ["MLFlow", "Docker", "CI/CD", "Monitoring"],
    title: "MLFlow Pipeline",
  },
  {
    category: "PRODUCTION NLP",
    description: "Built validation and classification services around user-action signals, focusing on stable integration with product APIs.",
    domains: ["ai-ml"],
    headlineMetric: "Production-scale validation",
    slug: "phenom-nlp-classification",
    status: "shipped",
    tech: ["NLP", "Classification", "APIs", "Data Pipelines"],
    title: "Phenom NLP Classification",
  },
  {
    category: "CROSS-MODAL LEARNING",
    description: "Explored multimodal knowledge transfer for clinically relevant prediction tasks, balancing representation power with honest evaluation.",
    domains: ["applied-science", "deep-learning"],
    headlineMetric: "Multimodal risk modeling",
    slug: "cross-modal-distillation",
    status: "concept",
    tech: ["Medical Imaging", "Distillation", "Cross-Modal Learning", "Biostatistics"],
    title: "Cross-Modal Distillation",
  },
];

export async function getProjectSlugs() {
  try {
    const files = await fs.readdir(projectsDirectory);

    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export async function getProjectFrontmatter(slug: string) {
  try {
    const filePath = path.join(projectsDirectory, `${slug}.mdx`);
    const source = await fs.readFile(filePath, "utf8");
    const { data } = matter(source);

    return data as Partial<ProjectFrontmatter>;
  } catch {
    return null;
  }
}

export function getProjectsByDomain(domainSlug: string) {
  return projectSummaries.filter((project) => project.domains.includes(domainSlug));
}

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[`*_~]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function extractHeadings(source: string): HeadingEntry[] {
  return source
    .split("\n")
    .map((line) => {
      if (line.startsWith("## ")) {
        const text = line.replace(/^##\s+/, "").trim();
        return { id: slugifyHeading(text), level: 2 as const, text };
      }

      if (line.startsWith("### ")) {
        const text = line.replace(/^###\s+/, "").trim();
        return { id: slugifyHeading(text), level: 3 as const, text };
      }

      return null;
    })
    .filter((entry): entry is HeadingEntry => Boolean(entry));
}

export async function getProjectDocument(slug: string) {
  try {
    const filePath = path.join(projectsDirectory, `${slug}.mdx`);
    const source = await fs.readFile(filePath, "utf8");
    const { content, data } = matter(source);

    return {
      content,
      frontmatter: data as ProjectFrontmatter,
      headings: extractHeadings(content),
    } satisfies ProjectDocument;
  } catch {
    return null;
  }
}

export function getProjectNavigation(slug: string) {
  const index = projectSummaries.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return {
      next: null,
      previous: null,
    };
  }

  return {
    next: projectSummaries[index + 1] ?? null,
    previous: projectSummaries[index - 1] ?? null,
  };
}
