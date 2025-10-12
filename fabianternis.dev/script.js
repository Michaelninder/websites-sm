const themeToggle = document.getElementById("theme-toggle");
const scrollToTopBtn = document.getElementById("scroll-to-top");
const htmlElement = document.documentElement;
const themeKey = "fabianternis-theme";

const applyTheme = (theme) => {
  htmlElement.classList.toggle("dark", theme === "dark");
};

const savedTheme = localStorage.getItem(themeKey);
const prefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const isDark = htmlElement.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem(themeKey, newTheme);
});

window.addEventListener("scroll", () => {
  scrollToTopBtn.classList.toggle("visible", window.scrollY > 400);
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
