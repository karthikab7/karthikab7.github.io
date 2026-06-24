/* ============================================================
   main.js — vanilla, dependency-free.
   nav · scroll-progress · scroll-reveal · starfield · constellation
   All motion respects prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
      reveals.forEach(function (el) { el.classList.add("visible"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---- canvas starfield (decorative; skipped under reduced-motion) ---- */
  var canvas = document.getElementById("starfield");
  if (canvas && !reduceMotion) {
    var ctx = canvas.getContext("2d");
    var stars = [], w, h, raf;
    function size() {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
      var count = Math.min(180, Math.floor((w * h) / 24000));
      stars = [];
      for (var i = 0; i < count; i++) {
        stars.push({ x: Math.random()*w, y: Math.random()*h, r: Math.random()*1.5*devicePixelRatio+0.3,
          a: Math.random()*0.6+0.2, tw: Math.random()*0.02+0.004, vx: (Math.random()-0.5)*0.05*devicePixelRatio,
          c: Math.random() > 0.85 ? "#ffd9a1" : (Math.random() > 0.6 ? "#bcd0ff" : "#cfe4ff") });
      }
    }
    function draw() {
      ctx.clearRect(0,0,w,h);
      for (var i=0;i<stars.length;i++){ var s=stars[i];
        s.a += s.tw; if (s.a>0.85||s.a<0.15) s.tw=-s.tw;
        s.x += s.vx; if (s.x<0) s.x=w; if (s.x>w) s.x=0;
        ctx.globalAlpha=s.a; ctx.fillStyle=s.c;
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
      }
      ctx.globalAlpha=1; raf=requestAnimationFrame(draw);
    }
    size(); draw();
    var t; window.addEventListener("resize", function(){ clearTimeout(t); t=setTimeout(size,200); });
    document.addEventListener("visibilitychange", function(){ if (document.hidden){ cancelAnimationFrame(raf);} else { draw(); } });
  }

  /* ---- research constellation: hover/focus reveals milestone ---- */
  var info = document.getElementById("constellation-info");
  if (info) {
    document.querySelectorAll(".constellation .node[data-desc]").forEach(function (n) {
      var show = function () { info.textContent = n.getAttribute("data-label") + " — " + n.getAttribute("data-desc"); };
      n.addEventListener("mouseenter", show);
      n.addEventListener("focus", show);
      n.addEventListener("click", show);
      if (!n.hasAttribute("tabindex")) n.setAttribute("tabindex", "0");
      n.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(); } });
    });
  }

  /* ---- footer year ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
