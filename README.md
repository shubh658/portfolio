# Shubhanshu Manjare — Professional Placement Portfolio

A modern, high-performance personal portfolio website built for **Shubhanshu Manjare**, Computer Science Engineering student at **Symbiosis Institute of Technology (SIT), Nagpur**.

Designed specifically for **engineering campus placement drives**, IT recruitment teams, product companies, and technical hiring managers.

---

## 🌟 Candidate Snapshot

- **Full Name**: Shubhanshu Manjare
- **Institution**: Symbiosis Institute of Technology (SIT), Nagpur
- **Degree**: Bachelor of Technology (B.Tech) in Computer Science & Engineering
- **Expected Graduation**: May 2028
- **Cumulative GPA**: **7.0 / 10.0**
- **Higher Secondary (12th)**: 63.0% (Sarwashree Jr College, Nagpur)
- **Secondary School (10th)**: 77.0% (Sanskar Vidya Sagar School, Nagpur)
- **Primary Tech Stack**: Python, C, Java, JavaScript, MySQL, Linux, Git/GitHub, FastAPI
- **Key Industry Certifications**:
  - Red Hat System Administration I (RH124) — Credly Verified
  - Network Automation with Red Hat Ansible (DO457) — Credly Verified
  - Python Programming with Red Hat (AD141)
  - Mastering Agentic AI: From Prompt to Protocols to Production (Udemy)
- **Industry Experience**: Software Engineering Intern @ MainCraft Technologies (Certificate & LOR)

---

## 🚀 Quick Start (Run Locally)

Because this website uses modern native ES6 modules, semantic HTML5, and Tailwind CSS, you can run it immediately with Python (already installed on your PC):

### Option 1: Using Python's Built-in HTTP Server (Recommended)
Open PowerShell or Command Prompt in the `portfolio` folder:

```powershell
python -m http.server 3000
```

Now open your web browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

### Option 2: Using VS Code Live Server
1. Open this `portfolio` folder in VS Code (`code .`).
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 📁 Project Architecture

```text
portfolio/
├── index.html                  # Master entry point with dark navy aesthetic & SEO tags
├── favicon.svg                 # Custom SVG engineering monogram
├── README.md                   # Documentation & maintenance guide
├── public/
│   ├── resume.pdf              # Real official resume PDF (download & preview target)
│   ├── assets/                 # Backup of resume document
│   └── certificates/           # Authentic PDF certificates & letters
│       ├── udemy-agentic-ai.pdf
│       ├── maincrafts-internship.pdf
│       └── maincrafts-lor.pdf
└── src/
    ├── css/
    │   └── styles.css          # Master stylesheet, glassmorphism, buttons, animations
    ├── data/
    │   ├── profile.js          # Personal details, CGPA, links, stats, bio
    │   ├── education.js        # SIT Nagpur, Sarwashree Jr, Sanskar Vidya & coursework
    │   ├── skills.js           # Categorized technical skills & tools
    │   ├── projects.js         # 5 verified projects (triage agent, CVD XAI, traffic, etc.)
    │   ├── certificates.js     # Certification entries with PDF links & Credly URLs
    │   └── experience.js       # MainCraft internship & academic leadership
    └── js/
        ├── app.js              # State management, section mounting & interactions
        ├── components/
        │   ├── navbar.js       # Responsive sticky navigation with mobile drawer
        │   ├── hero.js         # Recruiter-focused hero section with CTAs
        │   ├── about.js        # Professional narrative, academic highlights, interests
        │   ├── education.js    # Academic timeline & 14 foundational CS courses
        │   ├── skills.js       # Skills grid with proficiency indicators
        │   ├── projects.js     # Project cards with interactive architecture modal
        │   ├── certificates.js # Cards with working "View PDF", "Download", "Verify"
        │   ├── experience.js   # Internship responsibilities, LOR & certificate links
        │   ├── resume.js       # In-browser PDF preview and direct download
        │   ├── contact.js      # Direct email/phone copy & pre-filled contact form
        │   └── footer.js       # Engineering footer with back-to-top button
        └── utils/
            └── toast.js        # Smooth clipboard & notification toast
```

---

## ✏️ Maintenance & Updates

### 1. Updating Your Resume PDF
When you update your resume:
1. Export your new resume as a PDF file named `resume.pdf`.
2. Replace `public/resume.pdf` with your new file.
3. Done! The "Download Resume", "View Resume", and in-browser preview will automatically serve your new version.

### 2. Adding a New Certificate
1. Place the certificate PDF into `public/certificates/your-certificate-name.pdf`.
2. Open `src/data/certificates.js` and add a new entry:
```javascript
{
  id: "your-cert-id",
  title: "Course or Certification Name",
  issuer: "Issuing Organization",
  date: "Month Year",
  duration: "XX Hours",
  credentialId: "Optional ID",
  verifyUrl: "https://your-verification-link.com",
  pdfUrl: "./public/certificates/your-certificate-name.pdf",
  verified: true,
  category: "Domain / Category",
  skills: ["Skill 1", "Skill 2"],
  description: "Brief summary of what you learned."
}
```

### 3. Adding or Updating Projects
Open `src/data/projects.js` and modify or append project entries. You can update the problem statement, key features, or add repository URLs.

### 4. Updating CGPA or Academic Marks
Open `src/data/profile.js` and `src/data/education.js` and adjust the `cgpa` or semester scores.

---

## 🌐 Deploying to the Web

### Deploying with GitHub Pages (Free)
1. Push this folder to your GitHub repository (e.g. `shubh658/portfolio`).
2. Go to **Repository Settings** > **Pages**.
3. Under **Build and deployment**, select **Source: Deploy from a branch** and choose `main` branch `/ (root)`.
4. Click **Save**. Your website will be live in 1-2 minutes at:
   `https://shubh658.github.io/portfolio/`

### Deploying with Vercel or Netlify (Free)
1. Connect your GitHub repository to Vercel or Netlify.
2. Build Settings: None needed! Root directory is `./`.
3. Click **Deploy**. Your custom link will be live instantly with HTTPS and CDN distribution.

---

## 📄 License & Ownership
Created for **Shubhanshu Manjare**. All academic records, projects, and certifications are genuine and verified.
