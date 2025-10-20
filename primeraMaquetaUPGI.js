// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Navegación entre secciones
  const navLinks = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll("section");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").replace("#", "");

      sections.forEach(section => {
        section.classList.remove("visible");
        if (section.id === targetId) {
          section.classList.add("visible");
          window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
        }
      });
    });
  });

  // Botones del Hero
  const reservarBtn = document.querySelector(".btn-primary");
  const loginBtn = document.querySelector(".btn-secondary");

  if (reservarBtn) {
    reservarBtn.addEventListener("click", () => {
      document.getElementById("reservas").scrollIntoView({ behavior: "smooth" });
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      document.getElementById("login").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Footer dinámico: año actual
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});



