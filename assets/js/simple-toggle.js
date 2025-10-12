// Simplified theme toggle - manually handle everything
console.log('Simple toggle loaded');

window.addEventListener('DOMContentLoaded', function() {
  console.log('DOM ready');
  
  const button = document.getElementById('theme-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  
  console.log('Button:', button);
  console.log('Sun icon:', sunIcon);
  console.log('Moon icon:', moonIcon);
  
  if (!button || !sunIcon || !moonIcon) {
    console.error('Elements not found!');
    return;
  }
  
  // Function to update UI
  function updateUI(isDark) {
    console.log('Updating UI, isDark:', isDark);
    
    if (isDark) {
      sunIcon.style.cssText = 'display: none !important;';
      moonIcon.style.cssText = 'display: inline !important;';
      button.style.background = '#2d2d2d';
    } else {
      sunIcon.style.cssText = 'display: inline !important;';
      moonIcon.style.cssText = 'display: none !important;';
      button.style.background = 'white';
    }
  }
  
  // Override the click handler
  button.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Button clicked!');
    
    const isDark = document.body.classList.contains('dark-mode');
    console.log('Current isDark:', isDark);
    
    if (isDark) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme-preference', 'light');
      updateUI(false);
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme-preference', 'dark');
      updateUI(true);
    }
    
    console.log('New isDark:', document.body.classList.contains('dark-mode'));
  };
  
  // Initial state
  const isDark = document.body.classList.contains('dark-mode');
  updateUI(isDark);
  console.log('Initial state set, isDark:', isDark);
});

