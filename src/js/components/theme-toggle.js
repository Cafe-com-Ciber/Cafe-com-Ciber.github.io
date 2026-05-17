class ThemeToggle {
  constructor() {
    try {
      const saved = localStorage.getItem("ccc-theme");
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = saved || (prefersDark ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", theme);
    } catch (e) {
      document.documentElement.setAttribute("data-theme", "light");
    }

    document.addEventListener("DOMContentLoaded", () => {
      const themeToggle = document.getElementById("themeToggle");

      if (!themeToggle) {
        console.warn("Botão #themeToggle não encontrado");
        return;
      }

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
  }
}

export default ThemeToggle;
