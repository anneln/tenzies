import { useState, useRef, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

import "./index.css";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  const btnFocus = useRef(null);
  useEffect(() => {
    if (gameWon) {
      btnFocus.current.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function startNewGame() {
    setDice(generateAllNewDice());
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) =>
        !die.isHeld ? { ...die, value: Math.ceil(Math.random() * 6) } : die,
      ),
    );
  }

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="screen-read-only">
        {gameWon && (
          <p>Congratulations ! Tou won / Press "New Game" to start again</p>
        )}
      </div>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button
        className="roll-dice"
        ref={btnFocus}
        onClick={!gameWon ? rollDice : startNewGame}
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
