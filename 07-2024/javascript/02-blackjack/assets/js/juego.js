(() => {
  "use strict";

  // HTML References
  const getCardBtn = document.getElementById("get-card");
  const newGameBtn = document.getElementById("new-game");
  const stopTurnBtn = document.getElementById("stop-turn");
  const puntosHTML = document.querySelectorAll("small");
  const containerCardsElements = document.querySelectorAll(".divCartas");

  // Variables
  let deck = [];
  let puntosJugadores = [];
  const tipos = ["C", "D", "H", "S"];
  const especiales = ["J", "Q", "K", "A"];

  // Logical
  const inicializarJuego = () => {
    deck = crearDeck();
    puntosJugadores = [];

    for (let i = 0; i < 2; i++) {
      puntosJugadores.push(0);
    }

    puntosHTML.forEach((puntos) => (puntos.innerText = 0));

    containerCardsElements.forEach((container) => (container.innerHTML = ""));

    getCardBtn.disabled = false;
    stopTurnBtn.disabled = false;
  };

  const barajarDeck = () => {
    deck.sort((a, b) => Math.random() - 0.5);
  };

  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (const tipo of tipos) {
        deck.push(i + tipo);
      }
    }
    for (const especial of especiales) {
      for (const tipo of tipos) {
        deck.push(especial + tipo);
      }
    }

    barajarDeck();
    return deck;
  };

  const pedirCarta = () => {
    if (deck.length === 0) throw new Error("No hay cartas en el deck.");
    return deck.pop();
  };

  const valorCarta = (carta) => {
    let valor = carta.slice(0, -1);
    if (isNaN(valor)) valor = valor === "A" ? 11 : 10;
    return Number(valor);
  };

  // Turno: 0 = primer jugador y el último será la computadora
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const drawCard = (carta, turno) => {
    const imgCard = document.createElement("img");
    imgCard.src = `./assets/cartas/${carta}.png`;
    imgCard.classList.add("carta");
    containerCardsElements[turno].appendChild(imgCard);
  };

  const checkWinner = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Ha sido un empate");
      } else if (puntosMinimos > 21) {
        alert("La computadora gana");
      } else if (puntosComputadora > 21) {
        alert("El jugador gana");
      } else {
        alert("La computadora gana");
      }
    }, 500);
  };

  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;

    do {
      const carta = pedirCarta();
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
      drawCard(carta, puntosJugadores.length - 1);
    } while (puntosComputadora <= puntosMinimos && puntosMinimos <= 21);

    checkWinner();
  };

  const detenerTurno = () => {
    getCardBtn.disabled = true;
    stopTurnBtn.disabled = true;

    turnoComputadora(puntosJugadores[0]);
  };

  inicializarJuego();

  // Event Listeners
  newGameBtn.addEventListener("click", inicializarJuego);

  stopTurnBtn.addEventListener("click", detenerTurno);

  getCardBtn.addEventListener("click", () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);

    drawCard(carta, 0);

    if (puntosJugador > 21) {
      console.warn("Lo siento mucho, perdiste");
      getCardBtn.disabled = true;
      stopTurnBtn.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("21, genial!!");
      getCardBtn.disabled = true;
      stopTurnBtn.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
