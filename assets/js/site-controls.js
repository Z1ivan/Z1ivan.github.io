window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  var root = document.documentElement;
  var isZh = root.lang === "zh-CN";
  var themeBtn = document.getElementById("theme-switch-btn");
  var languageLink = document.getElementById("lang-switch-btn");
  var menuBtn = document.querySelector(".nav-toggle");
  var menu = document.getElementById("primary-nav");

  function applyTheme(dark) {
    root.dataset.theme = dark ? "dark" : "light";
    var themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = dark ? "#19211e" : "#fafbf9";
    if (themeBtn) {
      themeBtn.hidden = false;
      themeBtn.textContent = dark ? (isZh ? "浅色" : "Light") : (isZh ? "深色" : "Dark");
      themeBtn.setAttribute("aria-label", dark ? (isZh ? "切换为浅色模式" : "Switch to light theme") : (isZh ? "切换为深色模式" : "Switch to dark theme"));
      themeBtn.removeAttribute("aria-pressed");
    }
  }
  applyTheme(root.dataset.theme === "dark");
  if (themeBtn) themeBtn.addEventListener("click", function () {
    var dark = root.dataset.theme !== "dark";
    applyTheme(dark);
    try { localStorage.setItem("theme-preference", dark ? "dark" : "light"); } catch (error) { /* The theme also works without storage. */ }
  });
  if (languageLink) languageLink.addEventListener("click", function () { languageLink.hash = window.location.hash; });

  function closeMenu() {
    if (!menu || !menuBtn) return;
    menu.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      var open = menuBtn.getAttribute("aria-expanded") !== "true";
      menuBtn.setAttribute("aria-expanded", String(open));
      menu.classList.toggle("is-open", open);
    });
    menu.addEventListener("click", function (event) { if (event.target.closest("a")) closeMenu(); });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.classList.contains("is-open")) { closeMenu(); menuBtn.focus(); }
    });
  }

  var dialog = document.getElementById("certificate-dialog");
  if (dialog && typeof dialog.showModal === "function") {
    document.querySelectorAll("[data-certificate-open]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        dialog.showModal();
        document.body.classList.add("modal-open");
      });
    });
    dialog.addEventListener("close", function () { document.body.classList.remove("modal-open"); });
    dialog.addEventListener("click", function (event) { if (event.target === dialog) dialog.close(); });
  }

  document.querySelectorAll("[data-task-carousel]").forEach(function (carousel) {
    var track = carousel.querySelector(".task-carousel-track");
    var slides = carousel.querySelectorAll(".task-slide");
    var controls = carousel.querySelector(".carousel-controls");
    var previous = carousel.querySelector(".carousel-prev");
    var next = carousel.querySelector(".carousel-next");
    var counter = carousel.querySelector(".carousel-count");
    var index = 0;
    var targetIndex = null;
    var scheduled = false;
    if (!track || slides.length < 2 || !controls) return;
    function updateControls() {
      previous.disabled = index === 0;
      next.disabled = index === slides.length - 1;
      counter.textContent = (index + 1) + " / " + slides.length;
    }
    function moveTo(target, animate) {
      index = Math.max(0, Math.min(slides.length - 1, target));
      targetIndex = index;
      var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      track.scrollTo({ left: index * track.clientWidth, behavior: animate && !reduceMotion ? "smooth" : "auto" });
      updateControls();
    }
    previous.addEventListener("click", function () { moveTo(index - 1, true); });
    next.addEventListener("click", function () { moveTo(index + 1, true); });
    track.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        moveTo(index + (event.key === "ArrowRight" ? 1 : -1), true);
      }
    });
    track.addEventListener("scroll", function () {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(function () {
        scheduled = false;
        if (targetIndex !== null) {
          if (Math.abs(track.scrollLeft - targetIndex * track.clientWidth) > 1) return;
          targetIndex = null;
        }
        index = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / track.clientWidth)));
        updateControls();
      });
    }, { passive: true });
    function resumeManualScroll() {
      targetIndex = null;
      index = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / track.clientWidth)));
      updateControls();
    }
    track.addEventListener("pointerdown", resumeManualScroll, { passive: true });
    track.addEventListener("wheel", resumeManualScroll, { passive: true });
    window.addEventListener("resize", function () { moveTo(index, false); });
    controls.hidden = false;
    updateControls();
  });

  var demos = Array.from(document.querySelectorAll("[data-task-demo]"));
  var demoToggle = document.querySelector(".demo-toggle");
  if (demos.length && demoToggle && "IntersectionObserver" in window) {
    var motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    var demosEnabled = !motionPreference.matches;
    var visibleDemos = new Set();
    function syncDemos() {
      demos.forEach(function (video) {
        if (demosEnabled && visibleDemos.has(video) && !document.hidden) {
          var promise = video.play();
          if (promise) promise.catch(function () { /* Native controls remain available. */ });
        } else video.pause();
      });
      demoToggle.setAttribute("aria-pressed", String(demosEnabled));
      demoToggle.textContent = demosEnabled ? (isZh ? "暂停" : "Pause") : (isZh ? "播放" : "Play");
      demoToggle.setAttribute("aria-label", demosEnabled ? (isZh ? "暂停任务演示" : "Pause task demonstrations") : (isZh ? "播放任务演示" : "Play task demonstrations"));
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) visibleDemos.add(entry.target);
        else visibleDemos.delete(entry.target);
      });
      syncDemos();
    }, { threshold: 0.25 });
    demos.forEach(function (video) { video.muted = true; video.controls = false; observer.observe(video); });
    demoToggle.hidden = false;
    demoToggle.addEventListener("click", function () { demosEnabled = !demosEnabled; syncDemos(); });
    document.addEventListener("visibilitychange", syncDemos);
    motionPreference.addEventListener("change", function (event) { demosEnabled = !event.matches; syncDemos(); });
    syncDemos();
  }
});
