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
function getEleccionHumana(opcionHumano) {
    return opcionHumano;
}


/* Lógica para jugar una sola ronda */
// En esta función llama a otras funciones y se incrementan los puntos indicando quién ha ganado la ronda
function ronda(opcionHumano) {
    let seleccionComputadora = getEleccionComputadora();
    let seleccionHumano = getEleccionHumana(opcionHumano);
    let resultado = `<p>Computadora: ${seleccionComputadora}<br>Usuario: ${seleccionHumano}</p>`;

    if ((seleccionHumano === "piedra" && seleccionComputadora === "tijeras") || (seleccionHumano === "papel" && seleccionComputadora === "piedra") || (seleccionHumano === "tijeras" && seleccionComputadora === "papel")) {
        resultado += "<h4>Usuario ha ganado esta ronda</h4>";
        puntosHumano++;
    }
    else if (seleccionHumano === seleccionComputadora) {
        resultado += "<h4>Ha habido un empate</h4>";
    }
    else {
        resultado += "<h4>Computadora ha ganado esta ronda</h4>";
        puntosComputadora++;
    }

    resultado += `<p>Puntos<br>Computadora: ${puntosComputadora} - Usuario: ${puntosHumano}</p>`; // Se almacenan los puntos totales
    return resultado;
}


/* Lógica para jugar todo el juego. 5 rondas */
// Esta función va a llevar un registro de la puntuación y declara un ganador final
let contador = 1;
function jugar(opcionHumano) {
    let resultado = "";

    // Ejecutamos la función ronda() 
        resultado += `<h3>Ronda ${contador}</h3>`;
        resultado += ronda(opcionHumano);
    
    // A las 5 vueltas se muestra el ganador y se reinician las variables
    if(contador === 5 ) {
        // Se establece un ganador
        if (puntosHumano === puntosComputadora) {
            resultado += "<h4>¡La partida ha quedado Empate!</h4>";
        }
        else if (puntosHumano >= puntosComputadora) {
            resultado += "<h4>¡La partida la ha ganado Usuario!</h4>";
        }
        else {
            resultado += "<h4>¡La partida la ha ganado Computadora!</h4>";
        }
        contador=0;
        puntosComputadora=0;
        puntosHumano=0;
    }
    
    contador++;
    return resultado;
}


/* Mostramos el resultado por pantalla */ 
/*let mensaje;

let btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    
    mensaje = jugar();
    p.innerHTML = mensaje;
    respuesta.appendChild(p);
    
});

let respuesta = document.querySelector("#respuesta");
let p = document.createElement("p");*/


let respuesta = document.querySelector("#respuesta"); // Seleccionamos el div
let p = document.createElement("p"); // Creamos un párrafo
respuesta.appendChild(p); // Añadimos el elemento p al div

// Seleccionamos los botones
let piedra = document.querySelector("#piedra");
let papel = document.querySelector("#papel");
let tijeras = document.querySelector("#tijeras");

// Añadimos un evento de escucha a cada botón
piedra.addEventListener("click", function(e) {
    let opcionHumano = e.target["value"]; // Rescatamos el valor 
    p.innerHTML = jugar(opcionHumano); // Añadimos el texto al párrafo (valor que nos devuelve la función jugar())
});

papel.addEventListener("click", function(e) {
    let opcionHumano = e.target["value"]; // Rescatamos el valor 
    p.innerHTML = jugar(opcionHumano); // Añadimos el texto al párrafo (valor que nos devuelve la función jugar())
});

tijeras.addEventListener("click", function(e) {
    let opcionHumano = e.target["value"]; // Rescatamos el valor 
    p.innerHTML = jugar(opcionHumano); // Añadimos el texto al párrafo (valor que nos devuelve la función jugar())
});

