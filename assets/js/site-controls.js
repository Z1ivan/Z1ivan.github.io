window.addEventListener("DOMContentLoaded", function () {
  var themeBtn = document.getElementById("theme-switch-btn");
  var langBtn = document.getElementById("lang-switch-btn");
  var isZh = document.documentElement.lang === "zh-CN";

  function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    if (themeBtn) {
      themeBtn.textContent = isDark ? (isZh ? "☀ 浅色" : "☀ Light") : (isZh ? "☾ 深色" : "☾ Dark");
    }
  }

  function getInitialTheme() {
    var saved = localStorage.getItem("theme-preference");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return false;
  }

  if (themeBtn) {
    applyTheme(getInitialTheme());
    themeBtn.addEventListener("click", function () {
      var nextDark = !document.body.classList.contains("dark-mode");
      localStorage.setItem("theme-preference", nextDark ? "dark" : "light");
      applyTheme(nextDark);
    });
  }

  if (langBtn) {
    langBtn.textContent = isZh ? "EN" : "中文";
    langBtn.addEventListener("click", function () {
      var path = window.location.pathname;
      if (path.indexOf("/zh/acknowledgements/") === 0) {
        window.location.href = "/acknowledgements/";
        return;
      }
      if (path.indexOf("/acknowledgements/") === 0) {
        window.location.href = "/zh/acknowledgements/";
        return;
      }
      if (path.indexOf("/zh/") === 0) {
        window.location.href = "/";
      } else {
        window.location.href = "/zh/";
      }
    });
  }
});
