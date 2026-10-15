import { experienceData, achievementsData } from '../data/experience.js';

export function renderExperience() {
  return `
    <section id="experience" class="py-20 sm:py-28 relative bg-slate-950/40 border-y border-slate-800/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
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
          
          <!-- Left Column: Internship & Practical Experience -->
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

                    <!-- Direct Document Links if available -->
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

                  <!-- Tech stack pills -->
                  <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                    ${exp.tech.map(t => `
                      <span class="badge-tech text-[10px]">${t}</span>
                    `).join('')}
                  </div>

                </div>
              `).join('')}
            </div>
          </div>

          <!-- Right Column: Genuine Achievements -->
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
