const carousel = document.getElementById('carousel');
const indicadores = document.getElementById('indicadores');
const slides = carousel.querySelectorAll('.img-portada');
const indicadoresArray = Array.from(indicadores.children);

let index = 0;
let intervalId;

indicadoresArray.forEach((indicador, i) => {
    indicador.addEventListener('click', () => {
        index = i;
        actualizarCarousel();
        resetInterval();
    });
});

function actualizarCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicadoresArray[i].classList.remove('active');
    });

    slides[index].classList.add('active');
    indicadoresArray[index].classList.add('active');
}

function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        index = (index + 1) % slides.length;
        actualizarCarousel();
    }, 7000); // Cambio cada 5 segundos
}

resetInterval(); // Iniciar el intervalo al cargar la página
