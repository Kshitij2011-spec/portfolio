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
    { value: "18", label: "Public Repos" },
    { value: "4", label: "Featured Projects" },
  ],
};

export const ABOUT_INFO = {
  tag: "// ABOUT",
  heading: "I Build Things That Ship",
  paragraphs: [
    "I am an Information Technology undergraduate at KC College of Engineering and Management Studies and Research, Thane (Mumbai University) with a 9.1 CGPA. I focus on building practical AI/ML systems and full-stack web applications that solve real-world problems.",
    "My experience centers on turning requirements into working products—ranging from a deterministic operational digital twin for Antarctic research stations to leakage-aware predictive maintenance pipelines and task-oriented GenAI agents. I work across Python, React, Vite, FastAPI, Spring Boot, PostgreSQL, scikit-learn, and Supabase, taking systems from requirement through architecture to automated testing and deployment.",
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
    subtitle: "Deterministic operational digital twin for Maitri and Bharati research stations.",
    description: "Built a deterministic operational digital twin for Maitri and Bharati research stations, connecting station state, impact analysis, resilience scenarios, and operator actions in one workflow.",
    extendedDescription: "Features a 39-endpoint FastAPI backend, React/Vite frontend, deterministic BFS cascading failure simulator, fuel autonomy modeling, air-gapped store-and-forward sync, and 90 passing backend tests. Fully deployed using Render + Vercel.",
    technologies: ["React", "Vite", "FastAPI", "PostgreSQL", "REST APIs", "Render", "Vercel"],
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
      "Resilience engine with prioritized telemetry sync queues and SHA-256 verification",
      "90 passing backend tests verified with automated pytest suites"
    ]
  },
  {
    id: "machineguard",
    title: "MachineGuard AI — Predictive Maintenance",
    category: "AI/ML Application",
    tag: "✦ AI/ML Application",
    tagBg: "var(--pastel-green)",
    tagColor: "rgb(20, 83, 45)",
    accentColor: "var(--pastel-green)",
    subtitle: "Industrial machine failure prediction with leakage-aware feature engineering.",
    description: "Trained a Random Forest classifier on the AI4I 2020 benchmark dataset containing 10,000 records, using leakage-aware feature selection and engineered process features for machine-failure prediction.",
    extendedDescription: "Evaluated strictly on held-out test data without target leakage or dataset contamination. Verified held-out test metrics: 98.8% Accuracy, 0.988 ROC-AUC, and 0.891 PR-AUC. The model was integrated into a deployed React + FastAPI application with constituent decision tree inspection.",
    technologies: ["Python", "scikit-learn", "React", "FastAPI", "Random Forest", "Pandas", "NumPy"],
    githubUrl: "https://github.com/Kshitij2011-spec/AIML-PROJECT-EXP10",
    images: [
      "/images/machineguard/tree.png"
    ],
    metrics: [
      { label: "Held-out Test Acc", value: "98.8%" },
      { label: "ROC-AUC", value: "0.988" },
      { label: "PR-AUC", value: "0.891" }
    ],
    highlights: [
      "Strict target leakage prevention isolating row identifiers and failure symptom columns",
      "Thermodynamic & mechanical interaction features (power dissipation, torque ratios)",
      "Validation-guided decision threshold tuning for minority-class F1 optimization"
    ]
  },
  {
    id: "smart-automation",
    title: "Smart Automation Hub — GenAI Agent",
    category: "Generative AI",
    tag: "✦ Generative AI",
    tagBg: "var(--pastel-blue)",
    tagColor: "rgb(30, 58, 138)",
    accentColor: "var(--pastel-blue)",
    subtitle: "Task-oriented GenAI agent with dynamic tool selection & local execution loop.",
    description: "Built a task-oriented GenAI agent that interprets natural-language requests, selects the appropriate tool/API, executes actions, and returns structured results beyond a conventional chatbot.",
    extendedDescription: "Implemented using the Gemini API with explicit function declarations. The agent loop handles user intent parsing, tool selection, local python runtime execution (email parsing, task queueing, sales CSV analytics, report generation), and structured result synthesis.",
    technologies: ["Python", "Gemini API", "AI Agents", "REST APIs"],
    images: [],
    highlights: [
      "Natural language request parsing and intent classification",
      "Dynamic tool selection loop via explicit function declarations",
      "Executes actions locally: email summary, task scheduling, CSV analysis, markdown report generation"
    ]
  },
  {
    id: "aarogya",
    title: "Aarogya — AI Symptom Checker Backend",
    category: "Backend Application",
    tag: "⚙ Backend Application",
    tagBg: "var(--pastel-peach)",
    tagColor: "rgb(154, 52, 18)",
    accentColor: "var(--pastel-peach)",
    subtitle: "Modular REST backend for symptom-based triage workflows.",
    description: "Designed a modular REST backend with controller, service, and analysis layers to support symptom-based workflows and integration with a React frontend.",
    extendedDescription: "Architected using Java and Spring Boot with clean separation of concerns: controller layer for validation and request routing, service layer for business workflows, and analysis layer for symptom evaluation without making unwarranted clinical diagnostic claims.",
    technologies: ["Java", "Spring Boot", "REST APIs"],
    images: [],
    highlights: [
      "Layered Controller-Service-Analysis backend architecture with strict input validation",
      "Decoupled analysis engine allowing frontend consumption via standardized REST contracts",
      "Modular design to support symptom-based workflows and safe client integration"
    ]
  }
];

export const PINNED_REPOS: PinnedRepo[] = [
  {
    name: "polarops",
    description: "Antarctic operational digital twin and decision-support platform for Maitri and Bharati research stations. 39-endpoint FastAPI backend + React/Vite.",
    language: "TypeScript",
    langColor: "#3178c6",
    url: "https://github.com/Kshitij2011-spec/polarops"
  },
  {
    name: "AIML-PROJECT-EXP10",
    description: "MachineGuard AI: Predictive maintenance system using Random Forest on AI4I 2020 benchmark with leakage-aware feature engineering. 98.8% test accuracy.",
    language: "Python",
    langColor: "#3572A5",
    url: "https://github.com/Kshitij2011-spec/AIML-PROJECT-EXP10"
  },
  {
    name: "daily-dsa-python",
    description: "Algorithmic problem solving and core data structures implementation in Python, covering trees, graphs, dynamic programming, and search algorithms.",
    language: "Python",
    langColor: "#3572A5",
    url: "https://github.com/Kshitij2011-spec/daily-dsa-python"
  },
  {
    name: "HexaCoder-SIH26062",
    description: "Engineering solutions and rapid prototype codebase for Smart India Hackathon solving real-time situational tracking and workflow automation.",
    language: "TypeScript",
    langColor: "#3178c6",
    url: "https://github.com/Kshitij2011-spec/HexaCoder-SIH26062"
  },
  {
    name: "krishi-sahayak",
    description: "AI-powered crop advisory MVP for SIH25010: Crop recommendation (ML), pest detection, fertilizer guidance, and mandi prices.",
    language: "Python",
    langColor: "#3572A5",
    url: "https://github.com/Kshitij2011-spec/krishi-sahayak"
  },
  {
    name: "Secure-Python-Password-Manager",
    description: "Cryptographic credential management utility in Python implementing encrypted key-value persistence and master-key validation.",
    language: "Python",
    langColor: "#3572A5",
    url: "https://github.com/Kshitij2011-spec/Secure-Python-Password-Manager"
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
      "Gained practical exposure to the end-to-end cycle of developing and integrating ML models into AI-enabled applications."
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "rotaract",
    title: "Director, PR & Marketing",
    roleOrContext: "Rotaract Club of KC College of Engineering and Management Studies and Research",
    description: "Lead promotion and outreach for inter-college initiatives including Kick Off Champs 3.0, supporting execution across 16+ teams with an estimated reach of approximately 2,000+.",
    icon: "trophy",
    accentColor: "var(--pastel-yellow)"
  },
  {
    id: "marketing-mission",
    title: "Winner — Marketing with a Mission Roleplay Event",
    roleOrContext: "Inter-College Roleplay Event",
    description: "Recognized for strategic communication, structured problem-solving, and roleplay presentation on mission-driven product initiatives.",
    icon: "award",
    accentColor: "var(--pastel-green)"
  },
  {
    id: "uidai-hackathon",
    title: "Participant — UIDAI Data Hackathon 2026",
    roleOrContext: "Hackathon Participation",
    description: "Collaborated on data pipeline and analytics workflows under competitive hackathon timelines, handling structured datasets.",
    icon: "zap",
    accentColor: "var(--pastel-blue)"
  },
  {
    id: "dsa-coursework",
    title: "Specialized DSA & Python Coursework",
    roleOrContext: "Academic Distinction & Certification",
    description: "Completed specialized coursework in Data Structures and Algorithms with Python; maintained a 9.1 CGPA across Information Technology engineering curriculum.",
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
      { name: "TypeScript / JavaScript", pastelColor: "var(--pastel-yellow)" },
      { name: "SQL", pastelColor: "var(--pastel-purple)" },
      { name: "C++", pastelColor: "var(--pastel-peach)" }
    ]
  },
  {
    title: "AI / ML",
    skills: [
      { name: "scikit-learn", pastelColor: "var(--pastel-yellow)" },
      { name: "Pandas", pastelColor: "var(--pastel-blue)" },
      { name: "NumPy", pastelColor: "var(--pastel-green)" },
      { name: "Random Forest", pastelColor: "var(--pastel-purple)" },
      { name: "Feature Engineering", pastelColor: "var(--pastel-peach)" },
      { name: "Model Evaluation", pastelColor: "var(--pastel-pink)" }
    ]
  },
  {
    title: "Web / Backend",
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
    title: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", pastelColor: "var(--pastel-blue)" },
      { name: "Supabase", pastelColor: "var(--pastel-green)" },
      { name: "Git", pastelColor: "var(--pastel-peach)" },
      { name: "GitHub", pastelColor: "var(--pastel-purple)" },
      { name: "Postman", pastelColor: "var(--pastel-yellow)" },
      { name: "Docker", pastelColor: "var(--pastel-blue)" },
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
