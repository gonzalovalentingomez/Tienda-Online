let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-img');
const sectionIndicator = document.getElementById('section-indicator');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function updateSectionIndicator(index) {
    const sections = ["Inicio", "Productos", "Contacto"];
    sectionIndicator.textContent = `Sección actual: ${sections[index]}`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updateSectionIndicator(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    updateSectionIndicator(currentSlide);
}

showSlide(currentSlide);
updateSectionIndicator(currentSlide);
