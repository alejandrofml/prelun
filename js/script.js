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
let intervalo;
/**
 * Mueve el carrusel en la dirección indicada.
 * @param {number} direccion -1 para atrás, 1 para adelante
 */

function moverCarrusel(direccion){
    index += direccion;
    //si esta primero vuekve hacia atrás y salta al inicio
    if (index < 0) {
        index = totalCards - 1;
    } 
    //si esta en la ultima tarjeta vuelve al inicio
    if (index >= totalCards) {
        index = 0;
    }
    actualizarCarrusel();
}

function iniciarAutoPlay() {
    intervalo = setInterval(() => {
        moverCarrusel(1);
    }, 3000);
}

function resetAutoPlay(){
    clearInterval(intervalo);
    iniciarAutoPlay();
}


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

// Iniciar el autoplay al cargar la página
iniciarAutoPlay();