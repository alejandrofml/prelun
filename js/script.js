/*const carrusel = document.querySelector('.carrusel');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let index = 0;
const totalCards = document.querySelectorAll('.card').length;
const visibleCards = 3; // Cantidad de tarjetas visibles

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        actualizarCarrusel();
    }
});

nextBtn.addEventListener('click', () => {
    if (index < totalCards - visibleCards) {
        index++;
        actualizarCarrusel();
    }
});

function actualizarCarrusel() {
    const desplazamiento = index * (100 / visibleCards);
    carrusel.style.transform = `translateX(-${desplazamiento}%)`;
}*/

const carrusel = document.querySelector('.carrusel');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let index = 0;
const totalCards = document.querySelectorAll('.card').length;

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        actualizarCarrusel();
    }
});

nextBtn.addEventListener('click', () => {
    if (index < totalCards - 1) {
        index++;
        actualizarCarrusel();
    }
});

function actualizarCarrusel() {
    const desplazamiento = index * 100; // Desplaza 100% del ancho
    carrusel.style.transform = `translateX(-${desplazamiento}%)`;
}
