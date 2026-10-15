import { projectsData } from '../data/projects.js';

export function renderProjects() {
  return `
    <section id="projects" class="py-20 sm:py-28 relative bg-slate-950/40 border-y border-slate-800/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
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

        <!-- Project Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${projectsData.map((project, idx) => `
            <div class="glass-card flex flex-col justify-between overflow-hidden group ${project.featured ? 'border-sky-500/30' : ''}">
              
              <div class="p-6 sm:p-7 flex flex-col flex-1">
                
                <!-- Category and Featured Pill -->
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

                <!-- Title & Subtitle -->
                <h3 class="text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
                  ${project.title}
                </h3>
                <p class="text-xs text-slate-400 font-mono mb-4">
                  ${project.subtitle}
                </p>

                <!-- Tagline -->
                <p class="text-sm text-slate-300 font-medium mb-4 leading-snug">
                  ${project.tagline}
                </p>

                <!-- Brief Problem & Solution Overview -->
                <p class="text-xs text-slate-400 mb-6 leading-relaxed line-clamp-3">
                  ${project.description}
                </p>

                <!-- Tech Stack Pills -->
                <div class="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-800/80">
                  ${project.tech.map(t => `
                    <span class="badge-tech text-[11px]">${t}</span>
                  `).join('')}
                </div>

              </div>

              <!-- Card Action Bar -->
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

        <!-- Project Repository Link Banner -->
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
