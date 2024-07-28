
/*
Vamos a jugar con la computadora. Escribiremos una función que devuelva aleatoriamente “piedra”, “papel” o “tijeras”.
 */

/*
Lógica para obtener la elección de la computadora
 */

/* Creamos una nuesva función llamada getComputerChoice()
Escribimos el código para que getComputerChoicese() obtenga aleatoriamente y retorne uno de los siguientes valores de cadena: “piedra”, “papel” o “tijeras”.*/

function getComputerChoice() {
    let opciones = ["piedra", "papel", "tijeras"]; // Array con las diferentes opciones

    let indice = Math.floor(Math.random()*3); // Esta función genera un número entre 0 y 1. Le sumamos 3 antes de redondear a la baja, para que genere un número entre 0 y 3 sin contar este.
    console.log(indice);

    let opcion = opciones[indice];
    return opcion;
}

console.log(getComputerChoice());


/*
Lógica para obtener la elección humana
 */

// El juego será jugado por un jugador humano. Escribimos una función que tome la elección del usuario y la devuelva.
function getHumanChoice() {
    let opcion = prompt("Escribe una de las tres opciones: piedra, papel, tijeras");
    return opcion;
}

console.log(getHumanChoice());

/*
Declararamos las variables de puntuación de los jugadores
 */

/* Para llevar un registro de la puntuación de los jugadores, creamos dos nuevas variables denominadas humanScore y computerScore
en el ámbito global y las inicializamos con el valor de 0. */
let humanScore = 0;
let computerScore = 0;


