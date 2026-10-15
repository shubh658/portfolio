import { profileData } from '../data/profile.js';

export function renderAbout() {
  return `
    <section id="about" class="py-20 sm:py-28 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
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

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          <!-- Left: Narrative Card -->
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

            <!-- Download and Contact Buttons inside About -->
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

          <!-- Right: Quick Facts & Interests Cards -->
          <div class="lg:col-span-5 flex flex-col gap-6">
            
            <!-- Quick Facts Card -->
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

            <!-- Beyond The Code / Personal Interests -->
            <div class="glass-card p-6 sm:p-7">
              <h4 class="text-base font-bold text-white flex items-center gap-2 mb-3">
                <i data-lucide="compass" class="w-4 h-4 text-purple-400"></i>
                <span>Hobbies & Personal Interests</span>
              </h4>
              <p class="text-xs text-slate-400 mb-4">
                Disciplines and personal pursuits that complement my analytical mindset:
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
