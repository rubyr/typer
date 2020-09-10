import React, { useState, useRef } from "react";
import css from "./Game.module.css";
import Clock from "../Clock/Clock";

const Game = ({ addScore }) => {
  const [playing, setPlaying] = useState(false);
  const [letter, setLetter] = useState();
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(null);
  const [endTime, setEndTime] = useState();
  const [hardMode, setHardMode] = useState(false);
  const letterRef = useRef(null);

  const start = () => {
    setPlaying(true);
    setTimeout(() => letterRef.current.focus()); // give the game keyboard focus
    setScore(0);
    generateNewLetter();
    resetTimer();
  };

  const stop = () => {
    setPlaying(false);
    setLetter();
    clearTimeout(timer);
    setTimer(null);
    addScore(score);
  };

  const generateNewLetter = () => {
    let newLetter = letter;
    while (newLetter === letter) {
      newLetter = Math.floor(Math.random() * 26 + 10).toString(36);
    }
    setLetter(newLetter);
  };

  const resetTimer = () => {
    clearTimeout(timer);
    const newTime = 5000 / (score / 10 + 1);
    setTimer(setTimeout(stop, newTime));
    setEndTime(Date.now() + new Date(newTime).getTime());
  };

  const keyDown = (e) => {
    if (e.key === letter) {
      generateNewLetter();
      resetTimer();
      setScore(score + 1);
    } else if (hardMode) {
      stop();
    }
  };

  return (
    <section onKeyDown={keyDown} className={css.Game}>
      {score > 0 && <p className={css.score}>{score}</p>}
      {playing ? (
        <>
          <p tabIndex={0} ref={letterRef} className={css.letter}>
            {letter}
          </p>
          <Clock endTime={endTime} score={score} />
        </>
      ) : (
        <>
          <button onClick={start}>play</button>
          <input
            type="checkbox"
            name="hardmode"
            value={hardMode}
            onClick={() => setHardMode(!hardMode)}
          />
          <label htmlFor="hardmode">hard mode</label>
        </>
      )}
    </section>
  );
};

export default Game;
