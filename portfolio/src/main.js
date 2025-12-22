import "./style.css";

import { initThemeToggle } from "./theme-toggle.js";
import { smoothScrollTo } from "./scroll.js";

document.addEventListener("DOMContentLoaded", () => {
  /* === Theme === */
  initThemeToggle();

  /* === Scroll === */
  const link = document.querySelector("#scroll");
  const target = document.querySelector("#projects");

  if (link && target) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      smoothScrollTo(target, 1000); // Dauer in ms
    });
  }

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
