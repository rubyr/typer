import React, { useState, useRef } from "react";
import css from "./Game.module.css";

const Game = () => {
  const [playing, setPlaying] = useState(false);
  const [letter, setLetter] = useState();
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(null);
  const [stopTime, setStopTime] = useState(null);
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
    const newTime = 5000 / (score + 1);
    setTimer(setTimeout(stop, newTime));
    setStopTime(Date() + new Date(newTime));
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
      {playing ? (
        <>
          <p tabIndex={0} ref={letterRef}>
            {letter}
          </p>
          <div
            style={{
              height: "20px",
              width: stopTime - Date(),
              background: "green",
            }}
          ></div>
        </>
      ) : (
        <button onClick={start}>play</button>
      )}
      {score > 0 && <p>{score}</p>}
    </section>
  );
};

export default Game;
