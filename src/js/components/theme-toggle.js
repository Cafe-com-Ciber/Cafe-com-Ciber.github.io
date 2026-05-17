class ThemeToggle {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      const temaToggle = document.querySelector(".theme-toggle");
      const html = document.documentElement;

      // Verifica se o botão existe
      if (!themeToggle) {
        console.warn("Botão .theme-toggle não encontrado");
        return;
      }
      // THEME: read + toggle (early script in <head> handles initial flash prevention)
      const themeToggle = document.getElementById("themeToggle");
      function applyTheme(t) {
        document.documentElement.setAttribute("data-theme", t);
        themeToggle.setAttribute(
          "aria-pressed",
          t === "dark" ? "true" : "false",
        );
        themeToggle.setAttribute(
          "title",
          t === "dark" ? "Ativar tema claro" : "Ativar tema escuro",
        );
      }
      applyTheme(
        document.documentElement.getAttribute("data-theme") || "light",
      );
      themeToggle.addEventListener("click", () => {
        const next =
          document.documentElement.getAttribute("data-theme") === "dark"
            ? "light"
            : "dark";
        try {
          localStorage.setItem("ccc-theme", next);
        } catch (e) {}
        applyTheme(next);
      });
    });

    // Apply saved theme immediately to avoid flash. Falls back to OS preference.
    (function () {
      try {
        var saved = localStorage.getItem("ccc-theme");
        var prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        var theme = saved || (prefersDark ? "dark" : "light");
        document.documentElement.setAttribute("data-theme", theme);
      } catch (e) {
        document.documentElement.setAttribute("data-theme", "light");
      }
    })();
  }
}

export default ThemeToggle;
