// script.js actualizado
document.getElementById("comprarBtn").addEventListener("click", () => {
  window.open(
    "https://api.whatsapp.com/send?phone=5215560318196&text=Hola%2C%20v%C3%AD%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20compar%20su%20vino%20%22La%20Herencia%20Del%20Abuelo%22F",
    "_blank"
  );
});

// Menú hamburguesa para móviles
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  
  // Desplazamiento suave a las secciones
  const targetId = n.getAttribute("href");
  if (targetId !== "#") {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: "smooth"
      });
    }
  }
}));
