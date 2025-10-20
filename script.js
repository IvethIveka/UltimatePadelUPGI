// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Navegación entre secciones con scroll suave
  const enlacesMenu = document.querySelectorAll(".boton-menu");

  enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", evento => {
      evento.preventDefault();
      const destinoId = enlace.getAttribute("href").replace("#", "");
      const destino = document.getElementById(destinoId);

      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Botones del banner principal
  const botonReservar = document.querySelector(".boton-primario");
  const botonLogin = document.querySelector(".boton-secundario");

  if (botonReservar) {
    botonReservar.addEventListener("click", () => {
      const seccionReservas = document.getElementById("reservas");
      if (seccionReservas) {
        seccionReservas.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  if (botonLogin) {
    botonLogin.addEventListener("click", () => {
      const seccionLogin = document.getElementById("login");
      if (seccionLogin) {
        seccionLogin.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Footer dinámico: año actual
  const spanAño = document.getElementById("year");
  if (spanAño) {
    spanAño.textContent = new Date().getFullYear();
  }
});
