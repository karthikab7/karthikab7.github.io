/* ============================================================
   main.js — vanilla, dependency-free, no build step.
   mobile nav · scroll progress · scroll reveal · nav scrollspy · year
   All motion respects prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    Array.prototype.forEach.call(links.querySelectorAll("a"), function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    // close on Escape, return focus to the toggle
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("open")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---- scroll progress ---- */
  var bar = document.querySelector(".scroll-progress");
  if (bar) {
    var onScroll = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(reveals, function (el) { el.classList.add("visible"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
      Array.prototype.forEach.call(reveals, function (el) { io.observe(el); });
    }
  }

  /* ---- nav scrollspy (single-page anchors only) ---- */
  var navAnchors = links ? links.querySelectorAll('a[href^="#"]') : [];
  if (navAnchors.length && "IntersectionObserver" in window) {
    var map = {};
    var sections = [];
    Array.prototype.forEach.call(navAnchors, function (a) {
      var id = a.getAttribute("href").slice(1);
      var el = id && document.getElementById(id);
      if (el) { map[id] = a; sections.push(el); }
    });
    if (sections.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          var a = map[e.target.id];
          if (!a) return;
          if (e.isIntersecting) {
            Array.prototype.forEach.call(navAnchors, function (x) { x.classList.remove("is-active"); });
            a.classList.add("is-active");
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
      sections.forEach(function (s) { spy.observe(s); });
    }
  }

  /* ---- footer year ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
