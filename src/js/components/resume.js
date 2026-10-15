import { profileData } from '../data/profile.js';

export function renderResume() {
  return `
    <section id="resume" class="py-20 sm:py-28 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
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
          
          <!-- Left Column: Resume Highlights & Download Actions -->
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

              <!-- Content Breakdown -->
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

              <!-- Action Buttons -->
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

            <!-- Recruiter Fast-Track Info -->
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

          <!-- Right Column: Interactive In-Browser PDF Preview Frame -->
          <div class="lg:col-span-7">
            <div class="glass-card overflow-hidden border-slate-700/80 shadow-2xl">
              
              <!-- Frame Header -->
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

              <!-- Embedded PDF Object / Fallback Frame -->
              <div class="relative w-full h-[620px] bg-slate-950 flex flex-col items-center justify-center">
                <object 
                  data="${profileData.resumeUrl}#toolbar=0&navpanes=0&scrollbar=1" 
                  type="application/pdf" 
                  class="w-full h-full"
                >
                  <!-- Fallback if browser inline PDF display is blocked -->
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
