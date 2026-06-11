import { useState, useRef, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

import "./index.css";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  const timer = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s - h * 3600) / 60);
    const sec = s - h * 3600 - m * 60;
    const hh = String(h).padStart(2, "0");
    const mm = String(m).padStart(2, "0");
    const ss = String(sec).padStart(2, "0");

    return `${hh}:${mm}:${ss}`;
  };

  const btnFocus = useRef(null);
  useEffect(() => {
    if (gameWon) {
      btnFocus.current.focus();
    }
  }, [gameWon]);

  useEffect(() => {
    if (!isRunning || gameWon) return;
    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [isRunning, gameWon, setTime]);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function startNewGame() {
    setDice(generateAllNewDice());
    setTime(0);
    setIsRunning(false);
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) =>
        !die.isHeld ? { ...die, value: Math.ceil(Math.random() * 6) } : die,
      ),
    );
  }

  function hold(id) {
    if (!isRunning) setIsRunning(true);
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
      <p className="description">
        Roll until all dice are the same. <br></br>Click each die to freeze it
        at its current value between rolls.
      </p>
      <p className="timer">{timer(time)}</p>
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
