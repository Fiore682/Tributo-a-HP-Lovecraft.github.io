var index_carrusel = 1;
mostrar_proximo(index_carrusel);

function proximoSlide(n) {
    mostrar_proximo(index_carrusel += n);
}

function currentSlide(n) {
    mostrar_proximo(index_carrusel = n);
}

function mostrar_proximo(n) {
    var i;
    var slide = document.getElementsByClassName("mostrarSlide");
    if (n > slide.length) {
        index_carrusel = 1
    }
    if (n < 1) {
        index_carrusel = slide.length
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[index_carrusel - 1].style.display = "block";
}