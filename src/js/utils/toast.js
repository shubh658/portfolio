export function showToast(message, type = 'success') {
  let toastEl = document.getElementById('toast-notification');
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.id = 'toast-notification';
    document.body.appendChild(toastEl);
  }

  const iconName = type === 'success' ? 'check-circle' : 'info';
  const borderClass = type === 'success' ? 'border-emerald-500/40 text-emerald-300' : 'border-sky-500/40 text-sky-300';

  toastEl.className = `fixed bottom-6 right-6 z-[200] flex items-center gap-3 px-5 py-3.5 rounded-xl bg-slate-900/95 backdrop-blur-md border ${borderClass} shadow-2xl text-sm font-medium transition-all duration-300 transform translate-y-0 opacity-100`;
  
  toastEl.innerHTML = `
    <i data-lucide="${iconName}" class="w-5 h-5 flex-shrink-0"></i>
    <span>${message}</span>
  `;

  if (window.lucide) {
    window.lucide.createIcons({ root: toastEl });
  }

  setTimeout(() => {
    toastEl.classList.remove('opacity-100', 'translate-y-0');
    toastEl.classList.add('opacity-0', 'translate-y-6', 'pointer-events-none');
  }, 3500);
}
