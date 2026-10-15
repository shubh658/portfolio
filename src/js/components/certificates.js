import { certificatesData } from '../data/certificates.js';

export function renderCertificates() {
  return `
    <section id="certifications" class="py-20 sm:py-28 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col items-center text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
            <span>Verified Credentials</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span class="gradient-text">Certifications</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            Verified technical credentials and industry certifications backed by official PDF documents and authentic Credly verification badges.
          </p>
        </div>

        <!-- Certifications Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${certificatesData.map(cert => `
            <div class="glass-card flex flex-col justify-between overflow-hidden group hover:border-emerald-500/40">
              
              <div class="p-6 sm:p-7 flex flex-col flex-1">
                
                <!-- Card Header: Issuer & Verification Badge -->
                <div class="flex items-center justify-between gap-2 mb-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-mono font-bold text-xs ${
                      cert.issuer.includes('Red Hat') ? 'text-red-400' :
                      cert.issuer.includes('Udemy') ? 'text-purple-400' : 'text-sky-400'
                    }">
                      ${cert.issuer.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <span class="text-xs font-bold text-slate-200 block">${cert.issuer}</span>
                      <span class="text-[11px] text-slate-400 font-mono">${cert.date}</span>
                    </div>
                  </div>

                  ${cert.verified ? `
                    <span class="badge-verified">
                      <i data-lucide="badge-check" class="w-3.5 h-3.5"></i>
                      <span>Verified</span>
                    </span>
                  ` : ''}
                </div>

                <!-- Certificate Title -->
                <h3 class="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  ${cert.title}
                </h3>

                <!-- Meta Details: Duration & Credential ID -->
                <div class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400 font-mono mb-3">
                  <span class="flex items-center gap-1">
                    <i data-lucide="clock" class="w-3 h-3 text-slate-500"></i>
                    ${cert.duration}
                  </span>
                  ${cert.credentialId ? `
                    <span class="flex items-center gap-1 truncate max-w-[200px]" title="ID: ${cert.credentialId}">
                      <i data-lucide="hash" class="w-3 h-3 text-slate-500"></i>
                      ${cert.credentialId}
                    </span>
                  ` : ''}
                </div>

                <!-- Description -->
                <p class="text-xs text-slate-300 mb-5 leading-relaxed">
                  ${cert.description}
                </p>

                <!-- Skills Pills -->
                <div class="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-slate-800/80">
                  ${cert.skills.map(s => `
                    <span class="badge-tech text-[10px]">${s}</span>
                  `).join('')}
                </div>

              </div>

              <!-- Working Action Buttons -->
              <div class="px-6 py-4 bg-slate-900/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2.5">
                
                <div class="flex items-center gap-2">
                  ${cert.pdfUrl ? `
                    <a href="${cert.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline text-xs py-1.5 px-3">
                      <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
                      <span>View PDF</span>
                    </a>
                    <a href="${cert.pdfUrl}" download="${cert.id}.pdf" class="text-slate-400 hover:text-white p-1.5 rounded hover:bg-slate-800 transition-colors" title="Download PDF File">
                      <i data-lucide="download" class="w-4 h-4"></i>
                    </a>
                  ` : ''}
                </div>

                ${cert.verifyUrl ? `
                  <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                    <span>Verify Credential</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                  </a>
                ` : ''}

              </div>

            </div>
          `).join('')}
        </div>

        <!-- Note on adding more certificates -->
        <div class="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <i data-lucide="shield" class="w-3.5 h-3.5 text-slate-400"></i>
          <span>All certificates are linked to verified public PDFs or Credly registry pages. Future credentials can be added via <code>src/data/certificates.js</code>.</span>
        </div>

      </div>
    </section>
  `;
}
