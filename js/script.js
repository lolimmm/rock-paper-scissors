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
    console.log(`Computadora: ${seleccionComputadora}. Humano: ${seleccionHumano}`);

    if ((seleccionHumano === "piedra" && seleccionComputadora === "tijeras") || (seleccionHumano === "papel" && seleccionComputadora === "piedra") || (seleccionHumano === "tijeras" && seleccionComputadora === "papel")) {
        console.log("Humano ha ganado esta ronda");
        puntosHumano++;
    }
    else if (seleccionHumano === seleccionComputadora) {
        console.log("Ha habido un empate");
    }
    else {
        console.log("Computadora ha ganado esta ronda");
        puntosComputadora++;
    }
}


/* Lógica para jugar todo el juego. 5 rondas */
// Esta función va a llevar un registro de la puntuación y declara un ganador final
function jugar() {
    let resultado;
    for (let i = 0; i < 5; i++) {
        ronda();
    }
    console.log(`Computadora: ${puntosComputadora}. Humano: ${puntosHumano}`);

    if (puntosHumano === puntosComputadora) {
        resultado = "Empate";
    }
    else if (puntosHumano >= puntosComputadora) {
        resultado = "Ha ganado Humano";
    }
    else {
        resultado = "Ha ganado Computadora";
    }
    return console.log(resultado);
}

jugar();



