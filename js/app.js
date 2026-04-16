// Animación al hacer scroll
const elementos = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    elementos.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if (pos < pantalla - 100) {
            el.classList.add("visible");
        }
    });
});

// Botón interactivo
function mensaje() {
    alert("¡Gracias por visitar mi página de recetas! 👩‍🍳");
}
