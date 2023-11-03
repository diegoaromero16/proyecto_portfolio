document.addEventListener("DOMContentLoaded", function () {
    var elementos = document.querySelectorAll(".texto-invisible");
    var mensajes = [
        "Hola! 👋 Mi nombre es",
        "Diego Romero",
        "Full Stack Web Developer 🧑‍💻",
        "Soy un desarrollador web profesional, con sólidos conocimientos en HTML, CSS, JavaScript, React JS, entre otros",
        "¡Contrátame!"
    ];

    function escribirTexto(elemento, mensaje, index, velocidadEscritura) {
        if (index < mensaje.length) {
            elemento.textContent += mensaje.charAt(index);
            index++;
            setTimeout(function () {
                escribirTexto(elemento, mensaje, index, velocidadEscritura);
            }, velocidadEscritura);
        }
    }

    function animarElementos() {
        elementos.forEach(function (elemento, index) {
            if (mensajes[index] == mensajes[3]) {
                setTimeout(function () {
                    escribirTexto(elemento, mensajes[index], 0, 10); // Velocidad de escritura (en milisegundos)
                    elemento.classList.add("texto-visible");
                }, 1100 * index); // Retraso inicial (en milisegundos) antes de que comience a escribir
            }
            else if (mensajes[index] == mensajes[4]) {
                setTimeout(function () {
                    escribirTexto(elemento, mensajes[index], 0, 50); // Velocidad de escritura (en milisegundos)
                    elemento.classList.add("texto-visible");
                }, 1300 * index); // Retraso inicial (en milisegundos) antes de que comience a escribir
            }
            else {
                setTimeout(function () {
                    escribirTexto(elemento, mensajes[index], 0, 50); // Velocidad de escritura (en milisegundos)
                    elemento.classList.add("texto-visible");
                }, 1000 * index); // Retraso inicial (en milisegundos) antes de que comience a escribir
            }
        });
    }

    animarElementos();
});


function functionContratame() {
    var miDiv = document.getElementById("contacto");
    miDiv.scrollIntoView({ behavior: "smooth" });
}