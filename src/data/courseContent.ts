export type CourseSection = {
  heading: string;
  items?: string[];
  body?: string;
};

export type CourseTable = {
  caption?: string;
  columns: string[];
  rows: Array<string[]>; // each row must match columns length
};

export type CourseContent = {
  title: string;
  summary: string;
  highlights?: string[];
  sections?: CourseSection[];
  table?: CourseTable; // backward compat
  tables?: CourseTable[];
};

// Minimal replicated content based on public Training page structure.
// Fill out more details iteratively as needed.
export const COURSES: Record<string, CourseContent> = {
  // Technical
  "sw-hw-fundamentals": {
    title: "S/W & H/W Fundamental Courses",
    summary: "Integration Minds course offerings across Java, .NET, JavaScript, C/C++ and Kotlin.",
    tables: [
      {
        caption: "Integration Minds Course offerings in Java",
        columns: ["#No", "Course Name", "Duration", "Batch Size", "Mode of training"],
        rows: [
          ["IMJ1", "Fast Track to Java", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMJ2", "Fast Track to Java 8", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMJ3", "Introduction to Java", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMJ4", "Advanced Java", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMJ5", "Pattern-Based Software Development in Java", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMJ6", "Spring Boot with Java", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMJ7", "High Performance Java Persistence", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMJ8", ".NET to Java Conversion", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
        ],
      },
      {
        caption: "Integration Minds Course offerings in Dot Net",
        columns: ["#No", "Course Name", "Duration", "Batch Size", "Mode of training"],
        rows: [
          ["IMD1", "Fast Track to .NET (C#)", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMD2", "Introduction to .NET Core for Web Services", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMD3", "Design Patterns in .NET", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMD4", "Introduction to ASP .NET MVC", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMD5", ".NET to Java Conversion", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMD6", "Java to .NET (C#) Conversion", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
        ],
      },
      {
        caption: "Integration Minds Course offerings in Javascript",
        columns: ["#No", "Course Name", "Duration", "Batch Size", "Mode of training"],
        rows: [
          ["IMJS1", "Introduction to JavaScript", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMJS2", "Introduction to React", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMJS3", "Introduction to TypeScript", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMJS4", "Accelerated TypeScript", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMJS5", "Design Patterns in JavaScript", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMJS6", "Introduction to Angular", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMJS7", "React with TypeScript", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMJS8", "TypeScript for AWS Serverless", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
        ],
      },
      {
        caption: "Integration Minds Course offerings in C & C++",
        columns: ["#No", "Course Name", "Duration", "Batch Size", "Mode of training"],
        rows: [
          ["IMC1", "Introduction to C", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMC2", "Introduction to C++", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMC3", "Advanced C++", "4 days (32 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMC4", "Fast Track to Kotlin Native", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
        ],
      },
      {
        caption: "Integration Minds Course offerings in Kotlin",
        columns: ["#No", "Course Name", "Duration", "Batch Size", "Mode of training"],
        rows: [
          ["IMK1", "Fast Track to Kotlin Native", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMK2", "Introduction to Kotlin", "4 days (32 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMK3", "Kotlin Coroutines", "4 days (32 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMK4", "Modern JVM Development with Kotlin, Microservices and Kafka", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMK5", "Spring Boot with Kotlin", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMK6", "Swift to Kotlin Android Conversion", "4 days (32 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
        ],
      },
    ],
  },
  "cybersecurity-courses": {
    title: "CyberSecurity Courses",
    summary:
      "Hands-on programs on security principles, network security, endpoint protection, identity & access management, SIEM and governance.",
    sections: [
      {
        heading: "Topics",
        items: [
          "Security fundamentals",
          "Network & application security",
          "Identity and Access Management (IAM)",
          "Security operations & SIEM",
          "Governance, risk and compliance",
        ],
      },
    ],
  },
  "python-courses": {
    title: "Python Courses",
    summary:
      "Practical Python tracks from basics to advanced, including data analysis, automation, APIs and web frameworks.",
    highlights: ["Core Python", "Data analysis", "Automation & scripting", "APIs & web"],
  },
  "cloud-computing-courses": {
    title: "Cloud Computing Courses",
    summary:
      "Cloud fundamentals and vendor-specific tracks covering compute, storage, networking, security and DevOps on the cloud.",
  },
  "api-courses": {
    title: "API Courses",
    summary:
      "Design, develop, secure and manage APIs with best practices, documentation and lifecycle management.",
  },
  "devops-courses": {
    title: "DevOps Courses",
    summary:
      "CI/CD pipelines, containerization, orchestration and monitoring for modern delivery.",
  },
  "ai-ml-ds-dl-courses": {
    title: "AI, ML, DS & DL Courses",
    summary:
      "End-to-end data and AI curriculum from data wrangling to production ML and deep learning.",
  },
  "bigdata-hadoop-courses": {
    title: "BigData & Hadoop Courses",
    summary:
      "Distributed processing, Hadoop ecosystem, Spark and big data analytics.",
  },
  "internet-of-things-courses": {
    title: "Internet of Things Courses",
    summary:
      "Edge to cloud IoT concepts, protocols, device management and security.",
  },
  "blockchain-courses": {
    title: "Blockchain Courses",
    summary:
      "Distributed ledger principles, smart contracts and enterprise blockchain platforms.",
  },
  "middleware-technologies": {
    title: "Middleware Technologies Courses",
    summary:
      "Integration patterns and platforms for reliable, scalable enterprise connectivity.",
  },
  "sysml-msbe-courses": {
    title: "SysML & MSBE",
    summary:
      "Model-based systems engineering and SysML notation for complex systems design.",
  },
  "software-testing-courses": {
    title: "Software Testing Courses",
    summary:
      "Manual, automation, performance and continuous testing practices.",
  },
  "telecom-wireless-courses": {
    title: "Telecom & Wireless Courses",
    summary:
      "Networking, wireless technologies and telecom standards overview.",
  },
  "mobile-app-dev-courses": {
    title: "Mobile App Dev Courses",
    summary:
      "Native and cross-platform app development patterns and tooling.",
  },

  // Financial
  "excel-vba-finance": {
    title: "Excel and VBA for Finance",
    summary:
      "Financial modeling with Excel formulas, functions and VBA automation tailored for finance workflows.",
  },
  "project-finance": {
    title: "Project Finance",
    summary: "Structure, risk analysis and modeling for project-based financing.",
  },
  "financial-research-analysis": {
    title: "Financial Research & Analysis",
    summary: "Equity and credit research fundamentals, ratio analysis and insights communication.",
  },
  "corporate-finance": {
    title: "Corporate Finance",
    summary: "Capital budgeting, cost of capital, capital structure and corporate decision making.",
  },
  "financial-modeling-valuation": {
    title: "Financial Modeling & Valuation",
    summary: "Spreadsheet modeling, valuation techniques and scenario analysis.",
  },
  "corporate-valuation": {
    title: "Corporate Valuation",
    summary: "Intrinsic and relative valuation methods for enterprises.",
  },
  "finance-for-non-finance": {
    title: "Finance for Non-Finance",
    summary: "Essential finance concepts for professionals without a finance background.",
  },
  "credit-research": {
    title: "Credit Research",
    summary: "Credit risk assessment frameworks and instruments.",
  },
  "ma-financial-modeling": {
    title: "M&A Financial Modeling",
    summary: "Deal structuring, accretion/dilution and merger modeling.",
  },
  "private-equity": {
    title: "Private Equity",
    summary: "PE lifecycle, deal sourcing, diligence and portfolio value creation.",
  },
  "capital-markets-securities": {
    title: "Capital Markets & Securities",
    summary: "Securities, markets microstructure and issuance processes.",
  },
  "credit-management": {
    title: "Credit Management",
    summary: "Policies, scoring and collections for effective credit operations.",
  },
  "risk-compliance": {
    title: "Risk & Compliance",
    summary: "Enterprise risk management and regulatory compliance essentials.",
  },
  "budgeting-control": {
    title: "Budgeting & Control",
    summary: "Planning, budgeting, forecasting and performance control.",
  },
  "derivatives-trading": {
    title: "Derivatives Trading",
    summary: "Derivatives instruments, pricing basics and trading strategies overview.",
  },
  "integrated-treasury-management": {
    title: "Integrated Treasury Management",
    summary: "Cash, liquidity, FX and risk management in modern treasury.",
  },
  "supply-chain-finance": {
    title: "Supply Chain Finance",
    summary: "SCF instruments and working capital optimization.",
  },

  // IBM (contact-driven)
  "ibm-power-aix-powerha-powervm": {
    title: "IBM Power Systems - AIX/PowerHA/PowerVM",
    summary: "Official IBM curriculum delivered with authorized materials and labs.",
  },
  "ibm-power-linux": {
    title: "IBM Power Systems - Linux",
    summary: "Linux on IBM Power track with hands-on labs.",
  },
  "ibm-z-ims-spectrum": {
    title: "IBM Z-Information Management & Spectrum",
    summary: "IMS, Spectrum Computing/Scale/Protect modules for mainframe and storage.",
  },
  "ibm-management-platform": {
    title: "IBM Management Platform",
    summary: "Netcool, Tivoli Workload Scheduler and related operations tooling.",
  },
  "ibm-watson": {
    title: "IBM Watson",
    summary: "Watson Discovery, OpenScale and conversational AI modules.",
  },
  "ibm-power-cognitive-powervc": {
    title: "IBM PowerVC & Cognitive",
    summary: "Virtualization and cognitive workloads on IBM Power.",
  },
  "ibm-z-mainframe": {
    title: "IBM Z Mainframe",
    summary: "z/OS, z/VM, JCL & utilities, REXX, TSO and operations.",
  },
  "ibm-storage-spectrum": {
    title: "IBM Storage",
    summary: "DS8000, FlashSystem, SVC, DFSMS, Storwize and Cloud Pak for Data.",
  },
  "ibm-engineering-lifecycle": {
    title: "IBM Engineering Lifecycle Management",
    summary: "Requirements to delivery lifecycle tooling.",
  },
  "ibm-power-ibmi-devops": {
    title: "IBM i & DevOps on IBM i",
    summary: "BRMS, RPG IV and DevOps practices for IBM i.",
  },
  "ibm-z-assembler-sysplex": {
    title: "IBM Z Assembler & Parallel Sysplex",
    summary: "Assembler language, Sysplex and IMS DBRC.",
  },
  "ibm-integration-development": {
    title: "IBM Integration & Development",
    summary: "API, WebSphere Application Server (WAS) and MQ tracks.",
  },
  "ibm-security-qradar-iam-guardium": {
    title: "IBM Security",
    summary: "QRadar, IAM and Guardium modules.",
  },
  "ibm-supply-chain-sterling": {
    title: "IBM Supply Chain",
    summary: "IBM Sterling OMS and Secure Proxy.",
  },
};
