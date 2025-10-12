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

if (window.innerWidth > 768) {
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  cursor.innerHTML = `
    <div class="cursor-dot"></div>
    <div class="cursor-outline"></div>
  `;
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animateCursor = () => {
    const delay = 0.1;
    cursorX += (mouseX - cursorX) * delay;
    cursorY += (mouseY - cursorY) * delay;

    cursor.style.left = cursorX - 10 + 'px';
    cursor.style.top = cursorY - 10 + 'px';

    requestAnimationFrame(animateCursor);
  };

  animateCursor();

  const interactiveElements = document.querySelectorAll(
    'a, button, .portfolio-item, .status-badge'
  );

  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
    });
  });

  document.addEventListener('mouseleave', () => {
    cursor.classList.add('hidden');
  });

  document.addEventListener('mouseenter', () => {
    cursor.classList.remove('hidden');
  });
}
