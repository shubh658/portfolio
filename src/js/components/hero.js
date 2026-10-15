import { profileData } from '../data/profile.js';

export function renderHero() {
  return `
    <section id="hero" class="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-36 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: Core Introduction -->
          <div class="lg:col-span-7 flex flex-col items-start text-left">
            
            <!-- Placement Ready Pill -->
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Campus Placement & Software Engineering Roles</span>
            </div>

            <!-- Full Name Heading -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              Hi, I'm <span class="gradient-text">${profileData.name}</span>
            </h1>

            <!-- Professional Headline -->
            <p class="text-xl sm:text-2xl font-semibold text-sky-400 mb-4">
              ${profileData.role}
            </p>

            <!-- Short Background Bio -->
            <p class="text-base sm:text-lg text-slate-300 max-w-2xl mb-6 leading-relaxed">
              Pursuing <strong class="text-white">B.Tech in Computer Science & Engineering</strong> at 
              <strong class="text-white">${profileData.institution}</strong>. 
              Passionate about building scalable backend architectures, real-time computer vision applications, and 
              explainable machine learning systems.
            </p>

            <!-- Quick Academic & Certification Chips -->
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

            <!-- Action Buttons -->
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

            <!-- Social and Direct Contact Strip -->
            <div class="flex items-center gap-6 pt-6 border-t border-slate-800/80 w-full">
              <span class="text-xs uppercase tracking-wider text-slate-500 font-semibold">Direct Connect:</span>
              
              <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium" title="GitHub Profile">
                <i data-lucide="github" class="w-4 h-4"></i>
                <span>github.com/shubh658</span>
              </a>

              <a href="mailto:${profileData.email}" class="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5 text-sm font-medium" title="Send Email">
                <i data-lucide="mail" class="w-4 h-4"></i>
                <span>Email</span>
              </a>

              <a href="tel:${profileData.phone}" class="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-sm font-medium" title="Direct Phone">
                <i data-lucide="phone" class="w-4 h-4"></i>
                <span>${profileData.phone}</span>
              </a>
            </div>

          </div>

          <!-- Right Column: Visual Profile Card & Placement Highlights -->
          <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-md">
              
              <!-- Subtle glow background element -->
              <div class="absolute -inset-1.5 bg-gradient-to-r from-sky-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-75"></div>
              
              <!-- Terminal Styled Profile Card -->
              <div class="relative glass-card p-6 sm:p-7 overflow-hidden border-slate-700/60">
                
                <!-- Terminal Window Bar -->
                <div class="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span class="text-xs font-mono text-slate-500">engineer@shubhanshu:~</span>
                  <div class="w-6"></div>
                </div>

                <!-- Profile Monogram / Visual Badge -->
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

                <!-- Code / Verification Block -->
                <div class="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-2 mb-6">
                  <div class="text-slate-500">// Candidate Snapshot</div>
                  <div><span class="text-indigo-400">const</span> candidate = {</div>
                  <div class="pl-4"><span class="text-sky-300">cgpa</span>: <span class="text-emerald-400">7.0</span>,</div>
                  <div class="pl-4"><span class="text-sky-300">degree</span>: <span class="text-amber-300">"B.Tech CSE"</span>,</div>
                  <div class="pl-4"><span class="text-sky-300">gradYear</span>: <span class="text-emerald-400">2028</span>,</div>
                  <div class="pl-4"><span class="text-sky-300">credentials</span>: [<span class="text-amber-300">"RH124"</span>, <span class="text-amber-300">"DO457"</span>, <span class="text-amber-300">"Agentic AI"</span>],</div>
                  <div class="pl-4"><span class="text-sky-300">internship</span>: <span class="text-amber-300">"MainCraft Technologies"</span></div>
                  <div>};</div>
                </div>

                <!-- 4 Metrics Grid -->
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
