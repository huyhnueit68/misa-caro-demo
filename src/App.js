import React, { useState } from "react";

import Board from './components/Board'

import './App.css';
import "./index.css";

function App() {
  /**
   * Created state squares and xIsNext
   * State squares is a array save value of user
   * State xIsNext save text display turn of user, default is true => x can type first
   */
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  /**
   * Handle the player clicking on the checkers
   * @param {number} i 
   * @returns 
   * CreatedBy PQ Huy()21.07.2021
   */
  const handleClick = i => {
    if (checkWinner(squares) || squares[i]) {
      return;
    }

    // set value arry with 1 element
    squares[i] = xIsNext ? "X" : "O";

    // bingding all arry
    setSquares(squares);

    // set xIsNext change turn for user
    setXIsNext(!xIsNext);
  };

  
  /**
   * Check winner and set status
   */
  const winner = checkWinner(squares);

  let status;
  if (winner) {
    debugger
    status = "Winner: " + winner;
  } else {
    debugger
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={i => handleClick(i)}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
  
}

/**
 * Function check winner
 * @param {array} squares 
 * @returns result check
 * CraetedBy:  PQ Huy(21.07.2021)
 */
function checkWinner(squares) {
  /**
   * Create straight lines where the player wins
   */
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default App;
