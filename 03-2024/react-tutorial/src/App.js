import { useState } from "react";
import { Square } from "./Square";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;

    let gameBoard = [...squares];
    xIsNext ? (gameBoard[index] = "X") : (gameBoard[index] = "O");

    setSquares(gameBoard);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Ganador " + winner;
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} handleClick={handleClick} index={0} />
        <Square value={squares[1]} handleClick={handleClick} index={1} />
        <Square value={squares[2]} handleClick={handleClick} index={2} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleClick={handleClick} index={3} />
        <Square value={squares[4]} handleClick={handleClick} index={4} />
        <Square value={squares[5]} handleClick={handleClick} index={5} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleClick={handleClick} index={6} />
        <Square value={squares[7]} handleClick={handleClick} index={7} />
        <Square value={squares[8]} handleClick={handleClick} index={8} />
      </div>
    </>
  );
}
