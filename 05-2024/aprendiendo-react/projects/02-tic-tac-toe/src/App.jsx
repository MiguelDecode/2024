import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";

import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { checkWinner, checkEndGame } from "./logic/board";
import WinnerModal from "./components/WinnerModal";

function App() {
  const [board, setBoard] = useState(() => {
    const localBoard = JSON.parse(window.localStorage.getItem("board"));
    return localBoard || Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const localTurn = window.localStorage.getItem("turn");
    return localTurn ?? TURNS.x;
  });

  const [winner, setWinner] = useState(null); // null = no winner , false = draw

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
