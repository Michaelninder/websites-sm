const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
const themeKey = "fabianternis-theme";

const applyTheme = (theme) => {
  if (theme === "dark") {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }
};

const savedTheme = localStorage.getItem(themeKey);

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {
  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    localStorage.setItem(themeKey, "light");
  } else {
    htmlElement.classList.add("dark");
    localStorage.setItem(themeKey, "dark");
  }
});
