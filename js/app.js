const elementos = document.querySelectorAll(".fade");

function mostrarElementos() {
    elementos.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if (pos < pantalla - 100) {
            el.classList.add("visible");
        }
    });
}

// Ejecutar al cargar
window.addEventListener("load", mostrarElementos);

// Ejecutar al hacer scroll
window.addEventListener("scroll", mostrarElementos);

// Botón
function mensaje() {
    alert("¡Gracias por visitar mi página de recetas! 👩‍🍳");
}
