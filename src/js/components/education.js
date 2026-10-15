import { educationData, courseworkData } from '../data/education.js';

export function renderEducation() {
  return `
    <section id="education" class="py-20 sm:py-28 relative bg-slate-950/40 border-y border-slate-800/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
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

        <!-- Academic Timeline / Cards -->
        <div class="space-y-8 mb-20">
          ${educationData.map((edu, idx) => `
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

                <!-- Academic Score Badge -->
                <div class="flex flex-col sm:items-end bg-slate-900/80 px-4 py-3 rounded-xl border border-slate-800 self-start sm:self-auto">
                  <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-400">${edu.scoreLabel}</span>
                  <span class="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">${edu.score}</span>
                  <span class="text-[10px] text-slate-500">${edu.status}</span>
                </div>

              </div>

              <!-- Highlights -->
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

        <!-- Rigorous Core Coursework Grid -->
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
