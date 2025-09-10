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
    tables: [
      {
        caption: "Integratoin Minds CyberSecurity Foundational Courses",
        columns: ["Course Name", "Duration", "Batch Size", "Mode of training"],
        rows: [
          ["Automotive Cybersecurity Training Course", "3 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Bluetooth Security Training", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Car Cyber Threats and Digital Forensics Training", "3 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Cloud Security Training Crash Course", "3 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Computer Network Architecture Training", "3 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Cyber Threat Simulation Training", "3 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Cybersecurity Applied to Embedded Systems", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Cybersecurity Fundamentals", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Cybersecurity Systems Engineering Training", "3 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Cybersecurity Test and Evaluation (T&E) Training", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Fundamentals of Malwares And Protection Against Malware Training", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Fundamentals of Threats And Risk Management Training", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Information Security and Risk Management Training", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Introduction to Cryptography", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Introduction to Cryptography Training – Level 1", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Introduction to Hacking Training", "3 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Introduction to Secure Software Engineering Training", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Linux Security Training Crash Course", "4 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Network Security Training", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Smart Grid Cybersecurity Training", "3 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Software Security Training", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Software Testing Training", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Threat Simulation and Modeling Training", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Usable Security Fundamental Training", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Web Security Training", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["5G Cybersecurity Bootcamp | 3GPP Version", "4 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["5G Security Training | 5G Wireless Security Training", "5 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Certified Wireless Security Professional Training", "4 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["GSM and GPRS Security", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["GSM Fraud Training", "4 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["HSPA/HSPA+ and LTE Security Training", "3 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["LTE Security Training – LTE and LTE-Advanced Security", "2 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["VoLTE Security Training", "3 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Wireless Ethical Hacking | Penetration Testing Crash Course", "3 days", "1 to 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
        ],
      },
      {
        caption: "Integratoin Minds EndPoint Security Courses",
        columns: ["Course Name", "Duration", "Batch Size", "Mode of training"],
        rows: [
          ["Sophos Central Endpoint and Server", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Sophos XG Firewall", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["CyberArk Endpoint Privilege Manager (EPM) Fundamentals", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["McAfee Endpoint Security Administration", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["MVISION Endpoint Detection and Response Administration", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["MVISION Endpoint Detection and Response (EDR) Essentials", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["McAfee Mobile Cloud Security Overview", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Symantec Endpoint protection 12.x: Administration", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Symantec Endpoint Protection 12.x: Maintain and Troubleshoot", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Symantec Endpoint Protection 12.x: Install, Configure and Deploy", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Symantec Endpoint Protection 12.x: Manage and Administer", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Symantec Endpoint Protection 14.x: Configuring and Protect", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Check Point Certified Endpoint Specialist (CCES)", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["FireEye Endpoint Security (HX) Deployment", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["FireEye Investigations with Endpoint Security (HX)", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["RSA NetWitness Endpoint Foundations 11.5", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["RSA NetWitness Endpoint Insights Overview", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Trend Micro TippingPoint Security Solutions 5.0 Training", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Ivanti Endpoint Manager Administration", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
        ],
      },
      {
        caption: "Integration Minds Network Security Courses",
        columns: ["Course Name", "Duration", "Batch Size", "Mode of training"],
        rows: [
          ["FireEye Network Security (NX) Deployment", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["PaloAlto Firewall 10.0 Essentials: Configuration and Management", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["PaloAlto Panorama 10.0: Managing Firewalls at Scale", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Gigamon Foundation", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Designing and Implementing the Gigamon Inline Bypass Threat Prevention Solution", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Forcepoint NGFW Administrator", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["CheckPoint & Juniper & F5", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Symantec Security Analytics 7.2.x Administrator", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
        ],
      },
      {
        caption: "Integratoin Minds SIEM (Security Information and Event Management) Courses",
        columns: ["Course Name", "Duration", "Batch Size", "Mode of training"],
        rows: [
          ["IBM QRadar SIEM Administration", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["McAfee Enterprise Security Manager Administration", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["LogRhythm Platform Administration (LRPA)", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["LogRhythm Cloud Administration (LRCA)", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["LogRhythm Security Analyst (LRSA)", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["ArcSight Enterprise Security Solutions Architecture", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["SolarWinds Security Event Manager (SIEM)", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Splunk Enterprise System Administration", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
        ],
      },
      {
        caption: "Integratoin Minds Identity & Access Management Courses",
        columns: ["Course Name", "Duration", "Batch Size", "Mode of training"],
        rows: [
          ["IBM Identity & Access Management", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Oracle Identity & Access Management", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Okta Identity Management", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["CA IDM Administration", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Implementing Microsoft Identity Manager (MIM) 2016", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["Microsoft 365 Identity Management", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["OneLogin Administrator Essentials", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["CyberArk Privileged Access Security (PAS) Administration", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["The Application Access Manager (AAM) Fundamentals", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["SailPoint identity governance", "Customizable", "1 - 20 people", "LIVE Instructor Led ONLINE or CLASSROOM"],
        ],
      },
    ],
  },
  "python-courses": {
    title: "Python Courses",
    summary:
      "Practical Python tracks from basics to advanced, including data analysis, automation, APIs and web frameworks.",
    // highlights: ["Core Python", "Data analysis", "Automation & scripting", "APIs & web"],
    tables: [
      {
        caption: "Integration Minds Course offerings in Python",
        columns: ["#No", "Course Name", "Duration", "Batch Size", "Mode of training"],
        rows: [
          ["IMP1", "Python Programming Bootcamp", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMP2", "Advanced Python Programming ( Applied Python)", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMP3", "Web Programming with Python and JavaScript", "7 days (84 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMP4", "Introduction to Artificial Intelligence with Python", "7 days (84 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMP5", "Machine Learning with Python", "2 days (16 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMP6", "Data Science Fundamentals with Python & SQL", "5 days (40 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMP7", "Python Programming for QA Automation", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMP8", "Python and Tensorflow", "2 days (16 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
          ["IMP9", "Python for AWS Serverless", "3 days (24 hours)", "1 to 15 pax", "LIVE Instructor Led ONLINE or CLASSROOM"],
        ],
      },
    ],
  },
  "cloud-computing-courses": {
    title: "Cloud Computing Courses",
    summary:
      "Cloud fundamentals and vendor-specific tracks covering compute, storage, networking, security and DevOps on the cloud.",
    tables: [
      {
        caption: "CLOUD COMPUTING TRAINING",
        columns: ["Course Name", "Duration", "Batch Size", "Mode of training"],
        rows: [
          [
            "Vendor Neutral Cloud Computing Bootcamp",
            "Customizable",
            "1 - 20 people",
            "LIVE Instructor Led ONLINE or CLASSROOM; lab access via cloud",
          ],
          [
            "Cloud Capacity Planning Training",
            "Customizable",
            "1 - 20 people",
            "LIVE Instructor Led ONLINE or CLASSROOM; lab access via cloud",
          ],
          [
            "Cloud Security Training Crash Course",
            "Customizable",
            "1 - 20 people",
            "LIVE Instructor Led ONLINE or CLASSROOM; lab access via cloud",
          ],
          [
            "Linux Fundamentals Bootcamp",
            "Customizable",
            "1 - 20 people",
            "LIVE Instructor Led ONLINE or CLASSROOM; lab access via cloud",
          ],
          [
            "Mobile Cloud Training",
            "Customizable",
            "1 - 20 people",
            "LIVE Instructor Led ONLINE or CLASSROOM; lab access via cloud",
          ],
          [
            "Microsoft Azure Courses",
            "Customizable",
            "1 - 20 people",
            "LIVE Instructor Led ONLINE or CLASSROOM; lab access via cloud",
          ],
          [
            "Amazon Web Services Courses",
            "3 days",
            "1 - 20 people",
            "LIVE Instructor Led ONLINE or CLASSROOM; lab access via cloud",
          ],
          [
            "Google Cloud Platform Courses",
            "3 days",
            "1 - 20 people",
            "LIVE Instructor Led ONLINE or CLASSROOM; lab access via cloud",
          ],
          [
            "Oracle Cloud Integrator Courses",
            "3 days",
            "1 - 20 people",
            "LIVE Instructor Led ONLINE or CLASSROOM; lab access via cloud",
          ],
          [
            "IBM Cloud Pack Courses (Softlayer)",
            "2 days",
            "1 - 20 people",
            "LIVE Instructor Led ONLINE or CLASSROOM; lab access via cloud",
          ],
          [
            "Alibaba Cloud Courses",
            "3 days",
            "1 - 20 people",
            "LIVE Instructor Led ONLINE or CLASSROOM; lab access via cloud",
          ],
        ],
      },
    ],
  },
  "api-courses": {
    title: "API Courses",
    summary:
      "Design, develop, secure and manage APIs with best practices, documentation and lifecycle management.",
    sections: [
      {
        heading: "What is an API?",
        body:
          "API stands for Application Programming Interface, a mechanism that allows the interaction between two applications using a set of rules.",
      },
      {
        heading: "Main types of Web APIs",
        items: [
          "Open APIs — Also known as Public APIs, there are no restrictions to access these types of APIs because they are publicly available.",
          "Partner APIs — A developer needs specific rights or licenses to access these APIs because they are not available to the public.",
          "Internal APIs — Also known as Private APIs, only internal systems expose this type of API. They are designed for internal use within a company to improve products and services.",
          "Composite APIs — Combine different data and service APIs to perform a sequence of tasks, often synchronously, to speed up execution and improve performance in web interfaces.",
        ],
      },
    ],
    tables: [
      {
        caption: "Application Programming Interface (API)",
        columns: ["Course Name", "Duration", "Mode of training"],
        rows: [
          ["IBM API Connect", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["Postman - Intro to APIs (without coding)", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["Microsoft Graph API", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["Sencha Ext JS API", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["Developing APIs with Google Cloud's Apigee API Platform", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["RESTful API with HTTP and JavaScript", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["Apigee API", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["Swagger API", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["Katalon Studio", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["Tricentis Tosca", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["MuleSoft API", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["JMeter", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["Apiary API", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["Rapid API", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["Paw (The most advanced API tool for Mac)", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["SoapUI", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["Karate DSL", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
          ["Assertible", "Customizable", "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud"],
        ],
      },
    ],
  },
  "devops-courses": {
    title: "DevOps Courses",
    summary:
      "CI/CD pipelines, containerization, orchestration and monitoring for modern delivery.",
    tables: [
      {
        caption: "DevOps & DevSecOps Courses",
        columns: ["Course Name", "Duration", "Role"],
        rows: [
          ["DevOps Training Bootcamp", "5 days", ""],
          ["DevSecOps Training Bootcamp", "5 days", ""],
          ["DevSecOps Training for Managers", "3 days", ""],
          ["MLOps Training", "5 days", ""],
          ["Digital Transformations Training", "3 days", ""],
          ["Containerization Bootcamp", "3 days", ""],
          ["Docker", "5 days", "Most powerful container tool"],
          ["Kubernetes", "3 days", "Most powerful container tool"],
          ["Puppet", "5 days", "Cross-platform configuration management platform"],
          ["Chef", "5 days", "Ruby-based configuration management tool"],
          ["Ansible", "3 days", "Configuration management tool"],
          ["Pivotal", "3 days", ""],
          ["Jenkins", "4 days", "Devops automation tool"],
          ["GitHub", "5 days", "Source code management tool"],
          ["Gradle", "3 days", "Reliable build tool"],
          ["Bamboo", "4 days", "ATLASSIAN'S CI/CD server"],
          ["Nagios", "4 days", "Devops monitoring tools"],
          ["RayGun", "3 days", "APM, error monitoring and crash reporting platform"],
          ["Terraform", "3 days", "An infrastructure provisioning tool"],
          ["Vagrant", "3 days", "A tool for configuring virtual machines"],
          ["New Relic", "3 days", "Devops Monitoring Tool"],
          ["Splunk", "5 days", "Monitoring and exploring machine-generated data"],
          ["Datadog", "4 days", "Server monitoring solution"],
        ],
      },
    ],
  },
  "ai-ml-ds-dl-courses": {
    title: "AI, ML, DS & DL Courses",
    summary:
      "End-to-end data and AI curriculum from data wrangling to production ML and deep learning.",
    tables: [
      {
        caption: "ARTIFICIAL INTELLIGENCE (AI) AND MACHINE LEARNING (ML)",
        columns: ["Course Name", "Duration", "Mode of training"],
        rows: [
          [
            "Artificial Intelligence Training Bootcamp",
            "5 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Machine Learning (AI/ML)-Based Software as a Medical Device (SaMD)",
            "5 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Machine Learning for Control Training",
            "3 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Machine Learning Training Bootcamp",
            "5 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Machine Learning with Python",
            "3 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Machine Learning with R",
            "3 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Introduction to R",
            "3 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
        ],
      },
    ],
  },
  "bigdata-hadoop-courses": {
    title: "BigData & Hadoop Courses",
    summary:
      "Distributed processing, Hadoop ecosystem, Spark and big data analytics.",
    tables: [
      {
        caption:
          "BIG DATA ANALYTICS on different platforms, Hortonworks, Cloudera & BigData University",
        columns: ["Course Name", "Duration", "Mode of training"],
        rows: [
          [
            "Applied Data Science and Machine Learning Training",
            "3 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Big Data for Project and Program Managers Training",
            "3 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Big Data Development",
            "5 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "BigData Administration",
            "5 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Fundamentals of Data Analytics and Methods",
            "3 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Hadoop Training",
            "5 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Python Programming Bootcamp",
            "3 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Sensor and Data Fusion Training Bootcamp",
            "3 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
        ],
      },
    ],
  },
  "internet-of-things-courses": {
    title: "Internet of Things Courses",
    summary:
      "Edge to cloud IoT concepts, protocols, device management and security.",
    tables: [
      {
        caption: "IOT TRAINING",
        columns: ["Course Name", "Duration", "Mode of training"],
        rows: [
          [
            "Industry 4.0 Training",
            "2 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "IoT Security Training ( IoT Security Awareness)",
            "2 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "IoT Training Crash Course",
            "3 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "LTE-M and NB-IoT Crash Course",
            "2 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "The Internet of Things Training",
            "2 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
        ],
      },
    ],
  },
  "blockchain-courses": {
    title: "Blockchain Courses",
    summary:
      "Distributed ledger principles, smart contracts and enterprise blockchain platforms.",
    tables: [
      {
        caption: "Blockchain Trainings",
        columns: ["Course Name", "Duration", "Mode of training"],
        rows: [
          [
            "Blockchain Overview: Business Foundations",
            "5 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Hyperledger Fabric Engineer (Bootcamp)",
            "5 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Hyperledger Fabric v1.4: Architecting, Designing and Deploying a Network",
            "5 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Developing on Hyperledger Fabric 1.4",
            "5 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Hands-on Ethereum Development Bootcamp",
            "5 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Corda Distributed Ledger Architecture",
            "5 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Blockchain Security Training",
            "3 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Blockchain for Healthcare Professionals",
            "3 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "Data Science and Blockchain",
            "2 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
          [
            "IoT and Blockchain",
            "2 days",
            "LIVE Instructor Led ONLINE or CLASSROOM; batch size 1 to 20; lab access via cloud",
          ],
        ],
      },
    ],
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
