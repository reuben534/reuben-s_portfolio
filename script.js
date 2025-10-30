// Theme Toggle Functionality
function initTheme() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    themeToggleDarkIcon.classList.remove('hidden');
  }

  const themeToggleBtn = document.getElementById('theme-toggle');

  themeToggleBtn.addEventListener('click', function() {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  });
}

// Modern Toast Notification
function showToast(title, message, type = 'success') {
  // Remove any existing toasts
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' 
    ? '<svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    : '<svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
  
  toast.innerHTML = `
    ${icon}
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" aria-label="Close">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-width="2" d="M1 1l12 12M13 1L1 13"></path>
      </svg>
    </button>
  `;
  
  document.body.appendChild(toast);
  
  // Show toast with animation
  setTimeout(() => toast.classList.add('show'), 100);
  
  // Auto hide after 5 seconds
  const hideTimeout = setTimeout(() => hideToast(toast), 5000);
  
  // Close button handler
  toast.querySelector('.toast-close').addEventListener('click', () => {
    clearTimeout(hideTimeout);
    hideToast(toast);
  });
}

function hideToast(toast) {
  toast.classList.remove('show');
  setTimeout(() => toast.remove(), 400);
}

// Contact Form Submission
function initContactForm() {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = `
      <svg class="animate-spin h-5 w-5 mr-2 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
    `;

    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        contactForm.reset();
        showToast(
          'Message Sent Successfully! 🎉',
          'Thank you for reaching out. I\'ll get back to you soon!',
          'success'
        );
      } else {
        response.json().then(data => {
          const errorMsg = Object.hasOwn(data, 'errors') 
            ? data["errors"].map(error => error["message"]).join(", ")
            : 'There was a problem submitting your form';
          showToast('Submission Failed', errorMsg, 'error');
        });
      }
    })
    .catch(error => {
      showToast(
        'Error',
        'Network error. Please check your connection and try again.',
        'error'
      );
    })
    .finally(() => {
      // Reset button state
      submitButton.disabled = false;
      submitButton.innerHTML = originalText;
    });
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenu) {
    mobileMenu.classList.add('hidden'); // Initially hide the menu
  }

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
      if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
      }
    });
  }

  // Close mobile menu when a link is clicked
  if (mobileMenu) {
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initContactForm();
  initMobileMenu();
});
