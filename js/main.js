/* ==========================================================
   main.js — shared header/footer, theme toggle, nav, reveal
   All paths are relative so they work under /jaber-portfolio/
   ========================================================== */
(function () {
  "use strict";

  var OWNER = "Jaber Saripada";

  // Pages in projects/ need "../" in front of links
  var inSubfolder = location.pathname.indexOf("/projects/") !== -1;
  var base = inSubfolder ? "../" : "";

  var NAV = [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "About" },
    { href: "skills.html", label: "Skills" },
    { href: "experience.html", label: "Experience" },
    { href: "projects.html", label: "Projects" },
    { href: "education.html", label: "Education" },
    { href: "contact.html", label: "Contact" }
  ];

  function currentPage() {
    var file = location.pathname.split("/").pop() || "index.html";
    // Project detail pages highlight "Projects"
    if (inSubfolder) return "projects.html";
    return file;
  }

  /* ---------- Theme ---------- */
  function getTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  /* ---------- Header ---------- */
  function renderHeader() {
    var mount = document.getElementById("site-header");
    if (!mount) return;
    var page = currentPage();
    var links = NAV.map(function (item) {
      var current = item.href === page ? ' aria-current="page"' : "";
      return '<li><a href="' + base + item.href + '"' + current + ">" + item.label + "</a></li>";
    }).join("");

    mount.className = "site-header";
    mount.innerHTML =
      '<div class="container nav">' +
        '<a class="brand" href="' + base + 'index.html" aria-label="' + OWNER + ' — home">' + OWNER + "<span>.</span></a>" +
        '<nav aria-label="Main navigation">' +
          '<ul class="nav-links" id="nav-links">' + links + "</ul>" +
        "</nav>" +
        '<div class="nav-actions">' +
          '<button class="icon-btn" id="theme-toggle" type="button" aria-label="Toggle theme"></button>' +
          '<button class="icon-btn menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Open menu">☰</button>' +
        "</div>" +
      "</div>";

    var toggle = document.getElementById("menu-toggle");
    var list = document.getElementById("nav-links");
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      toggle.textContent = open ? "✕" : "☰";
    });
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("open")) {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
        toggle.focus();
      }
    });

    var current = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(current);
    document.getElementById("theme-toggle").addEventListener("click", function () {
      var now = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(now);
    });
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    var mount = document.getElementById("site-footer");
    if (!mount) return;
    var links = NAV.map(function (item) {
      return '<li><a href="' + base + item.href + '">' + item.label + "</a></li>";
    }).join("");
    mount.className = "site-footer";
    mount.innerHTML =
      '<div class="container footer-grid">' +
        "<div>" +
          "<strong>" + OWNER + "</strong>" +
          '<p class="muted" style="margin:.25rem 0 0">BSIT student · City College of Calamba, Philippines</p>' +
          '<p class="muted" style="margin:.25rem 0 0;font-size:.85rem">© <span id="year"></span> ' + OWNER + ". Built with HTML, CSS and vanilla JavaScript.</p>" +
        "</div>" +
        '<nav aria-label="Footer navigation"><ul class="footer-links">' + links + "</ul></nav>" +
      "</div>";
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
    initReveal();
  });
})();