import { profileData } from '../data/profile.js';

export function renderContact() {
  return `
    <section id="contact" class="py-20 sm:py-28 relative bg-slate-950/40 border-t border-slate-800/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col items-center text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <i data-lucide="mail" class="w-3.5 h-3.5"></i>
            <span>Placement & Outreach</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in <span class="gradient-text">Touch</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            Reach out regarding campus placements, software development roles, or technical collaborations.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <!-- Left Column: Direct Contact Info & Copy Buttons -->
          <div class="lg:col-span-5 space-y-6">
            <div class="glass-card p-6 sm:p-8">
              <h3 class="text-xl font-bold text-white mb-2">Contact Details</h3>
              <p class="text-xs text-slate-400 mb-6">
                Feel free to email, call, or review my active code repositories.
              </p>

              <div class="space-y-4">
                
                <!-- Email Card -->
                <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 flex-shrink-0">
                      <i data-lucide="mail" class="w-5 h-5"></i>
                    </div>
                    <div class="min-w-0">
                      <div class="text-xs text-slate-400 font-medium">Email Address</div>
                      <a href="mailto:${profileData.email}" class="text-sm font-semibold text-white hover:text-sky-400 transition-colors truncate block">
                        ${profileData.email}
                      </a>
                    </div>
                  </div>
                  <button type="button" class="btn-copy p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" data-copy="${profileData.email}" title="Copy Email">
                    <i data-lucide="copy" class="w-4 h-4"></i>
                  </button>
                </div>

                <!-- Phone Card -->
                <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                      <i data-lucide="phone" class="w-5 h-5"></i>
                    </div>
                    <div class="min-w-0">
                      <div class="text-xs text-slate-400 font-medium">Direct Telephone</div>
                      <a href="tel:${profileData.phone}" class="text-sm font-semibold text-white hover:text-emerald-400 transition-colors truncate block">
                        ${profileData.phone}
                      </a>
                    </div>
                  </div>
                  <button type="button" class="btn-copy p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" data-copy="${profileData.phone}" title="Copy Phone Number">
                    <i data-lucide="copy" class="w-4 h-4"></i>
                  </button>
                </div>

                <!-- GitHub Card -->
                <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                      <i data-lucide="github" class="w-5 h-5"></i>
                    </div>
                    <div class="min-w-0">
                      <div class="text-xs text-slate-400 font-medium">GitHub Repository</div>
                      <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-white hover:text-purple-400 transition-colors truncate block">
                        github.com/${profileData.githubUsername}
                      </a>
                    </div>
                  </div>
                  <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" title="Open GitHub">
                    <i data-lucide="external-link" class="w-4 h-4"></i>
                  </a>
                </div>

                <!-- Location Card -->
                <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <i data-lucide="map-pin" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <div class="text-xs text-slate-400 font-medium">Location & Relocation</div>
                    <div class="text-sm font-semibold text-white">
                      ${profileData.location} <span class="text-xs text-slate-400 font-normal">(Open to pan-India relocation)</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <!-- Right Column: Interactive Recruiter Message Form -->
          <div class="lg:col-span-7">
            <div class="glass-card p-6 sm:p-8">
              <h3 class="text-xl font-bold text-white mb-2">Send a Recruitment Message</h3>
              <p class="text-xs text-slate-400 mb-6">
                Fill out the form below. Submitting will validate your fields and open your default email client with a pre-formatted message addressed directly to Shubhanshu.
              </p>

              <form id="contact-form" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="contact-name" class="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name / Recruiter Name *
                    </label>
                    <input 
                      type="text" 
                      id="contact-name" 
                      required 
                      placeholder="e.g. Talent Acquisition Team"
                      class="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                    >
                  </div>

                  <div>
                    <label for="contact-email" class="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Work Email *
                    </label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      required 
                      placeholder="recruiter@company.com"
                      class="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                    >
                  </div>
                </div>

                <div>
                  <label for="contact-subject" class="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject / Role Title *
                  </label>
                  <input 
                    type="text" 
                    id="contact-subject" 
                    required 
                    placeholder="e.g. Campus Placement Interview / SDE Role Opportunity"
                    class="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                  >
                </div>

                <div>
                  <label for="contact-message" class="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message Details *
                  </label>
                  <textarea 
                    id="contact-message" 
                    rows="4" 
                    required 
                    placeholder="Provide details about the company, interview schedule, job description, or inquiry..."
                    class="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-y"
                  ></textarea>
                </div>

                <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button type="submit" class="btn-primary w-full sm:w-auto justify-center text-sm py-2.5 px-6">
                    <i data-lucide="send" class="w-4 h-4"></i>
                    <span>Generate & Send Message</span>
                  </button>
                  <span class="text-[11px] text-slate-500">
                    Direct delivery to shubhumanjare@gmail.com
                  </span>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
