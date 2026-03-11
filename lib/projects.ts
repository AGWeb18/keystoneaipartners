export type Project = {
  title: string;
  description: string;
  link: string;
  skills: string[];
  focusAreas: string[];
  image?: string;
  backgroundColor?: string;
  impact?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Manufacturing Company ETL Project",
    description:
      "Designed and implemented robust ETL pipelines to consolidate disparate data sources for a manufacturing company, enabling unified reporting and executive dashboards.",
    image: "/assets/img/big-data-7216774.svg",
    link: "/projects/manufacturing-etl",
    skills: ["ETL", "SQL", "Power BI"],
    focusAreas: ["Data Engineering", "Analytics Acceleration"],
    impact:
      "Centralized 6+ production and finance systems into analytics-ready models for leadership visibility.",
    featured: true,
  },
  {
    title: "GoA Snowflake Marketplace Integration",
    description:
      "Led the development of a Snowflake Marketplace integration for the Government of Alberta, enabling internal data sharing with detailed metering and chargeback analytics.",
    image: "/assets/img/snowflake.svg",
    link: "/projects/goa-snowflake",
    skills: ["Snowflake", "SQL", "APIs"],
    focusAreas: ["Cloud Modernization", "Data Sharing"],
    impact:
      "Delivered governed data products with consumption-based billing insights for business units.",
    featured: true,
  },
  {
    title: "Onboarding & Offboarding Power App",
    description:
      "Developed an automated solution using Power Apps and Power Automate to streamline employee onboarding and offboarding processes with approval workflows.",
    image: "/assets/img/onboardoffboard.png",
    link: "/projects/power-app-onboarding",
    skills: ["Power Apps", "Power Automate"],
    focusAreas: ["Automation", "Process Optimization"],
    impact:
      "Digitized approvals, reducing manual HR coordination and ensuring policy adherence.",
    featured: true,
  },
  {
    title: "Databricks PII Hashing Tool",
    description:
      "Built a Databricks-based ETL tool to apply hash functions to PII fields, enabling secure data analysis and compliance.",
    image: "/assets/img/PII-hash.svg",
    link: "/projects/databricks-pii-hashing",
    skills: ["Databricks", "Python", "ETL"],
    focusAreas: ["Data Engineering", "Privacy Automation"],
    impact:
      "Automated tokenization pipelines so analysts could work with sensitive datasets safely.",
  },
  {
    title: "Microsoft Purview Data Governance",
    description:
      "Implemented Microsoft Purview for data source registration, scanning, and classification to provide a bird's eye view of data estates.",
    image: "/assets/img/Purview.svg",
    link: "/projects/microsoft-purview",
    skills: ["Microsoft Purview", "Data Governance"],
    focusAreas: ["Data Governance", "Compliance"],
    impact:
      "Established cataloging and lineage to support audit readiness and stewardship programs.",
  },
  {
    title: "Job Costing & Forecasting Tool",
    description:
      "Developed a sophisticated job costing and forecasting tool using Power BI and Power Apps for a construction company building a wastewater treatment plant.",
    image: "/assets/img/PowerApps_scalable.svg",
    link: "/projects/job-costing-tool",
    skills: ["Power BI", "Power Apps"],
    focusAreas: ["Analytics", "Operational Intelligence"],
    impact:
      "Provided real-time project profitability and cashflow insight to field leaders.",
  },
  {
    title: "GradeSageAI: AI Grading Assistant",
    description:
      "Developed an AI-powered grading assistant that provides personalized, constructive feedback for students and speeds up the marking of written assignments.",
    image: "/project-gradesage-ai.svg",
    link: "/projects/gradesage-ai",
    skills: ["AI/ML", "Next.js", "Python"],
    focusAreas: ["AI & ML", "Generative AI"],
    impact:
      "Cut teacher review cycles by pairing rubric-aligned LLM feedback with citation tracking.",
    featured: true,
  },
  {
    title: "ZapTasks: Home Services Marketplace",
    description:
      "A marketplace connecting homeowners with skilled handymen for various home services.",
    backgroundColor: "#4A90E2",
    link: "/projects/zaptasks",
    skills: ["Next.js", "React", "Node.js", "MongoDB"],
    focusAreas: ["Product Engineering", "Marketplace"],
    impact:
      "Launched a two-sided marketplace with scheduling, messaging, and service management.",
  },
  {
    title: "Legacy For My Little One",
    description:
      "A place where you can create and store memories for your children to see when they grow up.",
    backgroundColor: "#7ED321",
    link: "/projects/legacy-for-my-little-one",
    skills: ["React", "Firebase"],
    focusAreas: ["Product Engineering", "Customer Experience"],
    impact:
      "Built a private memory vault with multimedia capture and family sharing controls.",
  },
  {
    title: "Coinbase Advanced Trader",
    description:
      "A Python-based trading bot that uses technical analysis to automate trades on Coinbase.",
    image: "/assets/img/Coinbase.svg",
    link: "/projects/coinbase-trader",
    skills: ["Python", "APIs", "Algorithmic Trading"],
    focusAreas: ["Automation", "Algorithmic Trading"],
    impact:
      "Automated trade execution with risk controls driven by technical indicator strategies.",
  },
  {
    title: "Simple Path Movers",
    description:
      "A container moving service where users move from Ontario to Alberta or vice versa.",
    backgroundColor: "#5DADE2",
    link: "/projects/simple-path-movers",
    skills: ["Next.js", "React", "HTML", "CSS"],
    focusAreas: ["Product Engineering", "Logistics"],
    impact:
      "Delivered responsive booking flows tailored to long-distance relocation journeys.",
  },
  {
    title: "KMG Cares",
    description:
      "A simple slide-like form that allowed users to enter mortgage information to help brokers make informed decisions.",
    backgroundColor: "#8E44AD",
    link: "/projects/kmg-cares",
    skills: ["React", "Next.js", "JavaScript"],
    focusAreas: ["Product Engineering", "Financial Services"],
    impact:
      "Guided borrowers through complex mortgage intake with automated validation.",
  },
];
