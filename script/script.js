// NAV CONSTANTE Y BOTON DE SCROLL UP

window.onscroll = function() {

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20) {
        header.classList.add('nav_mod');
    } else if (scroll < 20) {
        header.classList.remove('nav_mod');
    }
    // BOTON DE SCROLL UP
    var scroll = document.documentElement.scrollTop;

    if (scroll > 200) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 200) {
        buttonUp.style.transform = "scale(0)";
    }

}

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
    }
}

buttonUp = document.getElementById("button-up");

// RESPONSIVE DEL VECTOR DE TENTACULOS Y NAV AL LLEGAR A 760PX

window.addEventListener("resize", function() {

    if (window.innerWidth > 760) {
        menu.classList.remove('move_content');
        body.classList.remove('move_content');
        nav.classList.remove('move_nav');
    }

})

// CITAS RANDOMIZADAS

let btnCita = document.getElementById('btnCita');
let cita = document.getElementById('cita');
let citas = ['"La emoción más antigua y más fuerte de la humanidad es el <strong>miedo</strong>, y el miedo más antiguo y fuerte es el miedo a lo <strong>desconocido</strong>."<hr><br>-H.P Lovecraft', '"Todas mis historias se basan en la premisa fundamental de que las leyes, intereses y emociones comunes de los seres humanos no tienen validez ni significación en la amplitud del vasto <strong>cosmos</strong>."<hr><br>-H.P Lovecraft', '"El océano es más atiguo que las montañas, y está cargado con los recuerdos y los sueños del <strong>tiempo</strong>."<hr><br>-H.P Lovecraft', '"Vivimos en una plácida isla de <strong>ignorancia</strong>, en medio de mares negros e infinitos, pero no fue concebido que debiéramos llegar muy lejos."<hr><br>-H.P Lovecraft', '"Los sabios interpretan los sueños, y los <strong>dioses</strong> se ríen."<hr><br>-H.P Lovecraft', '"Pero más maravilloso que la sabiduría de los ancianos y que la sabiduría de los libros, es la sabiduría secreta del <strong>océano</strong>."<hr>-H.P Lovecraft', '"Si tiras un palo, el perro servil resuella y tropieza para traértelo de vuelta. Haz lo mismo frente a un <strong>gato</strong>, y te mirará con aire divertido, frialdad educada y con algo de aburrimiento."<hr><br>-H.P Lovecraft', '"Nuestros cerebros deliberadamente nos hacen olvidar cosas, para prevenir la <strong>locura</strong>."<hr><br>-H.P Lovecraft', ];

btnCita.addEventListener('click', function() {
        var citaRandom = citas[Math.floor(Math.random() * citas.length)]
        cita.innerHTML = citaRandom;
    }

);

// REPRODUCTOR DE GALERIA DE VIDEO
var reproductor = videojs('fm-video', {
    fluid: true
});