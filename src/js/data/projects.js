export const projectsData = [
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
    solution: "Interfaced sensor arrays with an embedded microcontroller controller running an adaptive Python timing algorithm that continuously evaluates vehicle density and allocates proportional green-light duration to the most congested corridor.",
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
