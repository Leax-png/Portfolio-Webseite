import "./style.css";

import { initThemeToggle } from "./theme-toggle.js";
import { smoothScrollTo } from "./scroll.js";

document.addEventListener("DOMContentLoaded", () => {
  /* === Theme === */
  initThemeToggle();

  /* === Slides === */ 
  const slides = document.querySelectorAll(".hero-slide");
  let current = 0;

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
  const menu = document.getElementById("menu");
  const openBtn = document.getElementById("contact-open");
  const closeBtn = document.getElementById("menu-close");

  if (!menu || !openBtn || !closeBtn) return;

  const isOpen = () => menu.classList.contains("is-open");

  const toggleMenu = (open) => {
    menu.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  openBtn.addEventListener("click", () => toggleMenu(true));
  closeBtn.addEventListener("click", () => toggleMenu(false));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) toggleMenu(false);
  });
});
