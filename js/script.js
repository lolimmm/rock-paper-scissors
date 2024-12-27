/* Juego Piedra, Papel o Tijeras.
Jugarás contra la computadora. Escribirás una función que devuelva aleatoriamente “piedra”, “papel” o “tijeras”.
*/

// Variables de puntuación de los jugadores
let puntosComputadora = 0;
let puntosHumano = 0;
// Opciones a elegir
let opciones = ["piedra", "papel", "tijeras"];


/* Lógica para obtener la elección de la computadora */
function getEleccionComputadora() {
    let numAleatorio = Math.floor(Math.random() * 3);
    return opciones[numAleatorio];
}


/* Lógica para obtener la elección humana */
function getEleccionHumana() {
    let opcion;
    do {
        opcion = prompt("Indique una de las opciones: piedra, papel o tijeras");
    } while (opcion !== "piedra" && opcion !== "papel" && opcion !== "tijeras"); // Se verifica que el usuario inserte una de las 3 opciones
    return opcion;
}


/* Lógica para jugar una sola ronda */
// En esta función llama a otras funciones y se incrementan los puntos indicando quién ha ganado la ronda
function ronda() {
    let seleccionComputadora = getEleccionComputadora();
    let seleccionHumano = getEleccionHumana();
    let resultado = `<br>Computadora: ${seleccionComputadora}. Usuario: ${seleccionHumano}<br>`;

    if ((seleccionHumano === "piedra" && seleccionComputadora === "tijeras") || (seleccionHumano === "papel" && seleccionComputadora === "piedra") || (seleccionHumano === "tijeras" && seleccionComputadora === "papel")) {
        resultado += "- Usuario ha ganado esta ronda<br>";
        puntosHumano++;
    }
    else if (seleccionHumano === seleccionComputadora) {
        resultado += "- Ha habido un empate<br>";
    }
    else {
        resultado += "- Computadora ha ganado esta ronda<br>";
        puntosComputadora++;
    }

    return resultado;
}


/* Lógica para jugar todo el juego. 5 rondas */
// Esta función va a llevar un registro de la puntuación y declara un ganador final
function jugar() {
    let resultado = "";
    for (let i = 0; i < 5; i++) {
        resultado += `<br>Ronda ${i+1}`;
        resultado += ronda();
    }
    resultado += `<br>Computadora: ${puntosComputadora}. Usuario: ${puntosHumano}<br>`;

    if (puntosHumano === puntosComputadora) {
        resultado += "¡Empate!";
    }
    else if (puntosHumano >= puntosComputadora) {
        resultado += "¡Ha ganado Usuario!";
    }
    else {
        resultado += "¡Ha ganado Computadora!";
    }
    return resultado;
}


/* Mostramos el resultado por pantalla */ 
let mensaje;

let btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    
    mensaje = jugar();
    p.innerHTML = mensaje;
    respuesta.appendChild(p);
    
});

let respuesta = document.querySelector("#respuesta");
let p = document.createElement("p");

