import { skillCategories } from '../data/skills.js';

export function renderSkills() {
  return `
    <section id="skills" class="py-20 sm:py-28 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
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

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${skillCategories.map(cat => `
            <div class="glass-card p-6 flex flex-col justify-between hover:border-indigo-500/30">
              
              <div>
                <!-- Category Title -->
                <div class="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
                  <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-white">${cat.title}</h3>
                    <span class="text-xs text-slate-500 font-mono">${cat.skills.length} competencies</span>
                  </div>
                </div>

                <!-- Skills Badges / Chips -->
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

        <!-- Verified Credential Footnote -->
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
