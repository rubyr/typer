import React, { useState, useRef } from "react";
import css from "./Game.module.css";

const Game = () => {
  const [playing, setPlaying] = useState(false);
  const [letter, setLetter] = useState();
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(null);
  const [timeLeft, setTimeLeft] = useState();
  const letterRef = useRef(null);

  const start = () => {
    setPlaying(true);
    setTimeout(() => letterRef.current.focus());
    setScore(0);
    generateNewLetter();
    setTimer(setTimeout(stop, 5000));
  };

  const stop = () => {
    setPlaying(false);
    setLetter();
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
  };

  const keyDown = (e) => {
    if (e.key === letter) {
      generateNewLetter();
      resetTimer();
      setScore(score + 1);
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
        </>
      ) : (
        <button onClick={start}>play</button>
      )}
    </section>
  );
};

export default Game;
