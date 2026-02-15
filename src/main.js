import "./style.css";

import { initThemeToggle } from "./theme-toggle.js";
import { smoothScrollTo } from "./scroll.js";

document.addEventListener("DOMContentLoaded", () => {
  /* === Theme === */
  initThemeToggle();

  /* === Slides === */
  const slides = document.querySelectorAll(".hero-slide");
  let current = 0;

  const currentSlide = slides?.[current];
    if (!currentSlide) return;
    
  setInterval(() => {
    slides[current].classList.remove("is-active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("is-active");
  }, 12000);

  /* === Scroll === */
  const link = document.querySelector("#scroll");
  const target = document.querySelector("#projects");

  if (link && target) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      smoothScrollTo(target, 1000); // Dauer in ms
    });
  }

  /* === Navbar Scroll === */
  const nav = document.querySelector(".navbar");
  if (!nav) return;

  const threshold = 40;

  const updateNav = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > threshold);
  };

  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

  /* === Contact Menu === */
  async function loadContact() {
  const root = document.getElementById("contact-root");
  if (!root) return;

  // Contact HTML laden
  root.innerHTML = await fetch("./contact.html").then(r => r.text());

  // JETZT existieren die Elemente:
  const menu = document.getElementById("menu");
  const openBtn = document.getElementById("contact-open");
  const closeBtn = document.getElementById("menu-close");

  if (!menu || !openBtn || !closeBtn) {
    console.warn("Contact menu elements missing", { menu, openBtn, closeBtn });
    return;
  }

  const open = (e) => {
    e.preventDefault();
    menu.classList.add("is-open");
    document.body.classList.add("no-scroll");
  };

  const close = () => {
    menu.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  };

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);

  // optional: Overlay click schließt
  menu.addEventListener("click", (e) => {
    if (e.target === menu) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

loadContact();

});
