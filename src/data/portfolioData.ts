import { Project, ExperienceItem, AchievementItem, SkillCategory, PinnedRepo } from '../types';

export const PERSONAL_INFO = {
  name: "Kshitij Parkhe",
  firstName: "KSHITIJ",
  lastName: "PARKHE",
  headline: "AI/ML • Full-Stack Development",
  statement: "Building practical AI/ML systems and full-stack products that turn real-world requirements into working software.",
  location: "Mumbai, India",
  email: "kshitijparkhe2011@gmail.com",
  phone: "+91 8779686090",
  github: "https://github.com/Kshitij2011-spec",
  stats: [
    { value: "9.1", label: "CGPA" },
    { value: "39", label: "FastAPI Endpoints" },
    { value: "98.8%", label: "Test Accuracy" },
    { value: "2,000+", label: "Reach" },
  ],
};

export const ABOUT_INFO = {
  tag: "// ABOUT",
  heading: "I Build Things That Ship",
  paragraphs: [
    "I am an Information Technology undergraduate at KC College of Engineering and Management Studies and Research, Thane (Mumbai University) with a 9.1 CGPA. I focus on building practical, deterministic AI/ML workflows and full-stack web applications that solve real-world problems.",
    "My experience centers on turning complex requirements into working products—ranging from deterministic operational digital twins for Antarctic research stations to leakage-aware predictive maintenance pipelines and task-oriented GenAI agents. I work across Python, React, Vite, FastAPI, Spring Boot, PostgreSQL, scikit-learn, and Supabase, emphasizing clean REST API design, deterministic logic, and solid test coverage.",
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "polarops",
    title: "PolarOps — Antarctic Digital Twin",
    category: "SIH / Decision-Support Platform",
    tag: "🏆 Flagship",
    tagBg: "var(--pastel-purple)",
    tagColor: "rgb(76, 29, 149)",
    accentColor: "var(--pastel-purple)",
    subtitle: "Antarctic operational digital twin and decision-support platform.",
    description: "Built a deterministic operational digital twin for Maitri and Bharati research stations, connecting station state, impact analysis, resilience scenarios, and operator actions in one workflow.",
    extendedDescription: "Features a 39-endpoint FastAPI backend, React/Vite frontend, deterministic BFS cascading failure simulator, fuel autonomy modeling, air-gapped store-and-forward sync, and 90 passing backend tests. Fully deployed with Render + Vercel.",
    technologies: ["React", "Vite", "FastAPI", "PostgreSQL", "REST APIs", "Render", "Vercel", "Docker"],
    githubUrl: "https://github.com/Kshitij2011-spec/polarops",
    liveUrl: "https://polarops-two.vercel.app",
    docsUrl: "https://polarops-api.onrender.com/docs",
    images: [
      "/images/polarops/command_center.png",
      "/images/polarops/resilience.png",
      "/images/polarops/asset_intelligence.png",
      "/images/polarops/scenarios.png"
    ],
    highlights: [
      "39-endpoint modular FastAPI backend with deterministic BFS blast-radius calculation",
      "Cryptographic SHA-256 integrity verification for air-gapped queue reconciliation",
      "90 passing backend tests with comprehensive CI/CD verification"
    ]
  },
  {
    id: "machineguard",
    title: "MachineGuard AI — Predictive Maintenance",
    category: "AI/ML Application",
    tag: "✦ AI Powered",
    tagBg: "var(--pastel-green)",
    tagColor: "rgb(20, 83, 45)",
    accentColor: "var(--pastel-green)",
    subtitle: "Industrial equipment failure prediction with leakage-aware feature engineering.",
    description: "Trained a Random Forest classifier on the AI4I 2020 benchmark dataset containing 10,000 records, using leakage-aware feature selection and engineered process features for machine-failure prediction.",
    extendedDescription: "Evaluated strictly on held-out test data without data leakage or contamination. Verified test metrics: 98.8% Accuracy, 0.988 ROC-AUC, and 0.891 PR-AUC. The model was integrated into a deployed React + FastAPI application with constituent decision tree inspection.",
    technologies: ["Python", "scikit-learn", "React", "FastAPI", "Random Forest", "Pandas", "NumPy"],
    githubUrl: "https://github.com/Kshitij2011-spec/AIML-PROJECT-EXP10",
    images: [
      "/images/machineguard/tree.png"
    ],
    metrics: [
      { label: "Test Accuracy", value: "98.8%" },
      { label: "ROC-AUC", value: "0.988" },
      { label: "PR-AUC", value: "0.891" }
    ],
    highlights: [
      "Target leakage prevention through strict architectural isolation of serial and symptom identifiers",
      "Thermodynamic & mechanical interaction features (heat dissipation, rotational power, tool wear rate)",
      "Validation-guided decision threshold tuning for minority-class F1 optimization"
    ]
  },
  {
    id: "smart-automation",
    title: "Smart Automation Hub — GenAI Agent",
    category: "Generative AI",
    tag: "✦ Autonomous Agent",
    tagBg: "var(--pastel-blue)",
    tagColor: "rgb(30, 58, 138)",
    accentColor: "var(--pastel-blue)",
    subtitle: "Task-oriented GenAI agent with dynamic tool selection & local execution loop.",
    description: "Built a task-oriented GenAI agent that interprets natural-language requests, selects the appropriate tool/API, executes actions, and returns structured results beyond a conventional chatbot.",
    extendedDescription: "Implemented using the Gemini Interactions API with explicit function declarations. The agent loop handles user intent parsing, tool selection, local python runtime execution (email parsing, task queueing, sales CSV analytics, report generation), and structured result synthesis.",
    technologies: ["Python", "Gemini API", "AI Agents", "Function Calling", "REST APIs"],
    githubUrl: "https://github.com/Kshitij2011-spec",
    images: [],
    highlights: [
      "Dynamic tool selection loop via explicit function declarations",
      "Executes local python tasks: email summary, task scheduling, CSV analysis, markdown reporting",
      "Structured output responses beyond traditional conversational chat"
    ]
  },
  {
    id: "aarogya",
    title: "Aarogya — AI Symptom Checker Backend",
    category: "Backend Application",
    tag: "⚙ Backend Architecture",
    tagBg: "var(--pastel-peach)",
    tagColor: "rgb(154, 52, 18)",
    accentColor: "var(--pastel-peach)",
    subtitle: "Modular REST backend for symptom-based triage workflows.",
    description: "Designed a modular REST backend with controller, service, and analysis layers to support symptom-based workflows and integration with a React frontend.",
    extendedDescription: "Architected using Java and Spring Boot with clean separation of concerns: controller layer for validation & DTO handling, service layer for business rules, and analysis layer for symptom evaluation without making unwarranted clinical claims.",
    technologies: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "MVC Architecture"],
    githubUrl: "https://github.com/Kshitij2011-spec",
    images: [],
    highlights: [
      "Layered Controller-Service-Repository architecture with strict request validation",
      "Decoupled analysis engine allowing frontend consumption via standardized REST contracts",
      "Robust error handling and schema contracts for safe client integration"
    ]
  }
];

export const PINNED_REPOS: PinnedRepo[] = [
  {
    name: "polarops",
    description: "Antarctic operational digital twin and decision-support platform for Maitri and Bharati research stations. 39-endpoint FastAPI backend + React/Vite.",
    language: "TypeScript",
    langColor: "#3178c6",
    url: "https://github.com/Kshitij2011-spec/polarops",
    stars: 2,
    forks: 1
  },
  {
    name: "AIML-PROJECT-EXP10",
    description: "MachineGuard AI: Predictive maintenance system using Random Forest on AI4I 2020 benchmark with leakage-aware feature engineering. 98.8% test accuracy.",
    language: "Python",
    langColor: "#3572A5",
    url: "https://github.com/Kshitij2011-spec/AIML-PROJECT-EXP10",
    stars: 1,
    forks: 0
  },
  {
    name: "daily-dsa-python",
    description: "Algorithmic problem solving and core data structures implementation in Python, covering trees, graphs, dynamic programming, and search algorithms.",
    language: "Python",
    langColor: "#3572A5",
    url: "https://github.com/Kshitij2011-spec/daily-dsa-python",
    stars: 1,
    forks: 0
  },
  {
    name: "HexaCoder-SIH26062",
    description: "Engineering solutions and rapid prototype codebase for Smart India Hackathon solving real-time situational tracking and workflow automation.",
    language: "TypeScript",
    langColor: "#3178c6",
    url: "https://github.com/Kshitij2011-spec/HexaCoder-SIH26062",
    stars: 1,
    forks: 0
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "google-aicte",
    company: "AICTE – Google AI-ML Virtual Internship (Cohort 14)",
    role: "ML Research Intern",
    period: "Jan 2025 – Present",
    location: "Virtual",
    bullets: [
      "Applied structured data preprocessing, machine-learning workflows, and model evaluation to real-world datasets under the Google Developers initiative.",
      "Gained practical exposure to the end-to-end cycle of developing and integrating ML models into AI-enabled applications.",
      "Engineered feature transformations, calibrated probability thresholds, and evaluated generalization variance across diverse data regimes."
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "rotaract",
    title: "Director, PR & Marketing",
    roleOrContext: "Rotaract Club of KC College of Engineering and Management Studies and Research",
    description: "Lead promotion and outreach for inter-college initiatives including Kick Off Champs 3.0, supporting execution across 16+ teams with an estimated reach of 2,000+.",
    icon: "trophy",
    accentColor: "var(--pastel-yellow)"
  },
  {
    id: "marketing-mission",
    title: "Winner — Marketing with a Mission Roleplay Event",
    roleOrContext: "Inter-College Competition",
    description: "Awarded 1st place in strategic communication and mission-driven product roleplay, presenting technical solutions to real-world operational challenges.",
    icon: "award",
    accentColor: "var(--pastel-green)"
  },
  {
    id: "uidai-hackathon",
    title: "Participant — UIDAI Data Hackathon 2026",
    roleOrContext: "National Data Hackathon",
    description: "Engineered scalable data processing and analysis workflows under competitive hackathon timelines, handling high-volume structured datasets.",
    icon: "zap",
    accentColor: "var(--pastel-blue)"
  },
  {
    id: "dsa-coursework",
    title: "Data Structures & Algorithms Mastery",
    roleOrContext: "Specialized Coursework & Academic Distinction",
    description: "Completed comprehensive coursework in Data Structures and Algorithms with Python; maintained a 9.1 CGPA across Information Technology engineering curriculum.",
    icon: "academic",
    accentColor: "var(--pastel-purple)"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", pastelColor: "var(--pastel-blue)" },
      { name: "Java", pastelColor: "var(--pastel-pink)" },
      { name: "TypeScript", pastelColor: "var(--pastel-yellow)" },
      { name: "JavaScript", pastelColor: "var(--pastel-green)" },
      { name: "SQL", pastelColor: "var(--pastel-purple)" },
      { name: "C++", pastelColor: "var(--pastel-peach)" }
    ]
  },
  {
    title: "AI / ML & Data",
    skills: [
      { name: "scikit-learn", pastelColor: "var(--pastel-yellow)" },
      { name: "Pandas", pastelColor: "var(--pastel-blue)" },
      { name: "NumPy", pastelColor: "var(--pastel-green)" },
      { name: "Random Forest", pastelColor: "var(--pastel-purple)" },
      { name: "Feature Engineering", pastelColor: "var(--pastel-peach)" },
      { name: "Model Evaluation", pastelColor: "var(--pastel-pink)" },
      { name: "Gemini API", pastelColor: "var(--pastel-blue)" }
    ]
  },
  {
    title: "Web & Backend",
    skills: [
      { name: "React", pastelColor: "var(--pastel-blue)" },
      { name: "Vite", pastelColor: "var(--pastel-purple)" },
      { name: "FastAPI", pastelColor: "var(--pastel-green)" },
      { name: "Spring Boot", pastelColor: "var(--pastel-pink)" },
      { name: "REST APIs", pastelColor: "var(--pastel-yellow)" },
      { name: "Tailwind CSS", pastelColor: "var(--pastel-blue)" }
    ]
  },
  {
    title: "Databases & Cloud Tools",
    skills: [
      { name: "PostgreSQL", pastelColor: "var(--pastel-blue)" },
      { name: "Supabase", pastelColor: "var(--pastel-green)" },
      { name: "Git", pastelColor: "var(--pastel-peach)" },
      { name: "GitHub", pastelColor: "var(--pastel-purple)" },
      { name: "Docker", pastelColor: "var(--pastel-blue)" },
      { name: "Postman", pastelColor: "var(--pastel-yellow)" },
      { name: "Playwright", pastelColor: "var(--pastel-green)" },
      { name: "Vercel", pastelColor: "var(--pastel-pink)" },
      { name: "Render", pastelColor: "var(--pastel-purple)" }
    ]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Engineering in Information Technology",
  institution: "KC College of Engineering and Management Studies and Research, Thane",
  university: "Mumbai University",
  period: "2024 – Present",
  cgpa: "9.1",
  semester: "Semester 5"
};
