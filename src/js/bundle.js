// ==========================================
// SHUBHANSHU MANJARE - PLACEMENT PORTFOLIO
// Self-Contained High-Performance Engine
// ==========================================

const profileData = {
  name: "Shubhanshu Manjare",
  role: "Computer Science Engineering Student",
  headline: "Aspiring Software Developer & AI Systems Engineer",
  institution: "Symbiosis Institute of Technology (SIT), Nagpur",
  degree: "B.Tech in Computer Science & Engineering",
  graduation: "Expected May 2028",
  cgpa: "7.0 / 10.0",
  location: "Nagpur, Maharashtra, India",
  email: "shubhumanjare@gmail.com",
  phone: "+91-8329882859",
  github: "https://github.com/shubh658",
  githubUsername: "shubh658",
  linkedin: "https://linkedin.com/in/shubhanshu-manjare",
  resumeUrl: "./public/resume.pdf",
  bio: "Passionate Computer Science undergraduate at Symbiosis Institute of Technology (SIT) Nagpur with hands-on experience in full-stack development, Python engineering, computer vision, and explainable machine learning. Certified in Red Hat System Administration, Network Automation with Ansible, and Agentic AI systems. Seeking software development and engineering internship/placement opportunities where I can apply rigorous problem solving to build scalable, resilient software.",
  stats: [
    { label: "Cumulative CGPA", value: "7.0", sub: "Out of 10.0 Scale" },
    { label: "Completed Projects", value: "5+", sub: "Production & Research" },
    { label: "Industry Certifications", value: "4+", sub: "Red Hat & Udemy" },
    { label: "Practical Experience", value: "1 Mo", sub: "Software Intern @ MainCraft" }
  ],
  interests: [
    "Software Architecture & Backend Systems",
    "Agentic AI & Large Language Model Workflows",
    "Computer Vision & Real-time Biometrics",
    "Explainable AI (XAI) & Healthcare Diagnostics",
    "Linux Systems & Ansible Network Automation"
  ]
};

const educationData = [
  {
    institution: "Symbiosis Institute of Technology (SIT)",
    location: "Nagpur, Maharashtra, India",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    period: "2024 – May 2028",
    status: "Currently Pursuing (Undergraduate)",
    scoreLabel: "Cumulative GPA",
    score: "7.0 / 10.0",
    badge: "Undergraduate Degree",
    highlights: [
      "Rigorous CS foundation spanning algorithmic problem solving, systems architecture, and AI engineering.",
      "Practical coursework in operating systems, compiler construction, database foundations, and networking.",
      "Active contributor to academic research projects in explainable machine learning and public safety automation."
    ]
  },
  {
    institution: "Sarwashree Junior College",
    location: "Nagpur, Maharashtra, India",
    degree: "Higher Secondary Certificate (HSC / Class XII)",
    period: "Completed",
    status: "Higher Secondary Education",
    scoreLabel: "Final Percentage",
    score: "63.0%",
    badge: "Class XII (Junior College)",
    highlights: [
      "Focused on Science stream subjects: Physics, Chemistry, Mathematics, and Computer Science fundamentals.",
      "Developed foundational analytical and mathematical reasoning."
    ]
  },
  {
    institution: "Sanskar Vidya Sagar School",
    location: "Nagpur, Maharashtra, India",
    degree: "Secondary School Certificate (SSC / Class X)",
    period: "Completed",
    status: "Secondary School Education",
    scoreLabel: "Final Percentage",
    score: "77.0%",
    badge: "Class X (Schooling)",
    highlights: [
      "Graduated with distinction in general sciences and mathematics.",
      "Consistent academic performance with active participation in school co-curricular activities."
    ]
  }
];

const courseworkData = [
  { name: "Data Structures & Algorithms", category: "Core CS", icon: "binary" },
  { name: "Operating Systems", category: "Systems", icon: "cpu" },
  { name: "Database Management Systems (DBMS)", category: "Data", icon: "database" },
  { name: "Object-Oriented Programming (OOP)", category: "Core CS", icon: "code" },
  { name: "Theory of Computation", category: "Theory", icon: "file-code" },
  { name: "Compiler Construction", category: "Theory & Systems", icon: "terminal" },
  { name: "Computer Networks", category: "Networking", icon: "network" },
  { name: "Computer Organization & Architecture", category: "Hardware/Systems", icon: "hard-drive" },
  { name: "Data Compression & Comprehension", category: "Information Theory", icon: "archive" },
  { name: "Microcontrollers & Embedded Systems", category: "Hardware/IoT", icon: "circuit-board" },
  { name: "Database Foundations", category: "Data", icon: "table" },
  { name: "Python Programming", category: "Languages", icon: "code-2" },
  { name: "Basic Electrical & Electronics (BEEE)", category: "Engineering Core", icon: "zap" },
  { name: "Engineering Mathematics", category: "Mathematics", icon: "calculator" }
];

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python", level: "Advanced", tag: "Primary" },
      { name: "C Language", level: "Proficient", tag: "Systems" },
      { name: "Java", level: "Intermediate", tag: "OOP" },
      { name: "JavaScript (ES6+)", level: "Proficient", tag: "Web" }
    ]
  },
  {
    title: "AI, Machine Learning & Vision",
    icon: "cpu",
    skills: [
      { name: "Explainable AI (SHAP / LIME)", level: "Advanced", tag: "Research" },
      { name: "Scikit-learn & Machine Learning", level: "Proficient", tag: "Analytics" },
      { name: "OpenCV (Computer Vision)", level: "Proficient", tag: "Vision" },
      { name: "Face Recognition Library", level: "Proficient", tag: "Biometrics" },
      { name: "Agentic AI Architectures & LLMs", level: "Proficient", tag: "Certified" },
      { name: "Pandas & Data Processing", level: "Proficient", tag: "Data" }
    ]
  },
  {
    title: "Web & API Development",
    icon: "layout",
    skills: [
      { name: "HTML5 & Semantic Markup", level: "Advanced", tag: "Frontend" },
      { name: "CSS3 & Modern Responsive UI", level: "Advanced", tag: "Frontend" },
      { name: "JavaScript DOM & Modern APIs", level: "Proficient", tag: "Frontend" },
      { name: "FastAPI REST Framework", level: "Intermediate", tag: "Backend" },
      { name: "Leaflet GIS & Interactive Maps", level: "Intermediate", tag: "Geo" }
    ]
  },
  {
    title: "Databases & Storage",
    icon: "database",
    skills: [
      { name: "MySQL", level: "Proficient", tag: "Relational" },
      { name: "SQLite", level: "Proficient", tag: "Embedded DB" },
      { name: "SQL Queries & Normalization", level: "Proficient", tag: "Data" },
      { name: "Database Foundations", level: "Proficient", tag: "Core" }
    ]
  },
  {
    title: "Systems, DevOps & Automation",
    icon: "terminal",
    skills: [
      { name: "Red Hat Linux Administration (RH124)", level: "Certified", tag: "SysAdmin" },
      { name: "Ansible Network Automation (DO457)", level: "Certified", tag: "DevOps" },
      { name: "Git & Version Control", level: "Proficient", tag: "Tool" },
      { name: "GitHub Collaboration", level: "Proficient", tag: "Workflow" }
    ]
  },
  {
    title: "Developer Tools & Hardware",
    icon: "wrench",
    skills: [
      { name: "VS Code", level: "Advanced", tag: "IDE" },
      { name: "Jira", level: "Proficient", tag: "Agile" },
      { name: "Microcontrollers & Sensors", level: "Practical", tag: "IoT/Hardware" },
      { name: "Linux Bash CLI", level: "Proficient", tag: "Environment" }
    ]
  }
];

const projectsData = [
  {
    id: "aegis-incident-agent",
    title: "Public Safety Incident Reporting & Triage Agent",
    subtitle: "AegisResponse AI / Civic Watch",
    category: "AI & Full Stack",
    tagline: "Natural Language Emergency Intake, Automated Severity Scoring & GIS Command Center",
    tech: ["Python", "FastAPI", "Leaflet GIS", "Agentic AI", "NLP Regex", "SQLite", "jsPDF"],
    featured: true,
    github: "https://github.com/shubh658",
    description: "An intelligent public safety incident response and triage platform that enables citizens to file emergency reports in plain natural language. The system automatically classifies incident types, evaluates urgency levels, suggests immediate safety protocols, and interfaces with a GIS emergency dispatch command center.",
    problemStatement: "Traditional emergency reporting forms require citizens under stress to navigate confusing dropdown menus and technical categories, delaying critical dispatch information and impeding rapid response.",
    solution: "Engineered an AI triage parser that extracts locations, danger keywords, and incident categories (fire, hazards, accidents, suspicious activity) on the fly, auto-populating structured dossiers, rendering live GIS maps, and exporting instant PDF incident slips.",
    keyFeatures: [
      "Natural language text parser with regex-based location and urgency detection",
      "Dynamic priority scoring engine (P1 Critical through P4 Routine)",
      "Automated citizen safety guidance co-pilot tailored to specific hazard categories",
      "GIS map command center with simulated emergency response units (PCR, Fire Tender, ALS Ambulance)",
      "Instant client-side PDF and text report generation via jsPDF integration"
    ],
    role: "Lead Full-Stack & Agent Developer (Architecture, NLP heuristic triage, and UI integration)"
  },
  {
    id: "cvd-explainable-ai",
    title: "Cardiovascular Disease Detection with Explainable AI",
    subtitle: "SIT Nagpur Research Project",
    category: "Machine Learning & Healthcare",
    tagline: "Interpretable Clinical Risk Prediction using SHAP & LIME Frameworks",
    tech: ["Python", "Scikit-learn", "SHAP", "LIME", "Pandas", "NumPy", "Matplotlib"],
    featured: true,
    github: "https://github.com/shubh658",
    description: "A machine learning clinical diagnostic pipeline that predicts cardiovascular disease susceptibility from patient physiological metrics while employing Explainable AI (XAI) to explain the internal rationale behind every risk score to medical practitioners.",
    problemStatement: "Standard high-accuracy deep learning and ensemble models operate as impenetrable 'black boxes,' preventing clinicians from trusting predictions without understanding why a patient was flagged at risk.",
    solution: "Integrated SHAP (Shapley Additive exPlanations) and LIME to generate local feature importance graphs, pinpointing the exact clinical variables (systolic blood pressure, cholesterol levels, glucose, BMI, age) that influence risk classification.",
    keyFeatures: [
      "Rigorous data preprocessing and scaling across multi-parameter patient datasets",
      "Comparison and optimization of multiple classification models (Random Forest, Gradient Boosting, Logistic Regression)",
      "Evaluated on critical medical diagnostic benchmarks: Precision, Recall, ROC-AUC, and F1-score",
      "Explainability reports highlighting individual risk drivers to assist cardiologists with proactive interventions",
      "Comprehensive research paper and academic literature review documentation"
    ],
    role: "Machine Learning & Research Engineer (Pipeline design, model training, XAI interpretation)"
  },
  {
    id: "automated-traffic-signaling",
    title: "Automated Traffic Signaling Mechanism",
    subtitle: "Adaptive IoT Density Controller",
    category: "IoT & Embedded Systems",
    tagline: "Dynamic Queue-Responsive Signal Switching to Minimize Urban Congestion",
    tech: ["Python", "Embedded Sensors", "Microcontrollers", "Hardware Interfacing", "Serial Protocols"],
    featured: true,
    github: "https://github.com/shubh658",
    description: "An adaptive traffic control system that replaces inefficient fixed-time countdown signals with responsive microcontroller timing that reacts dynamically to real-time vehicular queue densities across intersection approaches.",
    problemStatement: "Conventional fixed-timer traffic lights force drivers on busy arterial routes to sit idle at empty cross streets, causing needless fuel consumption, increased emissions, and persistent urban traffic jams.",
    solution: "Interfaced sensor arrays with an embedded microcontroller running an adaptive Python timing algorithm that continuously evaluates vehicle density and allocates proportional green-light duration to the most congested corridor.",
    keyFeatures: [
      "Multi-lane vehicle presence and queue density tracking via embedded sensors",
      "Dynamic signal duration computation prioritizing high-congestion avenues",
      "Substantial reduction in intersection wait times and idle vehicle emissions",
      "Equitable fail-safe logic ensuring pedestrian walk windows and preventing starvation of low-traffic lanes"
    ],
    role: "Embedded Systems Developer (Sensor circuit integration and adaptive priority switching logic)"
  },
  {
    id: "face-recognition-attendance",
    title: "Face Recognition Attendance System",
    subtitle: "Biometric Computer Vision Pipeline",
    category: "Computer Vision",
    tagline: "Real-time Multi-Face Detection and Automatic Digital Roll-Call Logging",
    tech: ["Python", "OpenCV", "Face Recognition Library", "NumPy", "CSV / Database"],
    featured: false,
    github: "https://github.com/shubh658",
    description: "An automated real-time biometric attendance platform that identifies student faces from continuous video stream feeds and registers presence with millisecond timestamps, eliminating proxy attendance completely.",
    problemStatement: "Manual paper roll calls and barcode scanning waste 10–15 minutes of lecture time, are vulnerable to buddy punching, and create administrative overhead for academic institutions.",
    solution: "Engineered an OpenCV pipeline utilizing 128-dimensional facial feature vectors to detect, align, and recognize registered students in real-time, instantly logging verified attendance into structured databases.",
    keyFeatures: [
      "Real-time face detection and multi-angle recognition via live camera input",
      "Deep feature embedding matching against enrolled student facial datasets",
      "Anti-duplicate attendance mechanism preventing multiple logs within the same lecture session",
      "Automated export of attendance registries for faculty review and compliance tracking"
    ],
    role: "Computer Vision Developer (Camera streaming, facial recognition pipeline, and duplicate verification)"
  },
  {
    id: "smart-attendance-system",
    title: "Smart Attendance System",
    subtitle: "Relational Classroom Administration",
    category: "Software Engineering",
    tagline: "Automated Student Attendance Tracking with Relational MySQL Storage",
    tech: ["Python", "OpenCV", "MySQL", "Relational Database Design", "GUI"],
    featured: false,
    github: "https://github.com/shubh658",
    description: "A digital attendance application built with Python and MySQL that organizes student presence records digitally, eliminating manual registers and enabling rapid administrative report generation for academic faculty.",
    problemStatement: "Paper-based attendance logging is error-prone, prone to physical record loss, and makes generating semester-end eligibility reports extremely tedious.",
    solution: "Constructed a desktop-based management system backed by normalized MySQL relational tables to record, track, and aggregate individual and course-level attendance metrics.",
    keyFeatures: [
      "Normalized relational schema for student profiles, course registrations, and daily attendance logs",
      "Date-wise and student-wise attendance tracking with rapid search and filtering queries",
      "Automated percentage calculation flagging low-attendance students for academic advisement",
      "Faculty reporting dashboard offering instantaneous summaries of classroom attendance"
    ],
    role: "Software Developer (MySQL database architecture, SQL query optimization, and desktop GUI)"
  }
];

const certificatesData = [
  {
    id: "udemy-agentic-ai",
    title: "Mastering Agentic AI: From Prompt to Protocols to Production",
    issuer: "Udemy",
    instructor: "Vinit Singh",
    date: "August 2026",
    duration: "38 Total Hours",
    credentialId: "UC-d95d8984-076c-44b1-ae69-fb9fc64102af",
    verifyUrl: "https://ude.my/UC-d95d8984-076c-44b1-ae69-fb9fc64102af",
    pdfUrl: "./public/certificates/udemy-agentic-ai.pdf",
    verified: true,
    category: "AI & Autonomous Systems",
    skills: ["Agentic AI", "Autonomous Protocols", "Prompt Engineering", "LLM Systems", "Production AI"],
    description: "In-depth professional masterclass covering agentic AI frameworks, tool calling, autonomous agent decision pipelines, inter-agent communication protocols, and deploying production LLM agents."
  },
  {
    id: "redhat-rh124",
    title: "Red Hat System Administration I (RH124) - Ver. 9.3",
    issuer: "Red Hat Academy",
    signatory: "Karl Reynolds (Senior Director, Global Learning Services)",
    date: "April 2026",
    duration: "40 Credit Hours",
    credentialId: "d5220b6c-c0c4-41a6-8b34-a879e645dd74",
    verifyUrl: "https://www.credly.com/badges/d5220b6c-c0c4-41a6-8b34-a879e645dd74",
    pdfUrl: null,
    verified: true,
    category: "Linux & Systems Administration",
    skills: ["Red Hat Enterprise Linux", "CLI Operations", "Storage Management", "User Permissions", "Systemd"],
    description: "Official Red Hat course of attendance focused on core Linux systems administration, user and permission management, storage partitioning, systemd service management, and Linux security foundations."
  },
  {
    id: "redhat-do457",
    title: "Network Automation with Red Hat Ansible Automation Platform (DO457)",
    issuer: "Red Hat Academy",
    signatory: "Karl Reynolds (Senior Director, Global Learning Services)",
    date: "August 2026",
    duration: "32 Credit Hours",
    credentialId: "48d41033-44c5-4ccd-ae6f-b9eae3e136c3",
    verifyUrl: "https://www.credly.com/badges/48d41033-44c5-4ccd-ae6f-b9eae3e136c3",
    pdfUrl: null,
    verified: true,
    category: "DevOps & Infrastructure Automation",
    skills: ["Ansible Automation", "Playbook Design", "Network Automation", "Infrastructure as Code", "CI/CD"],
    description: "Specialized training on automating network devices, orchestrating multi-tier infrastructure deployments, authoring robust Ansible playbooks, and managing network configuration drifts."
  },
  {
    id: "redhat-ad141",
    title: "Python Programming with Red Hat (AD141)",
    issuer: "Red Hat Academy",
    date: "March 2026",
    duration: "32 Credit Hours",
    credentialId: "Verified by SIT Red Hat Academy",
    verifyUrl: null,
    pdfUrl: null,
    verified: true,
    category: "Programming & Software Engineering",
    skills: ["Python 3", "Object-Oriented Design", "Automation Scripting", "Data Structures", "Error Handling"],
    description: "Curriculum centered on writing modular, testable, and idiomatic Python code, leveraging standard libraries for automation and building robust software utilities."
  },
  {
    id: "maincrafts-internship",
    title: "Certificate of Internship — Software Engineering",
    issuer: "MainCraft Technologies",
    date: "August 2026",
    duration: "1 Month Intensive",
    credentialId: "MC-INTERN-66",
    verifyUrl: null,
    pdfUrl: "./public/certificates/maincrafts-internship.pdf",
    verified: true,
    category: "Professional Experience",
    skills: ["Software Engineering", "Full-Stack Development", "Agile Workflows", "Production Code Delivery"],
    description: "Formal certification confirming successful completion of a one-month software development internship, delivering practical software modules and collaborating within an engineering team."
  },
  {
    id: "maincrafts-lor",
    title: "Letter of Recommendation (LOR)",
    issuer: "MainCraft Technologies",
    date: "August 2026",
    duration: "Official Recommendation",
    credentialId: "MC-LOR-66",
    verifyUrl: null,
    pdfUrl: "./public/certificates/maincrafts-lor.pdf",
    verified: true,
    category: "Professional Recommendation",
    skills: ["Technical Problem Solving", "Code Quality", "Work Ethic", "Engineering Excellence"],
    description: "Formal executive letter of recommendation detailing strong problem-solving capabilities, rapid technical adaptability, and dedication demonstrated during the internship tenure."
  }
];

const experienceData = [
  {
    role: "Software Engineering Intern",
    organization: "MainCraft Technologies",
    location: "Remote / Hybrid",
    period: "1 Month Intensive (2026)",
    type: "Industry Internship",
    badge: "Verified Industry Experience",
    summary: "Worked with the software engineering team to develop, test, and document software modules, adhering to agile best practices and code standards.",
    responsibilities: [
      "Collaborated on engineering tasks spanning feature implementation, debugging, and code refactoring.",
      "Participated in agile standups, task tracking with Jira, and collaborative version control via Git & GitHub.",
      "Documented technical deliverables and workflows, producing verified engineering reports and milestone presentations.",
      "Awarded Certificate of Internship and an official Letter of Recommendation (LOR) praising problem-solving speed and work ethic."
    ],
    tech: ["Python", "JavaScript", "Git / GitHub", "Agile", "Jira", "Software Architecture"],
    certificateUrl: "./public/certificates/maincrafts-internship.pdf",
    lorUrl: "./public/certificates/maincrafts-lor.pdf"
  },
  {
    role: "Undergraduate Project Lead & Researcher",
    organization: "Symbiosis Institute of Technology (SIT), Nagpur",
    location: "Nagpur, India",
    period: "2024 – Present",
    type: "Academic & Research Engineering",
    badge: "Undergraduate Leadership",
    summary: "Leading technical project teams across machine learning, computer vision, and public safety automation under university faculty guidance.",
    responsibilities: [
      "Spearheaded the development of Explainable AI (XAI) models for early cardiovascular disease detection, publishing research documentation.",
      "Engineered hardware-software integration for IoT-based automated traffic signaling mechanisms using microcontrollers and density sensors.",
      "Designed and deployed computer-vision powered attendance frameworks leveraging OpenCV facial embeddings and normalized relational databases.",
      "Maintained structured documentation and GitHub repositories for academic peer review and project showcases."
    ],
    tech: ["Python", "FastAPI", "Scikit-learn", "SHAP / LIME", "OpenCV", "MySQL", "Embedded Systems"],
    certificateUrl: null,
    lorUrl: null
  }
];

const achievementsData = [
  {
    title: "Dual Red Hat Industry Credentials",
    category: "System Administration & Automation",
    date: "2026",
    issuer: "Red Hat Academy",
    description: "Successfully completed verified training in Red Hat System Administration I (RH124) and Network Automation with Red Hat Ansible (DO457), demonstrating mastery of Linux infrastructure and automated configuration management."
  },
  {
    title: "Mastery in Agentic AI Engineering",
    category: "AI & Autonomous Systems",
    date: "2026",
    issuer: "Udemy / Vinit Singh",
    description: "Completed 38 hours of rigorous technical training in multi-agent orchestration, LLM tool-calling architectures, and production autonomous agent deployment."
  },
  {
    title: "Academic Research in Explainable Healthcare AI",
    category: "Machine Learning Research",
    date: "2026",
    issuer: "Symbiosis Institute of Technology (SIT), Nagpur",
    description: "Authored an undergraduate research study on Cardiovascular Disease Detection combining multiple classification algorithms with SHAP and LIME interpretability techniques for clinical diagnostic trust."
  },
  {
    title: "Industry Letter of Recommendation from MainCraft Technologies",
    category: "Professional Recognition",
    date: "2026",
    issuer: "MainCraft Technologies",
    description: "Awarded an executive letter of recommendation for exceptional technical performance, dedication, and problem-solving skills demonstrated during a 1-month engineering internship."
  }
];

// Toast notification helper
function showToast(message, type = 'success') {
  let toastEl = document.getElementById('toast-notification');
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.id = 'toast-notification';
    document.body.appendChild(toastEl);
  }

  const iconName = type === 'success' ? 'check-circle' : 'info';
  const borderClass = type === 'success' ? 'border-emerald-500/40 text-emerald-300' : 'border-sky-500/40 text-sky-300';

  toastEl.className = `fixed bottom-6 right-6 z-[200] flex items-center gap-3 px-5 py-3.5 rounded-xl bg-slate-900/95 backdrop-blur-md border ${borderClass} shadow-2xl text-sm font-medium transition-all duration-300 transform translate-y-0 opacity-100`;
  
  toastEl.innerHTML = `
    <i data-lucide="${iconName}" class="w-5 h-5 flex-shrink-0"></i>
    <span>${message}</span>
  `;

  if (window.lucide) {
    window.lucide.createIcons({ root: toastEl });
  }

  setTimeout(() => {
    toastEl.classList.remove('opacity-100', 'translate-y-0');
    toastEl.classList.add('opacity-0', 'translate-y-6', 'pointer-events-none');
  }, 3500);
}

// Layout Render Functions
function renderNavbar() {
  return `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80" id="main-nav">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <a href="#hero" class="flex items-center gap-3 group text-decoration-none">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-400 p-[1.5px] transition-transform group-hover:scale-105">
              <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span class="font-mono font-bold text-sky-400 text-lg">SM</span>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-slate-100 tracking-tight text-base group-hover:text-sky-300 transition-colors">
                ${profileData.name}
              </span>
              <span class="text-xs text-slate-400 hidden sm:inline-block">
                B.Tech CSE • SIT Nagpur
              </span>
            </div>
          </a>

          <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
            <a href="#about" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">About</a>
            <a href="#education" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">Education</a>
            <a href="#skills" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">Skills</a>
            <a href="#projects" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">Projects</a>
            <a href="#certifications" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">Certifications</a>
            <a href="#experience" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">Experience</a>
            <a href="#resume" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">Resume</a>
            <a href="#contact" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">Contact</a>
          </nav>

          <div class="hidden sm:flex items-center gap-3">
            <a href="${profileData.resumeUrl}" download="Shubhanshu_Manjare_Resume.pdf" class="btn-primary text-xs sm:text-sm py-2 px-4 shadow-indigo-500/20">
              <i data-lucide="download" class="w-4 h-4"></i>
              <span>Download CV</span>
            </a>
          </div>

          <div class="flex lg:hidden">
            <button id="mobile-menu-toggle" type="button" class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 focus:outline-none" aria-label="Toggle Navigation Menu">
              <i data-lucide="menu" class="w-6 h-6" id="menu-icon-open"></i>
              <i data-lucide="x" class="w-6 h-6 hidden" id="menu-icon-close"></i>
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" class="hidden lg:hidden border-t border-slate-800/90 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1">
        <a href="#about" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">About</a>
        <a href="#education" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">Education & Coursework</a>
        <a href="#skills" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">Technical Skills</a>
        <a href="#projects" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">Projects (5)</a>
        <a href="#certifications" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">Certifications & Badges</a>
        <a href="#experience" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">Experience & Achievements</a>
        <a href="#resume" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">Resume PDF</a>
        <a href="#contact" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">Contact Me</a>
        <div class="pt-4 mt-2 border-t border-slate-800">
          <a href="${profileData.resumeUrl}" download="Shubhanshu_Manjare_Resume.pdf" class="btn-primary w-full justify-center">
            <i data-lucide="download" class="w-4 h-4"></i>
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>
    </header>
  `;
}

function renderHero() {
  return `
    <section id="hero" class="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-36 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div class="lg:col-span-7 flex flex-col items-start text-left">
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Campus Placement & Software Engineering Roles</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              Hi, I'm <span class="gradient-text">${profileData.name}</span>
            </h1>

            <p class="text-xl sm:text-2xl font-semibold text-sky-400 mb-4">
              ${profileData.role}
            </p>

            <p class="text-base sm:text-lg text-slate-300 max-w-2xl mb-6 leading-relaxed">
              Pursuing <strong class="text-white">B.Tech in Computer Science & Engineering</strong> at 
              <strong class="text-white">${profileData.institution}</strong>. 
              Passionate about building scalable backend architectures, real-time computer vision applications, and 
              explainable machine learning systems.
            </p>

            <div class="flex flex-wrap gap-2.5 mb-8">
              <div class="badge-grade">
                <i data-lucide="award" class="w-4 h-4 text-sky-400"></i>
                <span>CGPA: ${profileData.cgpa}</span>
              </div>
              <div class="badge-tech">
                <i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-400"></i>
                <span>Graduation: May 2028</span>
              </div>
              <div class="badge-verified">
                <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i>
                <span>Red Hat & Agentic AI Certified</span>
              </div>
              <div class="badge-tech">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i>
                <span>${profileData.location}</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a href="${profileData.resumeUrl}" download="Shubhanshu_Manjare_Resume.pdf" class="btn-primary w-full sm:w-auto justify-center text-sm sm:text-base">
                <i data-lucide="file-down" class="w-5 h-5"></i>
                <span>Download Resume</span>
              </a>
              <a href="#projects" class="btn-secondary w-full sm:w-auto justify-center text-sm sm:text-base">
                <i data-lucide="folder-git-2" class="w-5 h-5 text-sky-400"></i>
                <span>View My Projects</span>
              </a>
              <a href="#contact" class="btn-outline w-full sm:w-auto justify-center text-sm sm:text-base py-3 px-5">
                <i data-lucide="mail" class="w-4 h-4"></i>
                <span>Contact Me</span>
              </a>
            </div>

            <div class="flex items-center gap-6 pt-6 border-t border-slate-800/80 w-full">
              <span class="text-xs uppercase tracking-wider text-slate-500 font-semibold">Direct Connect:</span>
              <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium">
                <i data-lucide="github" class="w-4 h-4"></i>
                <span>github.com/shubh658</span>
              </a>
              <a href="mailto:${profileData.email}" class="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5 text-sm font-medium">
                <i data-lucide="mail" class="w-4 h-4"></i>
                <span>Email</span>
              </a>
              <a href="tel:${profileData.phone}" class="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-sm font-medium">
                <i data-lucide="phone" class="w-4 h-4"></i>
                <span>${profileData.phone}</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-md">
              <div class="absolute -inset-1.5 bg-gradient-to-r from-sky-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-75"></div>
              <div class="relative glass-card p-6 sm:p-7 overflow-hidden border-slate-700/60">
                <div class="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span class="text-xs font-mono text-slate-500">engineer@shubhanshu:~</span>
                  <div class="w-6"></div>
                </div>

                <div class="flex items-center gap-4 mb-6">
                  <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-purple-600 p-[2px] shadow-lg shadow-sky-500/10">
                    <div class="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                      <span class="font-mono font-extrabold text-2xl sm:text-3xl text-sky-400">SM</span>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-white">${profileData.name}</h3>
                    <p class="text-xs text-sky-300 font-mono">B.Tech CSE Undergraduate</p>
                    <p class="text-xs text-slate-400 mt-0.5">Symbiosis Institute of Tech, Nagpur</p>
                  </div>
                </div>

                <div class="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-2 mb-6">
                  <div class="text-slate-500">// Candidate Placement Snapshot</div>
                  <div><span class="text-indigo-400">const</span> candidate = {</div>
                  <div class="pl-4"><span class="text-sky-300">cgpa</span>: <span class="text-emerald-400">7.0</span>,</div>
                  <div class="pl-4"><span class="text-sky-300">degree</span>: <span class="text-amber-300">"B.Tech CSE"</span>,</div>
                  <div class="pl-4"><span class="text-sky-300">gradYear</span>: <span class="text-emerald-400">2028</span>,</div>
                  <div class="pl-4"><span class="text-sky-300">credentials</span>: [<span class="text-amber-300">"RH124"</span>, <span class="text-amber-300">"DO457"</span>, <span class="text-amber-300">"Agentic AI"</span>],</div>
                  <div class="pl-4"><span class="text-sky-300">internship</span>: <span class="text-amber-300">"MainCraft Technologies"</span></div>
                  <div>};</div>
                </div>

                <div class="grid grid-cols-2 gap-3 pt-2">
                  ${profileData.stats.map(stat => `
                    <div class="bg-slate-900/60 rounded-xl p-3 border border-slate-800/60 text-center">
                      <div class="text-xl sm:text-2xl font-extrabold text-white gradient-text-alt">${stat.value}</div>
                      <div class="text-xs font-semibold text-slate-300 mt-0.5">${stat.label}</div>
                      <div class="text-[10px] text-slate-500">${stat.sub}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section id="about" class="py-20 sm:py-28 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col items-center text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <i data-lucide="user" class="w-3.5 h-3.5"></i>
            <span>Professional Profile</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span class="gradient-text">Me</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            Academic foundation, problem-solving mindset, and software engineering aspirations.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div class="lg:col-span-7 glass-card p-8 sm:p-10 flex flex-col justify-between">
            <div class="space-y-5 text-slate-300 text-base leading-relaxed">
              <h3 class="text-2xl font-bold text-white mb-2">
                Engineering Student with a Passion for Scalable Systems & Applied AI
              </h3>
              
              <p>
                I am currently pursuing my <strong class="text-white">B.Tech in Computer Science and Engineering</strong> at 
                <strong class="text-sky-400">${profileData.institution}</strong> (Graduation: May 2028, Cumulative GPA: <strong class="text-emerald-400">${profileData.cgpa}</strong>). 
                My academic journey combines thorough theoretical computer science with rigorous hands-on system building.
              </p>

              <p>
                Over the course of my engineering degree, I have explored key areas of technology—from low-level system design 
                in C and Linux systems administration (Red Hat RH124) to high-level machine learning interpretability (SHAP & LIME) 
                and full-stack web applications with Python FastAPI.
              </p>

              <p>
                During my industry internship at <strong class="text-white">MainCraft Technologies</strong>, I honed collaborative 
                engineering workflows, writing clean code, utilizing Git/GitHub for version control, and executing structured development cycles.
              </p>

              <div class="pt-4 border-t border-slate-800">
                <h4 class="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Core Engineering Focus Areas:</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div class="flex items-center gap-2 text-sm text-slate-200">
                    <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
                    <span>Scalable Backend & REST APIs</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-slate-200">
                    <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
                    <span>Explainable AI & ML Pipelines</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-slate-200">
                    <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
                    <span>Computer Vision & Biometrics</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-slate-200">
                    <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
                    <span>Linux SysAdmin & Automation</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-slate-800/80">
              <a href="${profileData.resumeUrl}" download="Shubhanshu_Manjare_Resume.pdf" class="btn-primary text-sm">
                <i data-lucide="download" class="w-4 h-4"></i>
                <span>Download Official Resume</span>
              </a>
              <a href="#contact" class="btn-secondary text-sm">
                <i data-lucide="send" class="w-4 h-4"></i>
                <span>Discuss Placement Opportunities</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-col gap-6">
            <div class="glass-card p-6 sm:p-7">
              <h4 class="text-base font-bold text-white flex items-center gap-2 mb-4">
                <i data-lucide="info" class="w-4 h-4 text-sky-400"></i>
                <span>Quick Academic Details</span>
              </h4>
              <dl class="space-y-3 text-sm">
                <div class="flex justify-between py-1.5 border-b border-slate-800/80">
                  <dt class="text-slate-400">Degree Program</dt>
                  <dd class="text-right font-semibold text-white">B.Tech in CSE</dd>
                </div>
                <div class="flex justify-between py-1.5 border-b border-slate-800/80">
                  <dt class="text-slate-400">Institute</dt>
                  <dd class="text-right font-semibold text-sky-400">SIT Nagpur</dd>
                </div>
                <div class="flex justify-between py-1.5 border-b border-slate-800/80">
                  <dt class="text-slate-400">Current CGPA</dt>
                  <dd class="text-right font-mono font-bold text-emerald-400">${profileData.cgpa}</dd>
                </div>
                <div class="flex justify-between py-1.5 border-b border-slate-800/80">
                  <dt class="text-slate-400">Graduation Year</dt>
                  <dd class="text-right font-mono font-semibold text-white">May 2028</dd>
                </div>
                <div class="flex justify-between py-1.5 border-b border-slate-800/80">
                  <dt class="text-slate-400">High School (12th)</dt>
                  <dd class="text-right font-mono font-semibold text-white">63.0% (Sarwashree Jr)</dd>
                </div>
                <div class="flex justify-between py-1.5">
                  <dt class="text-slate-400">Secondary (10th)</dt>
                  <dd class="text-right font-mono font-semibold text-white">77.0% (Sanskar Vidya)</dd>
                </div>
              </dl>
            </div>

            <div class="glass-card p-6 sm:p-7">
              <h4 class="text-base font-bold text-white flex items-center gap-2 mb-3">
                <i data-lucide="compass" class="w-4 h-4 text-purple-400"></i>
                <span>Hobbies & Personal Interests</span>
              </h4>
              <p class="text-xs text-slate-400 mb-4">
                Disciplines that reinforce analytical problem solving and focus:
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <div class="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <i data-lucide="car" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-slate-200">Automotive & Machine Tech</div>
                    <div class="text-xs text-slate-400">Passionate about vehicle mechanics & automotive technology</div>
                  </div>
                </div>

                <div class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <div class="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <i data-lucide="dumbbell" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-slate-200">Fitness & Gym Training</div>
                    <div class="text-xs text-slate-400">Dedicated discipline, consistency, and mental endurance</div>
                  </div>
                </div>

                <div class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <div class="w-9 h-9 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                    <i data-lucide="gamepad-2" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-slate-200">Strategy & Gaming</div>
                    <div class="text-xs text-slate-400">Strategic decision-making, reflex acuity, and problem solving</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

function renderEducation() {
  return `
    <section id="education" class="py-20 sm:py-28 relative bg-slate-950/40 border-y border-slate-800/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col items-center text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <i data-lucide="graduation-cap" class="w-3.5 h-3.5"></i>
            <span>Academic Background</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span class="gradient-text">Graduation Details</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            Verified academic performance across university degree, higher secondary, and secondary education.
          </p>
        </div>

        <div class="space-y-8 mb-20">
          ${educationData.map(edu => `
            <div class="glass-card p-6 sm:p-8 relative overflow-hidden transition-all hover:border-indigo-500/40">
              <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-sky-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 text-sky-400">
                    <i data-lucide="book-open" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <div class="flex flex-wrap items-center gap-2.5 mb-1">
                      <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        ${edu.badge}
                      </span>
                      <span class="text-xs text-slate-400 flex items-center gap-1 font-mono">
                        <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
                        ${edu.period}
                      </span>
                    </div>
                    <h3 class="text-xl sm:text-2xl font-bold text-white">${edu.degree}</h3>
                    <p class="text-sm font-semibold text-sky-400 mt-0.5">${edu.institution}</p>
                    <p class="text-xs text-slate-400 flex items-center gap-1 mt-1">
                      <i data-lucide="map-pin" class="w-3 h-3 text-slate-500"></i>
                      ${edu.location}
                    </p>
                  </div>
                </div>

                <div class="flex flex-col sm:items-end bg-slate-900/80 px-4 py-3 rounded-xl border border-slate-800 self-start sm:self-auto">
                  <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-400">${edu.scoreLabel}</span>
                  <span class="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">${edu.score}</span>
                  <span class="text-[10px] text-slate-500">${edu.status}</span>
                </div>
              </div>

              <div class="pt-4 border-t border-slate-800/80">
                <ul class="space-y-1.5 text-sm text-slate-300">
                  ${edu.highlights.map(h => `
                    <li class="flex items-start gap-2">
                      <i data-lucide="chevron-right" class="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5"></i>
                      <span>${h}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>

        <div>
          <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-800">
            <div>
              <h3 class="text-2xl font-bold text-white flex items-center gap-2">
                <i data-lucide="layers" class="w-5 h-5 text-sky-400"></i>
                <span>Computer Science Coursework</span>
              </h3>
              <p class="text-sm text-slate-400 mt-1">
                Foundational undergraduate subjects studied as part of the B.Tech CSE curriculum at SIT Nagpur.
              </p>
            </div>
            <span class="text-xs font-mono text-sky-400 mt-2 sm:mt-0 font-medium">14 Subjects Studied</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            ${courseworkData.map(course => `
              <div class="glass-card p-4 flex items-center gap-3 hover:border-sky-500/40 transition-colors">
                <div class="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <i data-lucide="${course.icon}" class="w-4 h-4"></i>
                </div>
                <div class="min-w-0">
                  <div class="text-sm font-semibold text-slate-100 truncate" title="${course.name}">
                    ${course.name}
                  </div>
                  <div class="text-xs text-slate-400">
                    ${course.category}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}

function renderSkills() {
  return `
    <section id="skills" class="py-20 sm:py-28 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col items-center text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <i data-lucide="cpu" class="w-3.5 h-3.5"></i>
            <span>Engineering Toolbox</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span class="gradient-text">Skills</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            Verified skills backed by completed software projects, university curriculum, and industry certifications.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${skillCategories.map(cat => `
            <div class="glass-card p-6 flex flex-col justify-between hover:border-indigo-500/30">
              <div>
                <div class="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
                  <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-white">${cat.title}</h3>
                    <span class="text-xs text-slate-500 font-mono">${cat.skills.length} competencies</span>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2 mb-4">
                  ${cat.skills.map(s => `
                    <div class="flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors w-full sm:w-auto flex-1 min-w-[140px]">
                      <span class="text-sm font-medium text-slate-200">${s.name}</span>
                      <span class="text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                        s.tag === 'Certified' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' :
                        s.tag === 'Primary' ? 'bg-indigo-950 text-indigo-300 border border-indigo-800' :
                        'bg-slate-800 text-slate-400'
                      }">
                        ${s.tag}
                      </span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <i data-lucide="check" class="w-4 h-4"></i>
            </div>
            <p class="text-xs text-slate-400">
              <strong class="text-slate-200">No fabricated percentages:</strong> 
              Every technology listed corresponds directly to tested coursework, verified repository commits, or authenticated credentials.
            </p>
          </div>
          <a href="#certifications" class="text-xs font-semibold text-sky-400 hover:underline flex items-center gap-1 flex-shrink-0">
            <span>Inspect Certifications</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </a>
        </div>

      </div>
    </section>
  `;
}

function renderProjects() {
  return `
    <section id="projects" class="py-20 sm:py-28 relative bg-slate-950/40 border-y border-slate-800/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col items-center text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <i data-lucide="folder-code" class="w-3.5 h-3.5"></i>
            <span>Featured Engineering Work</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Software & AI <span class="gradient-text">Projects</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            Real implementations solving actual problems across intelligent triage, explainable healthcare AI, embedded systems, and biometric automation.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${projectsData.map(project => `
            <div class="glass-card flex flex-col justify-between overflow-hidden group ${project.featured ? 'border-sky-500/30' : ''}">
              <div class="p-6 sm:p-7 flex flex-col flex-1">
                <div class="flex items-center justify-between gap-2 mb-3">
                  <span class="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
                    ${project.category}
                  </span>
                  ${project.featured ? `
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-800 uppercase tracking-wider">
                      Featured
                    </span>
                  ` : ''}
                </div>

                <h3 class="text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
                  ${project.title}
                </h3>
                <p class="text-xs text-slate-400 font-mono mb-4">
                  ${project.subtitle}
                </p>

                <p class="text-sm text-slate-300 font-medium mb-4 leading-snug">
                  ${project.tagline}
                </p>

                <p class="text-xs text-slate-400 mb-6 leading-relaxed line-clamp-3">
                  ${project.description}
                </p>

                <div class="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-800/80">
                  ${project.tech.map(t => `
                    <span class="badge-tech text-[11px]">${t}</span>
                  `).join('')}
                </div>
              </div>

              <div class="px-6 py-4 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between gap-3">
                <button type="button" class="btn-project-details text-xs font-semibold text-sky-400 hover:text-white transition-colors flex items-center gap-1.5" data-project-id="${project.id}">
                  <i data-lucide="eye" class="w-4 h-4"></i>
                  <span>Architecture & Details</span>
                </button>

                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-xs font-medium" title="GitHub Repository">
                  <i data-lucide="github" class="w-4 h-4"></i>
                  <span>Code</span>
                </a>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="mt-14 text-center">
          <a href="https://github.com/shubh658" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-sky-400 transition-colors">
            <i data-lucide="github" class="w-4 h-4"></i>
            <span>Browse all repositories & project commits on GitHub (@shubh658)</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        </div>

      </div>
    </section>
  `;
}

function renderCertificates() {
  return `
    <section id="certifications" class="py-20 sm:py-28 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col items-center text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
            <span>Verified Credentials</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span class="gradient-text">Certifications</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            Verified technical credentials and industry certifications backed by official PDF documents and authentic Credly verification badges.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${certificatesData.map(cert => `
            <div class="glass-card flex flex-col justify-between overflow-hidden group hover:border-emerald-500/40">
              <div class="p-6 sm:p-7 flex flex-col flex-1">
                <div class="flex items-center justify-between gap-2 mb-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-mono font-bold text-xs ${
                      cert.issuer.includes('Red Hat') ? 'text-red-400' :
                      cert.issuer.includes('Udemy') ? 'text-purple-400' : 'text-sky-400'
                    }">
                      ${cert.issuer.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <span class="text-xs font-bold text-slate-200 block">${cert.issuer}</span>
                      <span class="text-[11px] text-slate-400 font-mono">${cert.date}</span>
                    </div>
                  </div>

                  ${cert.verified ? `
                    <span class="badge-verified">
                      <i data-lucide="badge-check" class="w-3.5 h-3.5"></i>
                      <span>Verified</span>
                    </span>
                  ` : ''}
                </div>

                <h3 class="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  ${cert.title}
                </h3>

                <div class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400 font-mono mb-3">
                  <span class="flex items-center gap-1">
                    <i data-lucide="clock" class="w-3 h-3 text-slate-500"></i>
                    ${cert.duration}
                  </span>
                  ${cert.credentialId ? `
                    <span class="flex items-center gap-1 truncate max-w-[200px]" title="ID: ${cert.credentialId}">
                      <i data-lucide="hash" class="w-3 h-3 text-slate-500"></i>
                      ${cert.credentialId}
                    </span>
                  ` : ''}
                </div>

                <p class="text-xs text-slate-300 mb-5 leading-relaxed">
                  ${cert.description}
                </p>

                <div class="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-slate-800/80">
                  ${cert.skills.map(s => `
                    <span class="badge-tech text-[10px]">${s}</span>
                  `).join('')}
                </div>
              </div>

              <div class="px-6 py-4 bg-slate-900/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2.5">
                <div class="flex items-center gap-2">
                  ${cert.pdfUrl ? `
                    <a href="${cert.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline text-xs py-1.5 px-3">
                      <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
                      <span>View PDF</span>
                    </a>
                    <a href="${cert.pdfUrl}" download="${cert.id}.pdf" class="text-slate-400 hover:text-white p-1.5 rounded hover:bg-slate-800 transition-colors" title="Download PDF File">
                      <i data-lucide="download" class="w-4 h-4"></i>
                    </a>
                  ` : ''}
                </div>

                ${cert.verifyUrl ? `
                  <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                    <span>Verify Credential</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                  </a>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderExperience() {
  return `
    <section id="experience" class="py-20 sm:py-28 relative bg-slate-950/40 border-y border-slate-800/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col items-center text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <i data-lucide="briefcase" class="w-3.5 h-3.5"></i>
            <span>Professional Trajectory</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span class="gradient-text">Accomplishments</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            Practical software engineering internship, technical deliverables, and verified academic distinctions.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div class="lg:col-span-7 space-y-6">
            <div class="flex items-center gap-2 mb-2">
              <h3 class="text-xl font-bold text-white flex items-center gap-2">
                <i data-lucide="building" class="w-5 h-5 text-sky-400"></i>
                <span>Practical & Industry Experience</span>
              </h3>
            </div>

            <div class="space-y-6">
              ${experienceData.map(exp => `
                <div class="glass-card p-6 sm:p-7 relative overflow-hidden hover:border-sky-500/30">
                  <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div class="flex items-center gap-2 mb-1">
                        <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-sky-300 border border-slate-700">
                          ${exp.badge}
                        </span>
                        <span class="text-xs text-slate-400 font-mono">${exp.period}</span>
                      </div>
                      <h4 class="text-xl font-bold text-white">${exp.role}</h4>
                      <p class="text-sm font-semibold text-sky-400 mt-0.5">${exp.organization}</p>
                      <p class="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <i data-lucide="map-pin" class="w-3 h-3"></i>
                        ${exp.location} • ${exp.type}
                      </p>
                    </div>

                    <div class="flex items-center gap-2 self-start">
                      ${exp.certificateUrl ? `
                        <a href="${exp.certificateUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline text-xs py-1 px-2.5 flex items-center gap-1" title="View Internship Certificate">
                          <i data-lucide="file-check" class="w-3.5 h-3.5"></i>
                          <span>Internship Cert</span>
                        </a>
                      ` : ''}
                      ${exp.lorUrl ? `
                        <a href="${exp.lorUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline text-xs py-1 px-2.5 flex items-center gap-1 text-purple-400 border-purple-500/30 hover:border-purple-400" title="View Letter of Recommendation">
                          <i data-lucide="award" class="w-3.5 h-3.5"></i>
                          <span>View LOR</span>
                        </a>
                      ` : ''}
                    </div>
                  </div>

                  <p class="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                    ${exp.summary}
                  </p>

                  <ul class="space-y-1.5 text-xs sm:text-sm text-slate-300 mb-5">
                    ${exp.responsibilities.map(r => `
                      <li class="flex items-start gap-2">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5"></i>
                        <span>${r}</span>
                      </li>
                    `).join('')}
                  </ul>

                  <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                    ${exp.tech.map(t => `
                      <span class="badge-tech text-[10px]">${t}</span>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="lg:col-span-5 space-y-6">
            <div class="flex items-center gap-2 mb-2">
              <h3 class="text-xl font-bold text-white flex items-center gap-2">
                <i data-lucide="trophy" class="w-5 h-5 text-amber-400"></i>
                <span>Key Accomplishments</span>
              </h3>
            </div>

            <div class="space-y-4">
              ${achievementsData.map(item => `
                <div class="glass-card p-5 hover:border-amber-500/30 transition-all">
                  <div class="flex items-start justify-between gap-2 mb-2">
                    <span class="text-xs font-mono font-semibold text-amber-400">${item.category}</span>
                    <span class="text-xs text-slate-500 font-mono">${item.date}</span>
                  </div>
                  <h4 class="text-base font-bold text-white mb-1">${item.title}</h4>
                  <p class="text-xs text-slate-400 font-medium mb-2">${item.issuer}</p>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    ${item.description}
                  </p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

function renderResume() {
  return `
    <section id="resume" class="py-20 sm:py-28 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col items-center text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
            <span>Curriculum Vitae</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Official <span class="gradient-text">Resume / CV</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            Verified academic summary, technical projects, industry credentials, and engineering experience prepared for campus placement drives.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div class="lg:col-span-5 space-y-6">
            <div class="glass-card p-6 sm:p-8">
              <div class="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                <div class="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <i data-lucide="file-check" class="w-7 h-7"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white">Shubhanshu Manjare</h3>
                  <p class="text-xs text-sky-400 font-mono">B.Tech CSE • SIT Nagpur</p>
                  <p class="text-xs text-slate-400 mt-0.5">Updated October 2026</p>
                </div>
              </div>

              <div class="space-y-3 mb-8 text-sm">
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Resume Contents:</h4>
                <div class="flex items-center gap-2.5 text-slate-300">
                  <i data-lucide="check" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
                  <span>B.Tech in CSE @ SIT Nagpur (CGPA 7.0/10.0)</span>
                </div>
                <div class="flex items-center gap-2.5 text-slate-300">
                  <i data-lucide="check" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
                  <span>5 Projects: Agentic AI, XAI, IoT Traffic, Biometrics</span>
                </div>
                <div class="flex items-center gap-2.5 text-slate-300">
                  <i data-lucide="check" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
                  <span>Dual Red Hat (RH124 & DO457) & Udemy Certifications</span>
                </div>
                <div class="flex items-center gap-2.5 text-slate-300">
                  <i data-lucide="check" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
                  <span>Software Engineering Internship @ MainCraft Technologies</span>
                </div>
                <div class="flex items-center gap-2.5 text-slate-300">
                  <i data-lucide="check" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
                  <span>Verified Contact Details & GitHub Repository links</span>
                </div>
              </div>

              <div class="flex flex-col gap-3">
                <a href="${profileData.resumeUrl}" download="Shubhanshu_Manjare_Resume.pdf" class="btn-primary justify-center text-sm py-3 shadow-indigo-500/30">
                  <i data-lucide="download" class="w-4 h-4"></i>
                  <span>Download Resume (PDF)</span>
                </a>
                
                <a href="${profileData.resumeUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary justify-center text-sm py-3">
                  <i data-lucide="external-link" class="w-4 h-4 text-sky-400"></i>
                  <span>Open PDF in New Browser Tab</span>
                </a>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-slate-300 space-y-2">
              <div class="flex items-center gap-2 font-bold text-sky-300">
                <i data-lucide="zap" class="w-4 h-4 text-amber-400"></i>
                <span>Direct Placement Drive Note</span>
              </div>
              <p class="leading-relaxed">
                Recruiters and hiring coordinators may immediately download or view the uncompressed original document above without login or credentials.
              </p>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="glass-card overflow-hidden border-slate-700/80 shadow-2xl">
              <div class="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span class="text-xs font-mono text-slate-400 ml-2">Shubhanshu_Manjare_Resume.pdf</span>
                </div>
                <div class="flex items-center gap-3">
                  <a href="${profileData.resumeUrl}" target="_blank" rel="noopener noreferrer" class="text-xs text-sky-400 hover:text-sky-300 font-mono flex items-center gap-1">
                    <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
                    <span>Expand</span>
                  </a>
                </div>
              </div>

              <div class="relative w-full h-[620px] bg-slate-950 flex flex-col items-center justify-center">
                <object 
                  data="${profileData.resumeUrl}#toolbar=0&navpanes=0&scrollbar=1" 
                  type="application/pdf" 
                  class="w-full h-full"
                >
                  <div class="p-8 text-center max-w-md">
                    <div class="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-sky-400 mx-auto mb-4">
                      <i data-lucide="file-text" class="w-8 h-8"></i>
                    </div>
                    <h4 class="text-base font-bold text-white mb-2">Resume PDF Preview</h4>
                    <p class="text-xs text-slate-400 mb-6">
                      Your browser is ready to view the complete two-page curriculum vitae.
                    </p>
                    <a href="${profileData.resumeUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs py-2 px-4 justify-center">
                      <i data-lucide="external-link" class="w-4 h-4"></i>
                      <span>Open PDF in Full Screen</span>
                    </a>
                  </div>
                </object>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section id="contact" class="py-20 sm:py-28 relative bg-slate-950/40 border-t border-slate-800/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col items-center text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <i data-lucide="mail" class="w-3.5 h-3.5"></i>
            <span>Placement & Outreach</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in <span class="gradient-text">Touch</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            Reach out regarding campus placements, software development roles, or technical collaborations.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div class="lg:col-span-5 space-y-6">
            <div class="glass-card p-6 sm:p-8">
              <h3 class="text-xl font-bold text-white mb-2">Contact Details</h3>
              <p class="text-xs text-slate-400 mb-6">
                Feel free to email, call, or review my active code repositories.
              </p>

              <div class="space-y-4">
                <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 flex-shrink-0">
                      <i data-lucide="mail" class="w-5 h-5"></i>
                    </div>
                    <div class="min-w-0">
                      <div class="text-xs text-slate-400 font-medium">Email Address</div>
                      <a href="mailto:${profileData.email}" class="text-sm font-semibold text-white hover:text-sky-400 transition-colors truncate block">
                        ${profileData.email}
                      </a>
                    </div>
                  </div>
                  <button type="button" class="btn-copy p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" data-copy="${profileData.email}" title="Copy Email">
                    <i data-lucide="copy" class="w-4 h-4"></i>
                  </button>
                </div>

                <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                      <i data-lucide="phone" class="w-5 h-5"></i>
                    </div>
                    <div class="min-w-0">
                      <div class="text-xs text-slate-400 font-medium">Direct Telephone</div>
                      <a href="tel:${profileData.phone}" class="text-sm font-semibold text-white hover:text-emerald-400 transition-colors truncate block">
                        ${profileData.phone}
                      </a>
                    </div>
                  </div>
                  <button type="button" class="btn-copy p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" data-copy="${profileData.phone}" title="Copy Phone Number">
                    <i data-lucide="copy" class="w-4 h-4"></i>
                  </button>
                </div>

                <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                      <i data-lucide="github" class="w-5 h-5"></i>
                    </div>
                    <div class="min-w-0">
                      <div class="text-xs text-slate-400 font-medium">GitHub Repository</div>
                      <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-white hover:text-purple-400 transition-colors truncate block">
                        github.com/${profileData.githubUsername}
                      </a>
                    </div>
                  </div>
                  <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" title="Open GitHub">
                    <i data-lucide="external-link" class="w-4 h-4"></i>
                  </a>
                </div>

                <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <i data-lucide="map-pin" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <div class="text-xs text-slate-400 font-medium">Location & Relocation</div>
                    <div class="text-sm font-semibold text-white">
                      ${profileData.location} <span class="text-xs text-slate-400 font-normal">(Open to pan-India relocation)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="glass-card p-6 sm:p-8">
              <h3 class="text-xl font-bold text-white mb-2">Send a Recruitment Message</h3>
              <p class="text-xs text-slate-400 mb-6">
                Fill out the form below. Submitting will validate your fields and open your default email client with a pre-formatted message addressed directly to Shubhanshu.
              </p>

              <form id="contact-form" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="contact-name" class="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name / Recruiter Name *
                    </label>
                    <input 
                      type="text" 
                      id="contact-name" 
                      required 
                      placeholder="e.g. Talent Acquisition Team"
                      class="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                    >
                  </div>

                  <div>
                    <label for="contact-email" class="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Work Email *
                    </label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      required 
                      placeholder="recruiter@company.com"
                      class="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                    >
                  </div>
                </div>

                <div>
                  <label for="contact-subject" class="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject / Role Title *
                  </label>
                  <input 
                    type="text" 
                    id="contact-subject" 
                    required 
                    placeholder="e.g. Campus Placement Interview / SDE Role Opportunity"
                    class="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                  >
                </div>

                <div>
                  <label for="contact-message" class="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message Details *
                  </label>
                  <textarea 
                    id="contact-message" 
                    rows="4" 
                    required 
                    placeholder="Provide details about the company, interview schedule, job description, or inquiry..."
                    class="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-y"
                  ></textarea>
                </div>

                <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button type="submit" class="btn-primary w-full sm:w-auto justify-center text-sm py-2.5 px-6">
                    <i data-lucide="send" class="w-4 h-4"></i>
                    <span>Generate & Send Message</span>
                  </button>
                  <span class="text-[11px] text-slate-500">
                    Direct delivery to shubhumanjare@gmail.com
                  </span>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

function renderFooter() {
  const currentYear = new Date().getFullYear();
  return `
    <footer class="py-12 bg-slate-950 border-t border-slate-900 text-slate-400">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-400 p-[1.5px]">
              <div class="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                <span class="font-mono font-bold text-sky-400 text-xs">SM</span>
              </div>
            </div>
            <div>
              <p class="text-sm font-bold text-white">${profileData.name}</p>
              <p class="text-xs text-slate-500">${profileData.degree} • ${profileData.institution}</p>
            </div>
          </div>

          <div class="flex items-center gap-6 text-xs text-slate-400">
            <a href="#hero" class="hover:text-white transition-colors">Home</a>
            <a href="#about" class="hover:text-white transition-colors">About</a>
            <a href="#projects" class="hover:text-white transition-colors">Projects</a>
            <a href="#certifications" class="hover:text-white transition-colors">Certifications</a>
            <a href="#resume" class="hover:text-white transition-colors">Resume</a>
            <a href="#contact" class="hover:text-white transition-colors">Contact</a>
          </div>

          <div class="flex items-center gap-4">
            <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors" title="GitHub">
              <i data-lucide="github" class="w-4 h-4"></i>
            </a>
            <a href="mailto:${profileData.email}" class="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-colors" title="Email">
              <i data-lucide="mail" class="w-4 h-4"></i>
            </a>
            <button type="button" id="btn-back-to-top" class="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors" title="Back to Top">
              <i data-lucide="arrow-up" class="w-4 h-4"></i>
            </button>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          <p>© ${currentYear} ${profileData.name}. All rights reserved. Engineering placement portfolio.</p>
        </div>
      </div>
    </footer>
  `;
}

// Master Mounting & Event Setup
function initApp() {
  const app = document.getElementById('app');
  if (!app) return;

  try {
    app.innerHTML = `
      ${renderNavbar()}
      <main>
        ${renderHero()}
        ${renderAbout()}
        ${renderEducation()}
        ${renderSkills()}
        ${renderProjects()}
        ${renderCertificates()}
        ${renderExperience()}
        ${renderResume()}
        ${renderContact()}
      </main>
      ${renderFooter()}

      <!-- Project Architecture Modal Container -->
      <div id="project-modal" class="modal-backdrop" aria-hidden="true" role="dialog">
        <div class="modal-container p-6 sm:p-8 relative">
          <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-indigo-500"></span>
              <span id="modal-category" class="text-xs font-mono uppercase text-sky-400 font-semibold"></span>
            </div>
            <button id="modal-close-btn" type="button" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" aria-label="Close Dialog">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>
          
          <div id="modal-content" class="overflow-y-auto max-h-[70vh] pr-2 space-y-4">
            <!-- Populated dynamically via JS -->
          </div>
        </div>
      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons();
    }

    setupMobileNavigation();
    setupScrollSpy();
    setupCopyButtons();
    setupProjectModals();
    setupContactForm();
    setupBackToTop();
  } catch (err) {
    console.error('Portfolio initialization error:', err);
  }
}

function setupMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      iconOpen?.classList.add('hidden');
      iconClose?.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
      iconOpen?.classList.remove('hidden');
      iconClose?.classList.add('hidden');
    }
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      iconOpen?.classList.remove('hidden');
      iconClose?.classList.add('hidden');
    });
  });
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-sky-400', 'bg-slate-800/80');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('text-sky-400', 'bg-slate-800/80');
      }
    });
  }, { passive: true });
}

function setupCopyButtons() {
  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget;
      const textToCopy = target.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
      }).catch(() => {
        showToast('Failed to copy to clipboard', 'info');
      });
    });
  });
}

function setupProjectModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalCategory = document.getElementById('modal-category');
  const modalContent = document.getElementById('modal-content');

  if (!modal || !modalContent) return;

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  document.querySelectorAll('.btn-project-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projectId = e.currentTarget.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id === projectId);
      if (!project) return;

      modalCategory.textContent = `${project.category} • Architecture Breakdown`;
      modalContent.innerHTML = `
        <h3 class="text-2xl font-bold text-white mb-1">${project.title}</h3>
        <p class="text-xs text-sky-400 font-mono mb-4">${project.subtitle} • Role: ${project.role}</p>
        
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 mb-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-rose-400">Problem Statement:</h4>
          <p class="text-sm text-slate-300 leading-relaxed">${project.problemStatement}</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 mb-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400">Engineering Solution:</h4>
          <p class="text-sm text-slate-300 leading-relaxed">${project.solution}</p>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Architectural Capabilities:</h4>
          <ul class="space-y-2 text-sm text-slate-300">
            ${project.keyFeatures.map(feat => `
              <li class="flex items-start gap-2">
                <i data-lucide="check-circle" class="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5"></i>
                <span>${feat}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap gap-1.5">
            ${project.tech.map(t => `<span class="badge-tech text-xs">${t}</span>`).join('')}
          </div>
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs py-2 px-4">
            <i data-lucide="github" class="w-4 h-4"></i>
            <span>View Repository</span>
          </a>
        </div>
      `;

      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');

      if (window.lucide) {
        window.lucide.createIcons({ root: modalContent });
      }
    });
  });
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !subject || !message) {
      showToast('Please fill out all required fields.', 'info');
      return;
    }

    const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
    const emailBody = encodeURIComponent(
      `Candidate Inquiry for Shubhanshu Manjare:\n\n` +
      `Sender Name: ${name}\n` +
      `Contact Email: ${email}\n` +
      `Subject: ${subject}\n\n` +
      `Message Details:\n${message}\n\n` +
      `--\nSent from Portfolio Website Placement Form`
    );

    const mailtoUrl = `mailto:${profileData.email}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoUrl;

    showToast('Email client opened with pre-filled message! Message sent.', 'success');
    form.reset();
  });
}

function setupBackToTop() {
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Start application immediately
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
