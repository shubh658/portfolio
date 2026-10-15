import { profileData } from '../data/profile.js';

export function renderNavbar() {
  return `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80" id="main-nav">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          
          <!-- Monogram Logo -->
          <a href="#hero" class="flex items-center gap-3 group text-decoration-none">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-400 p-[1.5px] transition-transform group-hover:scale-105">
              <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span class="font-mono font-bold text-sky-400 text-lg">SM</span>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-slate-100 tracking-tight text-base group-hover:text-sky-300 transition-colors">
                ${profileData.name}
              </span>
              <span class="text-xs text-slate-400 hidden sm:inline-block">
                B.Tech CSE • SIT Nagpur
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Links -->
          <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
            <a href="#about" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">About</a>
            <a href="#education" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">Education</a>
            <a href="#skills" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">Skills</a>
            <a href="#projects" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">Projects</a>
            <a href="#certifications" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">Certifications</a>
            <a href="#experience" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">Experience</a>
            <a href="#resume" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">Resume</a>
            <a href="#contact" class="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors">Contact</a>
          </nav>

          <!-- Right Action CTA -->
          <div class="hidden sm:flex items-center gap-3">
            <a href="${profileData.resumeUrl}" download="Shubhanshu_Manjare_Resume.pdf" class="btn-primary text-xs sm:text-sm py-2 px-4 shadow-indigo-500/20">
              <i data-lucide="download" class="w-4 h-4"></i>
              <span>Download CV</span>
            </a>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <div class="flex lg:hidden">
            <button id="mobile-menu-toggle" type="button" class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-sky-500" aria-label="Toggle Navigation Menu">
              <i data-lucide="menu" class="w-6 h-6" id="menu-icon-open"></i>
              <i data-lucide="x" class="w-6 h-6 hidden" id="menu-icon-close"></i>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-menu" class="hidden lg:hidden border-t border-slate-800/90 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1">
        <a href="#about" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">About</a>
        <a href="#education" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">Education & Coursework</a>
        <a href="#skills" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">Technical Skills</a>
        <a href="#projects" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">Projects (5)</a>
        <a href="#certifications" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">Certifications & Badges</a>
        <a href="#experience" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">Experience & Achievements</a>
        <a href="#resume" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">Resume PDF</a>
        <a href="#contact" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80">Contact Me</a>
        <div class="pt-4 mt-2 border-t border-slate-800">
          <a href="${profileData.resumeUrl}" download="Shubhanshu_Manjare_Resume.pdf" class="btn-primary w-full justify-center">
            <i data-lucide="download" class="w-4 h-4"></i>
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>
    </header>
  `;
}
