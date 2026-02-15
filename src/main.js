import "./style.css";

import { initThemeToggle } from "./theme-toggle.js";
import { smoothScrollTo } from "./scroll.js";

document.addEventListener("DOMContentLoaded", async () => {
  /* === Theme === */
  initThemeToggle();

  /* === Slides === */
  const slides = document.querySelectorAll(".hero-slide");

  if (slides.length) {
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove("is-active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("is-active");
    }, 12000);
  }

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
  if (nav) {
    const threshold = 40;
    const updateNav = () =>
      nav.classList.toggle("is-scrolled", window.scrollY > threshold);
    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
  }

  /* === Contact Menu === */
  const base = import.meta.env.BASE_URL;

  async function inject(id, file) {
    const root = document.getElementById(id);
    if (!root) return;
    root.innerHTML = await fetch(`${base}${file}`).then((r) => r.text());
  }
  await inject("contact-root", "contact.html");
  await inject("footer-root", "footer.html");

  // JETZT existieren die Elemente:
  const menu = document.getElementById("menu");
  const openBtn = document.getElementById("contact-open");
  const closeBtn = document.getElementById("menu-close");

  if (!menu || !closeBtn) {
    console.warn("Contact menu missing", { menu, openBtn, closeBtn });
  } else {
    const open = (e) => {
      e?.preventDefault?.();
      menu.classList.add("is-open");
      document.body.classList.add("no-scroll");
    };

    const close = () => {
      menu.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    };

    if (openBtn) openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);

    menu.addEventListener("click", (e) => {
      if (e.target === menu) close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }
});
