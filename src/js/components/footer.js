import { profileData } from '../data/profile.js';

export function renderFooter() {
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
