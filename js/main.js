// Main JavaScript Functions
document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
  initializeMobileMenu();
  setActiveNavLink();
});

// Theme Management
function initializeTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const isDark = localStorage.getItem('theme') === 'dark';
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Mobile Menu
function initializeMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });
    
    // Close menu when clicking a link
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
      });
    });
  }
}

// Set Active Nav Link
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath.includes(href) || (currentPath === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Format Currency
function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

// Format Date
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('pt-BR');
}

// Format DateTime
function formatDateTime(dateString) {
  const date = new Date(dateString);
  return `${date.toLocaleDateString('pt-BR')} às ${date.toLocaleTimeString('pt-BR')}`;
}

// Show Toast Message
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: ${type === 'success' ? 'var(--secondary)' : 'var(--destructive)'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    z-index: 1000;
    animation: fadeIn 0.3s;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Generate ONG Card HTML
function generateONGCard(ong) {
  return `
    <div class="card">
      <div style="position: relative; height: 12rem; overflow: hidden;">
        <img src="${ong.image}" alt="${ong.name}" class="card-image">
        <div style="position: absolute; top: 0.75rem; right: 0.75rem;">
          <span class="badge">${ong.category}</span>
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title">${ong.name}</h3>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; font-size: 0.875rem; color: var(--muted-foreground);">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${ong.city}</span>
        </div>
        <p style="font-size: 0.875rem; color: var(--muted-foreground); margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
          ${ong.description}
        </p>
        <a href="ong-detail.html?id=${ong.id}" class="btn btn-primary" style="width: 100%;">
          Ver mais
        </a>
      </div>
    </div>
  `;
}
