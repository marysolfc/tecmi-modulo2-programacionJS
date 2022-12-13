const juego = {
  opciones: {
    0: "✂️",
    1: "🖐",
    2: "🤜 ",
  },
  nombreJugadores: {
    jugador1: "jugador1",
    jugador2: "Computadora",
  },
  scores: {
    puntosJ1: 0,
    puntosJ2: 0,
  },
};

const pedirNuevoNombre = () => {
  return window.prompt("Escribe tu nombre");
};

const cambiarNombre = function (nombre) {
  if (/^[a-z0-9]+/i.test(nombre)) {
    juego.nombreJugadores.jugador1 = nombre;
    console.log(` Bienvenid@ ${juego.nombreJugadores.jugador1}  🙋‍♂️ !`);
  } else {
    console.log(`Mejor te llamaré ${juego.nombreJugadores.jugador1}`);
  }
};

const aleatorio = () => Math.floor(Math.random() * 3).toString();

const imprimirManoAleatoria = function () {
  return juego.opciones[aleatorio()];
};

const imprimirResultado = function (score1, score2) {
  if (score2 > score1) {
    console.log(
      `Fin del juego gana ${juego.nombreJugadores.jugador2} Game over 👾 🙌 `
    );
  } else {
    console.log(`Fin del juego gana ${juego.nombreJugadores.jugador1} 🥊 `);
  }
};
// console.log(
//   `Fin del juego gana ${juego.nombreJugadores.jugador1} 🙋‍♂️ 🙌 🥊 😈 `
// );
const resultado = (gana) => {
  switch (gana) {
    case 0:
      console.log("🥊" + juego.nombreJugadores.jugador1 + " :[" + juego.scores.puntosJ1 + "]" +
          juego.nombreJugadores.jugador2 + " :[" + juego.scores.puntosJ2 + "] 🥊 ");          
      break;
    case 1:
        console.log("🥊" + juego.nombreJugadores.jugador1 + " :[" + juego.scores.puntosJ1 + "]" +
        juego.nombreJugadores.jugador2 + " :[" + juego.scores.puntosJ2 + "] ");          
    break;
    default:
      console.log(juego.nombreJugadores.jugador1 + " :[" + juego.scores.puntosJ1 + "]" +
        juego.nombreJugadores.jugador2 + " :[" + juego.scores.puntosJ2 + "] 🥊 "); 
        
  }
};
const evalua = function (jugador1, jugador2) {
  let gana = 0;
  if (jugador1 === jugador2) {
    console.log(`\t${jugador1} Vs ${jugador2} empatan`);
  } else if (
    (jugador1 === juego.opciones[0] && jugador2 === juego.opciones[1]) ||
    (jugador1 === juego.opciones[1] && jugador2 === juego.opciones[2]) ||
    (jugador1 === juego.opciones[2] && jugador2 === juego.opciones[0])
  ) {
    console.log("\t" + jugador1 + " gana a " + jugador2);
    juego.scores.puntosJ1++;
    gana = 1;
  } else {
    console.log("\t" + jugador2 + " gana a " + jugador1);
    juego.scores.puntosJ2++;
    gana = 2;
  }
  resultado(gana);
};

const main = () => {
  while (juego.scores.puntosJ1 == 3 || juego.scores.puntosJ2 != 3) {
    let jugador1Hand = imprimirManoAleatoria();
    let jugador2Hand = imprimirManoAleatoria();
    console.log(`\t\t ${juego.nombreJugadores.jugador1} ${jugador1Hand} `);
    console.log(`\t\t ${juego.nombreJugadores.jugador2} ${jugador2Hand} `);
    evalua(jugador1Hand, jugador2Hand);
    if (juego.scores.puntosJ1 === 3 || juego.scores.puntosJ2 === 3) {
      imprimirResultado(juego.scores.puntosJ1, juego.scores.puntosJ2);
      break;
    }
  }
};

// A jugar

cambiarNombre(pedirNuevoNombre());
console.log("🏁 Que comience el juego 🏁");
main();
