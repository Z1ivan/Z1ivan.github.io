// Dark Mode Toggle Script
(function() {
  const THEME_KEY = 'theme-preference';
  const DARK_MODE_CLASS = 'dark-mode';
  
  // Get theme preference from localStorage or system preference
  function getThemePreference() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) {
      return stored;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }
  
  // Apply theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add(DARK_MODE_CLASS);
    } else {
      document.body.classList.remove(DARK_MODE_CLASS);
    }
  }
  
  // Save theme preference
  function saveThemePreference(theme) {
    localStorage.setItem(THEME_KEY, theme);
  }
  
  // Toggle theme
  function toggleTheme() {
    const currentTheme = document.body.classList.contains(DARK_MODE_CLASS) ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    applyTheme(newTheme);
    saveThemePreference(newTheme);
    
    // Update button icons immediately
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      const sunIcon = toggle.querySelector('.sun-icon');
      const moonIcon = toggle.querySelector('.moon-icon');
      
      if (newTheme === 'dark') {
        toggle.style.background = '#2d2d2d !important';
        toggle.style.borderColor = '#555 !important';
        if (sunIcon) {
          sunIcon.style.display = 'none !important';
        }
        if (moonIcon) {
          moonIcon.style.display = 'block !important';
        }
      } else {
        toggle.style.background = 'white !important';
        toggle.style.borderColor = '#e0e0e0 !important';
        if (sunIcon) {
          sunIcon.style.display = 'block !important';
        }
        if (moonIcon) {
          moonIcon.style.display = 'none !important';
        }
      }
      
      // Add animation effect
      toggle.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        toggle.style.transform = '';
      }, 300);
    }
  }
  
  // Initialize theme on page load
  function initTheme() {
    const theme = getThemePreference();
    applyTheme(theme);
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', attachToggleListener);
    } else {
      attachToggleListener();
    }
  }
  
  // Attach click listener to toggle button
  function attachToggleListener() {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', toggleTheme);
      
      // Add keyboard support
      toggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      });
    }
  }
  
  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      const stored = localStorage.getItem(THEME_KEY);
      // Only auto-switch if user hasn't set a preference
      if (!stored) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
  
  // Initialize immediately to prevent flash
  initTheme();
})();

