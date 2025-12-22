
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const openBtn = document.getElementById("contact-open");
  const closeBtn = document.getElementById("menu-close");

  function openMenu(e) {
    e.preventDefault(); // wichtig!
    menu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});
