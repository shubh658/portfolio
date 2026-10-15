import { renderNavbar } from './components/navbar.js';
import { renderHero } from './components/hero.js';
import { renderAbout } from './components/about.js';
import { renderEducation } from './components/education.js';
import { renderSkills } from './components/skills.js';
import { renderProjects } from './components/projects.js';
import { renderCertificates } from './components/certificates.js';
import { renderExperience } from './components/experience.js';
import { renderResume } from './components/resume.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import { projectsData } from './data/projects.js';
import { profileData } from './data/profile.js';
import { showToast } from './utils/toast.js';

function initApp() {
  const app = document.getElementById('app');
  if (!app) return;

  try {
    // Render all layout components into the DOM
    app.innerHTML = `
      ${renderNavbar()}
      <main>
        ${renderHero()}
        ${renderAbout()}
        ${renderEducation()}
        ${renderSkills()}
        ${renderProjects()}
        ${renderCertificates()}
        ${renderExperience()}
        ${renderResume()}
        ${renderContact()}
      </main>
      ${renderFooter()}

      <!-- Project Architecture Modal Container -->
      <div id="project-modal" class="modal-backdrop" aria-hidden="true" role="dialog">
        <div class="modal-container p-6 sm:p-8 relative">
          <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-indigo-500"></span>
              <span id="modal-category" class="text-xs font-mono uppercase text-sky-400 font-semibold"></span>
            </div>
            <button id="modal-close-btn" type="button" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" aria-label="Close Dialog">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>
          
          <div id="modal-content" class="overflow-y-auto max-h-[70vh] pr-2 space-y-4">
            <!-- Populated dynamically via JS -->
          </div>
        </div>
      </div>
    `;

    // Initialize Lucide Icons
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Setup Event Handlers
    setupMobileNavigation();
    setupScrollSpy();
    setupCopyButtons();
    setupProjectModals();
    setupContactForm();
    setupBackToTop();
  } catch (err) {
    console.error('Error initializing portfolio:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Mobile Navigation Handling
function setupMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      iconOpen?.classList.add('hidden');
      iconClose?.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
      iconOpen?.classList.remove('hidden');
      iconClose?.classList.add('hidden');
    }
  });

  // Close menu on link click
  const navLinks = menu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      iconOpen?.classList.remove('hidden');
      iconClose?.classList.add('hidden');
    });
  });
}

// Active Nav Link Spy
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-sky-400', 'bg-slate-800/80');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('text-sky-400', 'bg-slate-800/80');
      }
    });
  }, { passive: true });
}

// Copy to Clipboard Buttons
function setupCopyButtons() {
  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget;
      const textToCopy = target.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
      }).catch(() => {
        showToast('Failed to copy to clipboard', 'info');
      });
    });
  });
}

// Project Architecture Modal
function setupProjectModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalCategory = document.getElementById('modal-category');
  const modalContent = document.getElementById('modal-content');

  if (!modal || !modalContent) return;

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  document.querySelectorAll('.btn-project-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projectId = e.currentTarget.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id === projectId);
      if (!project) return;

      modalCategory.textContent = `${project.category} • Architecture Breakdown`;
      modalContent.innerHTML = `
        <h3 class="text-2xl font-bold text-white mb-1">${project.title}</h3>
        <p class="text-xs text-sky-400 font-mono mb-4">${project.subtitle} • Role: ${project.role}</p>
        
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 mb-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-rose-400">Problem Statement:</h4>
          <p class="text-sm text-slate-300 leading-relaxed">${project.problemStatement}</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 mb-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400">Engineering Solution:</h4>
          <p class="text-sm text-slate-300 leading-relaxed">${project.solution}</p>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Architectural Capabilities:</h4>
          <ul class="space-y-2 text-sm text-slate-300">
            ${project.keyFeatures.map(feat => `
              <li class="flex items-start gap-2">
                <i data-lucide="check-circle" class="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5"></i>
                <span>${feat}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap gap-1.5">
            ${project.tech.map(t => `<span class="badge-tech text-xs">${t}</span>`).join('')}
          </div>
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs py-2 px-4">
            <i data-lucide="github" class="w-4 h-4"></i>
            <span>View Repository</span>
          </a>
        </div>
      `;

      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');

      if (window.lucide) {
        window.lucide.createIcons({ root: modalContent });
      }
    });
  });
}

// Contact Form Handling with Mailto Fallback
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !subject || !message) {
      showToast('Please fill out all required fields.', 'info');
      return;
    }

    const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
    const emailBody = encodeURIComponent(
      `Candidate Inquiry for Shubhanshu Manjare:\n\n` +
      `Sender Name: ${name}\n` +
      `Contact Email: ${email}\n` +
      `Subject: ${subject}\n\n` +
      `Message Details:\n${message}\n\n` +
      `--\nSent from Portfolio Website Placement Form`
    );

    const mailtoUrl = `mailto:${profileData.email}?subject=${emailSubject}&body=${emailBody}`;
    
    // Open default mail client
    window.location.href = mailtoUrl;

    showToast('Email client opened with pre-filled message! Message sent.', 'success');
    form.reset();
  });
}

// Back to Top Button
function setupBackToTop() {
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
