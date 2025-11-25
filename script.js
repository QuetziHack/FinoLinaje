// Navegación y Menú
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

// Botones de Compra / Whatsapp
const whatsappLink = "https://api.whatsapp.com/send?phone=5214681370504&text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Fino%20Linaje";

// Botón del Hero
const comprarBtn = document.getElementById("comprarBtn");
if(comprarBtn) {
    comprarBtn.addEventListener("click", () => {
      window.open(whatsappLink, "_blank");
    });
}

// Botón de la sección de contacto (Nuevo)
const btnWhatsapp = document.getElementById("btnWhatsapp");
if(btnWhatsapp) {
    btnWhatsapp.addEventListener("click", () => {
      window.open(whatsappLink, "_blank");
    });
}
