const contenedordeLetras = document.getElementById("containerdeletras");
const contenedordeOpciones = document.getElementById("containerdeopciones");
const selecciondelJugador = document.getElementById("selecciondeljugador");
const nuevojuegoContainer = document.getElementById("nuevojuegocontainer");
const nuevojuegoBoton = document.getElementById("nuevojuegoboton");
const canvas = document.getElementById("canvas");
const textodeResultado = document.getElementById("textoderesultado");

//Respuestas
let opciones = {

    lugares: [
        "academia",
        "providence",
        "cementerio",
        "oceano",
        "isla",
        "colina",
    ],
    adjetivos: ["inenarrable", "demencial", "inefable", "oscuro", "retorcido", "macabro"],
    objetos: [
        "libro",
        "vial",
        "retrato",
        "bote",
        "cenizas",
        "escritos",
    ],
};

//Contador
let aciertos = 0;
let contador = 0;
let palabraElegida = "";
//Mostrar botón de categorías
const muestraOpciones = () => {

    contenedordeOpciones.innerHTML += `<h3>Selecciona una categoría</h3>`;
    let botonCont = document.createElement("div");
    for (let valor in opciones) {
        botonCont.innerHTML += `<button class="opciones" onclick="generaPalabra('${valor}')">${valor}</button>`;
    }
    contenedordeOpciones.appendChild(botonCont);
};


//Bloquear todos los botones elegidos
const blocker = () => {
    let botondeOpciones = document.querySelectorAll(".opciones");
    let botondeLetras = document.querySelectorAll(".letras");
    //deshabilita todas las opciones
    botondeOpciones.forEach((button) => {
        button.disabled = true;
    });
    //dishabilita todas las letras
    botondeLetras.forEach((button) => {
        button.disabled.true;
    });
    nuevojuegoContainer.classList.remove("hide");
};


//Generador de letras
const generaPalabra = (valordeOpciones) => {

    let botondeOpciones = document.querySelectorAll(".opciones");
    //Si valordeOpciones coincide con el boton de innerText entonces resalta el boton
    botondeOpciones.forEach((button) => {
        if (button.innerText.toLowerCase() === valordeOpciones) {
            button.classList.add("active");
        }
        button.disabled = true;
    });
    //Oculta todas las letras al inicio y quita la palabra previa
    contenedordeLetras.classList.remove("hide");
    selecciondelJugador.innerText = "";
    let arraydeOpciones = opciones[valordeOpciones];
    //Elige una palabra al azar
    palabraElegida = arraydeOpciones[Math.floor(Math.random() * arraydeOpciones.length)];
    palabraElegida = palabraElegida.toUpperCase();
    //Reemplaza cada letra con un span que contiene un guión bajo
    let displayItem = palabraElegida.replace(/./g, '<span class="dashes">_</span>');
    //Muestra cada elemento como un span
    selecciondelJugador.innerHTML = displayItem;
};


//Funcion inicial (Se activa cuando el jugador carga la pagina o presiona jugar de nuevo)
const inicializador = () => {

    aciertos = 0;
    contador = 0;
    //Borra todo el contenido y oculta las letras y el boton de jugar de nuevo antes de elegir categoria
    selecciondelJugador.innerHTML = "";
    contenedordeOpciones.innerHTML = "";
    contenedordeLetras.classList.add("hide");
    nuevojuegoContainer.classList.add("hide");
    contenedordeLetras.innerHTML = "";
    //Crea los botones de las letras
    for (let i = 65; i < 91; i++) {
        let boton = document.createElement("button");
        boton.classList.add("letras");
        //De numero a letra [A-Z]
        boton.innerText = String.fromCharCode(i);
        //Elige la letra clickeada
        boton.addEventListener("click", () => {
            let letraArray = palabraElegida.split("");
            let guiones = document.getElementsByClassName("dashes");
            //Si el array tiene una de las letras elegidas se reemplaza el guion con la letra elegida
            if (letraArray.includes(boton.innerText)) {
                letraArray.forEach((letra, index) => {
                    //Si la letra en el array es la misma que la elegida
                    if (letra === boton.innerText) {
                        //Reemplaza guion por letra
                        guiones[index].innerText = letra;
                        //Incrementa el contador
                        aciertos += 1;
                        //Si los aciertos igualan el largo de la palabra
                        if (aciertos == letraArray.length) {
                            textodeResultado.innerHTML = `<h2 class='ganaste'>Ganaste!</h2><p>La palabra era <span>${palabraElegida}</span></p>`;
                            //Bloquea todos los botones
                            blocker();
                        }
                    }
                });
            } else {
                //Suma uno a la cuenta, lo que hace que se dibuje una parte del ahorcado
                contador += 1;
                //Dibuja al ahorcado
                drawMan(contador);
                //Contador==6 para: cabeza,cuerpo,brazo izquierdo, brazo derecho, pierna izquierda, pierna derecha
                if (contador == 6) {
                    textodeResultado.innerHTML = `<h2 class='lose-msg'>Perdiste!</h2><p>La palabra era <span>${palabraElegida}</span></p>`;
                    blocker();
                }
            }
            //Deshabilita el boton clickeado
            boton.disabled = true;
        });
        contenedordeLetras.append(boton);
    }
    muestraOpciones();
    let { dibujoInicial } = creaCanvas();
    //dibujoInicial dibuja la horca
    dibujoInicial();
};


//Canvas
const creaCanvas = () => {

    let linea = canvas.getContext("2d");
    linea.beginPath();
    linea.strokeStyle = "#000";
    linea.lineWidth = 2;
    //For drawing lines
    const dibujaLinea = (fromX, fromY, toX, toY) => {
        linea.moveTo(fromX, fromY);
        linea.lineTo(toX, toY);
        linea.stroke();
    };
    const cabeza = () => {
        linea.beginPath();
        linea.arc(70, 30, 10, 0, Math.PI * 2, true);
        linea.stroke();
    };
    const cuerpo = () => {
        dibujaLinea(70, 40, 70, 80);
    };
    const brazoIzquierdo = () => {
        dibujaLinea(70, 50, 50, 70);
    };
    const brazoDerecho = () => {
        dibujaLinea(70, 50, 90, 70);
    };
    const piernaIzquierda = () => {
        dibujaLinea(70, 80, 50, 110);
    };
    const piernaDerecha = () => {
        dibujaLinea(70, 80, 90, 110);
    };
    //Dibujo inicial
    const dibujoInicial = () => {
        //borra el canvas
        linea.clearRect(0, 0, linea.canvas.width, linea.canvas.height);
        //bottom line
        dibujaLinea(10, 130, 130, 130);
        //left line
        dibujaLinea(10, 10, 10, 131);
        //top line
        dibujaLinea(10, 10, 70, 10);
        //small top line
        dibujaLinea(70, 10, 70, 20);
    };
    return { dibujoInicial, cabeza, cuerpo, brazoIzquierdo, brazoDerecho, piernaIzquierda, piernaDerecha };
};


//Dibuja al ahorcado
const drawMan = (contador) => {

    let { cabeza, cuerpo, brazoIzquierdo, brazoDerecho, piernaIzquierda, piernaDerecha } = creaCanvas();
    switch (contador) {
        case 1:
            cabeza();
            break;
        case 2:
            cuerpo();
            break;
        case 3:
            brazoIzquierdo();
            break;
        case 4:
            brazoDerecho();
            break;
        case 5:
            piernaIzquierda();
            break;
        case 6:
            piernaDerecha();
            break;
        default:
            break;
    }
};


//Nuevo juego
nuevojuegoBoton.addEventListener("click", inicializador);
window.onload = inicializador;