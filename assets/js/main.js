/* ============================================================
   main.js — lightweight, dependency-free.
   - mobile nav toggle
   - scroll-reveal (IntersectionObserver)
   - accessible canvas starfield (astro/landing), respects reduced-motion
   ============================================================ */
(function () {
  "use strict";

  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); });
    });
  }

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      reveals.forEach(function (el) { el.classList.add("visible"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---- starfield (decorative; skipped under reduced-motion) ---- */
  var canvas = document.getElementById("starfield");
  if (canvas && !reduceMotion) {
    var ctx = canvas.getContext("2d");
    var stars = [], w, h, raf;
    function size() {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
      var count = Math.min(160, Math.floor((w * h) / 26000));
      stars = [];
      for (var i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w, y: Math.random() * h,
          r: Math.random() * 1.4 * devicePixelRatio + 0.3,
          a: Math.random() * 0.6 + 0.2,
          tw: Math.random() * 0.02 + 0.004,
          vx: (Math.random() - 0.5) * 0.06 * devicePixelRatio
        });
      }
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        s.a += s.tw; if (s.a > 0.85 || s.a < 0.15) s.tw = -s.tw;
        s.x += s.vx; if (s.x < 0) s.x = w; if (s.x > w) s.x = 0;
        ctx.globalAlpha = s.a;
        ctx.fillStyle = "#cfe4ff";
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    size(); draw();
    var t;
    window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(size, 200); });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { cancelAnimationFrame(raf); } else { draw(); }
    });
  }

  /* ---- footer year ---- */
  var y = document.getElementById("year");
  if (y) { y.textContent = new Date().getFullYear(); }
})();
