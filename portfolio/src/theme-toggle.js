export function initThemeToggle() {
  const toggle = document.getElementById("theme-switch");
  const icon = document.getElementById("theme-icon");
  if (!toggle || !icon) return;

  const setUI = (isLight) => {
    document.body.classList.toggle("theme-light", isLight);
    icon.src = isLight ? "./icons/sun.svg" : "./icons/moon.svg";

  };
  const savedTheme = localStorage.getItem("theme");
  setUI(savedTheme === "light");

  toggle.addEventListener("click", () => {
    const isLight = !document.body.classList.contains("theme-light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    setUI(isLight);
  });
}
