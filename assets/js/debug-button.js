// Force show the theme toggle button with nice styling
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('theme-toggle');
  
  if (button) {
    // Apply beautiful styles
    button.style.cssText = `
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      position: fixed !important;
      top: 80px !important;
      right: 30px !important;
      width: 50px !important;
      height: 50px !important;
      background: white !important;
      border: 2px solid #e0e0e0 !important;
      border-radius: 50% !important;
      z-index: 999999 !important;
      cursor: pointer !important;
      font-size: 26px !important;
      opacity: 1 !important;
      visibility: visible !important;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15) !important;
      transition: all 0.3s ease !important;
    `;
    
    // Get the icon spans
    const sunIcon = button.querySelector('.sun-icon');
    const moonIcon = button.querySelector('.moon-icon');
    
    console.log('Sun icon:', sunIcon);
    console.log('Moon icon:', moonIcon);
    
    // Style the icons - don't use position absolute
    if (sunIcon && moonIcon) {
      // Initial state - show sun
      sunIcon.style.cssText = `
        display: inline-block !important;
        opacity: 1 !important;
        visibility: visible !important;
      `;
      
      moonIcon.style.cssText = `
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
      `;
    }
    
    // Update icons when dark mode changes
    function updateIcons() {
      const isDark = document.body.classList.contains('dark-mode');
      
      console.log('UpdateIcons called, isDark:', isDark);
      
      if (isDark) {
        button.style.background = '#2d2d2d !important';
        button.style.borderColor = '#555 !important';
        if (sunIcon) {
          sunIcon.style.cssText = 'display: none !important; opacity: 0 !important; visibility: hidden !important;';
          console.log('Hiding sun');
        }
        if (moonIcon) {
          moonIcon.style.cssText = 'display: inline-block !important; opacity: 1 !important; visibility: visible !important;';
          console.log('Showing moon');
        }
      } else {
        button.style.background = 'white !important';
        button.style.borderColor = '#e0e0e0 !important';
        if (sunIcon) {
          sunIcon.style.cssText = 'display: inline-block !important; opacity: 1 !important; visibility: visible !important;';
          console.log('Showing sun');
        }
        if (moonIcon) {
          moonIcon.style.cssText = 'display: none !important; opacity: 0 !important; visibility: hidden !important;';
          console.log('Hiding moon');
        }
      }
    }
    
    // Initial update
    updateIcons();
    
    // Watch for theme changes
    const observer = new MutationObserver(updateIcons);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    // Hover effect
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
      this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.25)';
      const isDark = document.body.classList.contains('dark-mode');
      this.style.borderColor = isDark ? '#6bb6ff' : '#224b8d';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.15)';
      const isDark = document.body.classList.contains('dark-mode');
      this.style.borderColor = isDark ? '#555' : '#e0e0e0';
    });
  }
});

