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
const whatsappLink1 = "https://api.whatsapp.com/send?phone=5215539153965&4text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Fino%20Linaje";
// Botón del Hero
const comprarBtn = document.getElementById("comprarBtn");
if(comprarBtn) {
    comprarBtn.addEventListener("click", () => {
      window.open(whatsappLink1, "_blank");
    });
}

// Botón de la sección de contacto (Nuevo)
const btnWhatsapp = document.getElementById("btnWhatsapp");
if(btnWhatsapp) {
    btnWhatsapp.addEventListener("click", () => {
      window.open(whatsappLink, "_blank");
    });
}

(function() {
        var modal = document.getElementById("modal-galeria");
        var modalImg = document.getElementById("img-expandida");
        var triggers = document.getElementsByClassName("img-trigger");
        var span = document.getElementsByClassName("cerrar-modal")[0];

        // Recorrer todas las imágenes triggers y añadir el evento click
        for (var i = 0; i < triggers.length; i++) {
            triggers[i].onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src; // Usar la misma fuente de la imagen clickeada
                modalImg.alt = this.alt;
            }
        }

        // Función para cerrar el modal
        function cerrarModal() {
             modal.style.display = "none";
        }

        // Click en la X para cerrar
        span.onclick = function() {
            cerrarModal();
        }

        // Click fuera de la imagen para cerrar
        modal.onclick = function(event) {
            if (event.target === modal) {
                cerrarModal();
            }
        }
    })();
