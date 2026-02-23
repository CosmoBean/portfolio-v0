import { contactPageData, experience, greeting, projects, skills, socialMediaLinks } from "@/lib/data";

export type ModuleId = "core-logic" | "neural-pathways" | "biomedical-signal";

export type SpecStatus = "DEPLOYED" | "TESTING" | "ARCHIVED" | "RESEARCH";

export interface ProjectSpec {
  slug: string;
  title: string;
  tagline: string;
  status: SpecStatus;
  domain: "infra" | "research" | "biomed" | "product";
  module: ModuleId;
  metrics: Array<{ label: string; value: string }>;
  stack: string[];
  artifactLinks: Array<{ label: string; href: string }>;
  notes: string[];
  constraints: string[];
  architecture: string[];
  results: string[];
  failureModes: string[];
  nextIteration: string[];
  summary: string;
}

export interface ExperimentLog {
  id: string;
  title: string;
  outcome: "ABANDONED" | "LEARNING" | "IN_PROGRESS";
  dateLabel: string;
  summary: string;
  lesson: string;
}

export interface ModuleDefinition {
  id: ModuleId;
  route: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  status: "ONLINE" | "SYNCING";
  focusAreas: string[];
  quickStats: Array<{ label: string; value: string }>;
}

const githubLink = socialMediaLinks.find((link) => link.name.toLowerCase() === "github")?.link ?? greeting.githubProfile;
const linkedInLink = socialMediaLinks.find((link) => link.name.toLowerCase() === "linkedin")?.link ?? "#";
const emailLink = socialMediaLinks.find((link) => link.name.toLowerCase() === "gmail")?.link ?? "mailto:sridatta.bandreddi@gmail.com";

export const moduleDefinitions: ModuleDefinition[] = [
  {
    id: "core-logic",
    route: "/modules/core-logic",
    label: "MODULE_01",
    title: "Core Logic",
    subtitle: "Systems / Infra / Production Engineering",
    description:
      "Production engineering work across backend systems, scaling, platform reliability, and delivery velocity. Framed as specifications, deployments, and operational outcomes.",
    status: "ONLINE",
    focusAreas: ["Backend Services", "Scalability", "Observability", "Security", "Delivery"],
    quickStats: [
      { label: "Teams Led", value: "6" },
      { label: "Cost Reduction", value: "70%" },
      { label: "Client Scale", value: "100+" },
    ],
  },
  {
    id: "neural-pathways",
    route: "/modules/neural-pathways",
    label: "MODULE_02",
    title: "Neural Pathways",
    subtitle: "ML / Research / Benchmarks",
    description:
      "Applied ML and research-oriented engineering including NLP, model evaluation, production validation services, and benchmark-driven system design.",
    status: "ONLINE",
    focusAreas: ["NLP", "Evaluation", "Model Deployment", "Benchmarks", "LLM Tooling"],
    quickStats: [
      { label: "Gesture Accuracy", value: "85-92%" },
      { label: "Watch Time Saved", value: "70%" },
      { label: "Data Sources", value: "3" },
    ],
  },
  {
    id: "biomedical-signal",
    route: "/modules/biomedical-signal",
    label: "MODULE_03",
    title: "Biomedical Signal",
    subtitle: "Healthcare Direction / Signal & Imaging Systems",
    description:
      "A focused track tying biomedical engineering training with AI systems work, signal processing interests, and healthcare-oriented product direction.",
    status: "SYNCING",
    focusAreas: ["EMG Signals", "Biomedical Engineering", "Healthcare AI", "Human Systems"],
    quickStats: [
      { label: "Program", value: "MS AIE + BME" },
      { label: "Target", value: "Healthcare Systems" },
      { label: "Signal Project", value: "EMG" },
    ],
  },
];

export const projectSpecs: ProjectSpec[] = [
  {
    slug: "phenom-postgres-scaling",
    title: "AI Filter Platform Scaling at Phenom",
    tagline: "Improved AI-driven query performance through sharding strategy and platform changes.",
    status: "DEPLOYED",
    domain: "infra",
    module: "core-logic",
    metrics: [
      { label: "Query Response Gain", value: "40%" },
      { label: "Client Footprint", value: "100+" },
      { label: "Delivery Window", value: "3 months" },
    ],
    stack: ["PostgreSQL", "Sharding", "Platform Engineering", "Performance Tuning"],
    artifactLinks: [
      { label: "Company", href: "https://phenom.com/" },
      { label: "LinkedIn", href: linkedInLink },
    ],
    notes: [
      "Performance work was tied to product-facing AI filters, so improvements needed to preserve query correctness while reducing latency.",
      "Architecture changes were coordinated with team mentorship and cross-team adoption requirements.",
    ],
    constraints: [
      "Multi-tenant system serving many customers.",
      "Need to improve latency without breaking feature semantics.",
      "Operational rollout must be safe across internal teams.",
    ],
    architecture: [
      "Benchmark existing query paths and high-cardinality filters.",
      "Introduce sharding strategy for horizontal scaling pressure points.",
      "Validate against representative workloads and production-like traffic patterns.",
      "Roll out via staged release with monitoring checks.",
    ],
    results: [
      "Improved user query response times by ~40% for AI-driven filters.",
      "Enabled a more scalable path for 100+ client deployments.",
      "Supported downstream product teams with reusable architecture decisions.",
    ],
    failureModes: [
      "Shard key decisions can degrade future query patterns if chosen too narrowly.",
      "Benchmark results can overfit synthetic loads and miss real traffic spikes.",
    ],
    nextIteration: [
      "Add recurring workload replay benchmarks from production traces.",
      "Expand database evaluation framework into continuous regression checks.",
    ],
    summary:
      "Production infra optimization project combining database performance tuning, benchmarking, and architectural rollout discipline.",
  },
  {
    slug: "byjus-cost-optimized-communication-platform",
    title: "BYJU'S CRM + Communication Platform Delivery",
    tagline: "Built and scaled backend/product capabilities with cost-optimized infrastructure decisions.",
    status: "DEPLOYED",
    domain: "product",
    module: "core-logic",
    metrics: [
      { label: "Cost Reduction", value: "70%" },
      { label: "Team Led", value: "3" },
      { label: "Rollout Speed", value: "2 months" },
    ],
    stack: ["Java", "Spring Boot", "AWS ECS", "React", "Auth/RBAC"],
    artifactLinks: [
      { label: "Company", href: "https://byjus.com/" },
      { label: "Resume", href: greeting.resumeLink },
    ],
    notes: [
      "Balanced product delivery speed with reliability and cost control.",
      "Combined backend delivery, infra scheduling, and auth platform work.",
    ],
    constraints: [
      "Needed to preserve service reliability during cost optimization.",
      "Internal CRM rollout timeline was aggressive.",
      "Multiple communication channels required coordination across product flows.",
    ],
    architecture: [
      "Backend CRM services delivered with Spring Boot templates.",
      "AWS ECS scaling tuned using scheduled patterns based on usage behavior.",
      "Authentication and authorization surface built with React-based app and reduced external dependency.",
    ],
    results: [
      "Infrastructure cost reduced by ~70% while maintaining reliability.",
      "CRM service shipped in about two months.",
      "Customer notification effectiveness improved through multi-channel features.",
    ],
    failureModes: [
      "Scheduled scaling can underperform during unexpected event-driven spikes.",
      "Auth migration work can create dependency coupling if interfaces are not stabilized early.",
    ],
    nextIteration: [
      "Introduce adaptive autoscaling fallback over static schedules.",
      "Formalize reusable authorization modules and policy test harnesses.",
    ],
    summary:
      "A product engineering spec focused on delivery speed, cost reduction, and internal platform ownership.",
  },
  {
    slug: "youtube-digest-async-summarization",
    title: "YouTube Digest",
    tagline: "Asynchronous video summarization pipeline for faster knowledge extraction.",
    status: "TESTING",
    domain: "research",
    module: "neural-pathways",
    metrics: [
      { label: "Watch Time Saved", value: "Up to 70%" },
      { label: "API Layer", value: "FastAPI" },
      { label: "Pipeline Mode", value: "Async" },
    ],
    stack: ["Python", "FastAPI", "Gemini API", "Async Processing"],
    artifactLinks: [
      { label: "GitHub", href: githubLink },
      { label: "Contact", href: "/contact" },
    ],
    notes: [
      "Primary value is time compression for long-form video content.",
      "Asynchronous orchestration matters more than UI polish for this spec.",
    ],
    constraints: [
      "External API latency and rate limits.",
      "Variable transcript quality across videos.",
      "Need concise summaries without losing factual structure.",
    ],
    architecture: [
      "Ingest URL and transcript/audio processing jobs asynchronously.",
      "Summarization requests routed through model API with chunking strategy.",
      "Aggregate chunk outputs into concise digest and return final summary.",
    ],
    results: [
      "Prototype reduced time spent consuming long videos by up to 70%.",
      "Pipeline architecture supports parallel processing improvements.",
    ],
    failureModes: [
      "Summaries can collapse nuance in technical lectures.",
      "Chunk boundaries can produce repeated or inconsistent points.",
    ],
    nextIteration: [
      "Add quality checks for factual consistency across chunks.",
      "Support per-video templates (lecture, interview, tutorial).",
    ],
    summary:
      "ML-assisted summarization pipeline emphasizing asynchronous processing and practical productivity outcomes.",
  },
  {
    slug: "emg-hand-gesture-recognition",
    title: "EMG Hand Gesture Recognition",
    tagline: "EMG signal classification with neural models for gesture recognition.",
    status: "RESEARCH",
    domain: "biomed",
    module: "biomedical-signal",
    metrics: [
      { label: "Accuracy", value: "85-92%" },
      { label: "Model Families", value: "LSTM/CNN" },
      { label: "Signal Type", value: "EMG" },
    ],
    stack: ["PyTorch", "Python", "LSTM", "CNN", "Attention"],
    artifactLinks: [
      { label: "GitHub", href: githubLink },
      { label: "Resume", href: greeting.resumeLink },
    ],
    notes: [
      "A bridge project between biomedical signal understanding and production-grade ML engineering goals.",
      "Attention mechanisms were used to improve sequence-level discrimination for gesture classes.",
    ],
    constraints: [
      "Noisy EMG signals and class overlap.",
      "Generalization across subjects/device conditions is hard.",
      "Model complexity needs to match deployment constraints.",
    ],
    architecture: [
      "Preprocess EMG windows and normalize signal channels.",
      "Train sequence and convolutional variants (LSTM/CNN) with attention comparisons.",
      "Evaluate per-class accuracy and confusion behavior to refine feature handling.",
    ],
    results: [
      "Achieved 85-92% classification accuracy range depending on model and setup.",
      "Established a repeatable experimentation workflow around EMG sequence modeling.",
    ],
    failureModes: [
      "Distribution shifts can reduce performance sharply across new users/devices.",
      "Attention layers can improve scores but obscure error sources without careful diagnostics.",
    ],
    nextIteration: [
      "Add subject-robust validation splits and calibration metrics.",
      "Explore lightweight deployment targets for real-time inference.",
    ],
    summary:
      "Biomedical signal ML project focused on EMG classification and architecture experimentation.",
  },
  {
    slug: "persona-classification-validation-services",
    title: "Persona Classification + Validation Services",
    tagline: "NLP pipelines and production validation services during ML internship work.",
    status: "DEPLOYED",
    domain: "research",
    module: "neural-pathways",
    metrics: [
      { label: "Data Sources", value: "3" },
      { label: "Prod Services", value: "1+" },
      { label: "DB Clients", value: "2" },
    ],
    stack: ["NLP", "Python", "APIs", "Databases", "Validation Services"],
    artifactLinks: [
      { label: "Phenom", href: "https://www.phenom.com/" },
      { label: "LinkedIn", href: linkedInLink },
    ],
    notes: [
      "Work emphasized integration and productionization, not only model training.",
      "Validation and migration tooling improved downstream engineering velocity.",
    ],
    constraints: [
      "Data quality variance across three sources.",
      "Production integration had API and database coupling constraints.",
      "Internship scope required pragmatic iteration and reuse.",
    ],
    architecture: [
      "Process data sources with NLP pipeline for persona classification signals.",
      "Deploy validation service at production scale to support product workflows.",
      "Build reusable database package clients for migration/testing tasks.",
    ],
    results: [
      "Improved recommendation accuracy via persona classification models.",
      "Delivered a production-scale validation service integrated into core systems.",
      "Created reusable DB clients that improved migration/test efficiency.",
    ],
    failureModes: [
      "Recommendation gains can erode if data source assumptions drift.",
      "Validation services become bottlenecks if observability is thin.",
    ],
    nextIteration: [
      "Add standardized evaluation dashboards and drift alerts.",
      "Version feature extraction and label quality checks.",
    ],
    summary:
      "A research-engineering spec combining NLP modeling, production integration, and tooling for reliability.",
  },
];

export const experimentLogs: ExperimentLog[] = [
  {
    id: "exp-shard-bench-overfit",
    title: "Synthetic Benchmark Overfit During Database Evaluation",
    outcome: "LEARNING",
    dateLabel: "Ops Retrospective",
    summary:
      "Initial benchmark matrix looked strong, but real-world query mixes exposed a mismatch between synthetic load assumptions and customer usage patterns.",
    lesson: "Benchmark harnesses need production-like traces, not only clean synthetic workloads.",
  },
  {
    id: "exp-summary-chunk-drift",
    title: "Long-Video Summary Drift Across Chunk Boundaries",
    outcome: "IN_PROGRESS",
    dateLabel: "Product Experiment",
    summary:
      "Chunked summarization produced occasional repetition and loss of context in technical videos with dense prerequisites.",
    lesson: "Chunk strategy must carry local context and add consistency checks before final merge.",
  },
  {
    id: "exp-emg-generalization-gap",
    title: "EMG Model Generalization Gap Across Users",
    outcome: "LEARNING",
    dateLabel: "Research Note",
    summary:
      "Models reached strong accuracy in controlled runs but degraded on wider signal variation across subjects and conditions.",
    lesson: "Validation split strategy is as important as architecture selection for signal tasks.",
  },
  {
    id: "exp-ui-terminal-overload",
    title: "Terminal UI Prototype Added Noise Instead of Signal",
    outcome: "ABANDONED",
    dateLabel: "UI Iteration",
    summary:
      "A chatty terminal-first navigation concept obscured recruiter conversion actions and made project scanning slower.",
    lesson: "Terminal motifs should support navigation and storytelling, not replace information architecture.",
  },
];

export const dashboardDiagnostics = {
  version: "v2.6.0",
  status: "ONLINE",
  role: greeting.subTitle,
  operator: greeting.title,
  location: "Pittsburgh, PA, USA",
  stackSummary: skills.data
    .flatMap((section) => section.softwareSkills.map((s) => s.skillName))
    .filter((value, index, array) => array.indexOf(value) === index)
    .slice(0, 10),
  quickMetrics: [
    { label: "Active Modules", value: `${moduleDefinitions.length}` },
    { label: "Specs Indexed", value: `${projectSpecs.length}` },
    { label: "Experiment Logs", value: `${experimentLogs.length}` },
    { label: "Current Track", value: "Healthcare + AI" },
  ],
};

export const bootLogLines = [
  "Initializing DattaOS runtime...",
  "Loading modules: CoreLogic, NeuralPathways, BiomedicalSignal",
  "Mounting project specs and artifact indices",
  "Syncing research logs and diagnostics streams",
  "Binding conversion routes: resume, contact, specs",
  "System status: ONLINE",
];

export const dataStreams = [
  `PROFILE // ${greeting.title}`,
  `ROLE // ${greeting.subTitle}`,
  `LATEST_WORK // ${experience.sections[0]?.experiences[0]?.title ?? "Product Development Engineer"}`,
  `FOCUS // Scalable AI systems + full-stack applications`,
  `CONTACT // ${contactPageData.contactSection.title}`,
  `REPO // ${greeting.portfolio_repository}`,
];

export const globalActions = [
  { label: "Initialize: Core Logic", href: "/modules/core-logic" },
  { label: "View Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const commandTerminalHints = [
  "help",
  "open core-logic",
  "open neural-pathways",
  "open biomedical-signal",
  "open experiments",
  "open resume",
  "open contact",
  "open spec emg-hand-gesture-recognition",
];

export function getModuleById(id: ModuleId) {
  return moduleDefinitions.find((module) => module.id === id);
}

export function getSpecsByModule(id: ModuleId) {
  return projectSpecs.filter((spec) => spec.module === id);
}

export function getSpecBySlug(slug: string) {
  return projectSpecs.find((spec) => spec.slug === slug);
}

export const modulePageNarratives: Record<ModuleId, { heading: string; summary: string }> = {
  "core-logic": {
    heading: "Production systems, reliability decisions, and shipping discipline.",
    summary:
      "This module highlights backend systems, scaling work, infra choices, and the operational tradeoffs behind production delivery. It is structured as readable specs with constraints, results, and failure modes.",
  },
  "neural-pathways": {
    heading: "Research engineering with benchmarks, model pipelines, and practical outcomes.",
    summary:
      "This module focuses on ML systems work where experimentation is tied to deployment, evaluation, and usefulness. The emphasis is on what was measured, what failed, and what changed next.",
  },
  "biomedical-signal": {
    heading: "Biomedical engineering direction translated into AI systems practice.",
    summary:
      "This module connects signal-oriented research interests, healthcare system motivation, and engineering execution. It tracks current work, experiments, and future project trajectories.",
  },
};

export const contactLinks = [
  { label: "Email", href: emailLink },
  { label: "GitHub", href: githubLink },
  { label: "LinkedIn", href: linkedInLink },
  { label: "Resume", href: greeting.resumeLink },
];
