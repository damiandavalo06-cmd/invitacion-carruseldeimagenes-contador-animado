function actualizarCountdown() {
    const fechaEvento = new Date("2027-07-27T21:00:00").getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = String(dias).padStart(2, "0");
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

actualizarCountdown();
setInterval(actualizarCountdown, 1000);
// Funcionalidad del Carrusel de Fotos
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function cambiarFotoFondo() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Cambia de imagen cada 4000 milisegundos (4 segundos)
setInterval(cambiarFotoFondo, 4000);
// --- ANIMACIÓN DE FUEGOS ARTIFICIALES / CONFETI EN EL CONTADOR ---
const canvas = document.getElementById('confetti-canvas');

if (canvas && typeof confetti === 'function') {
    const myConfetti = confetti.create(canvas, {
        resize: true,
        useWorker: true
    });

    function dispararFuegosArtificiales() {
        // Disparo lado izquierdo del recuadro
        myConfetti({
            particleCount: 25,
            spread: 60,
            origin: { x: 0.2, y: 0.8 },
            colors: ['#d4af37', '#f3e5ab', '#ffffff', '#ff4500']
        });

        // Disparo lado derecho del recuadro
        myConfetti({
            particleCount: 25,
            spread: 60,
            origin: { x: 0.8, y: 0.8 },
            colors: ['#d4af37', '#f3e5ab', '#ffffff', '#25D366']
        });
    }

    // Lanza la primera ráfaga al cargar y luego cada 3.5 segundos
    dispararFuegosArtificiales();
    setInterval(dispararFuegosArtificiales, 3500);
}