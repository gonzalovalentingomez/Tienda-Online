document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cartIcon');
    const cartContent = document.getElementById('cartContent');

    cartIcon.addEventListener('click', function () {
        cartContent.classList.toggle('show');
    });
});