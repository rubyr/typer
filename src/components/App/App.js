import React, { useState } from "react";
import css from "./App.module.css";
import Game from "../Game/Game";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function App() {
  const [scores, setScores] = useState([]);
  const addScore = (newScore) => {
    const newList = [...scores, newScore + 1].sort((a, b) => b - a);
    if (newList.length > 5) setScores(newList.slice(0, 5));
    else setScores(newList);
  };
  return (
    <div className={css.App}>
      <Header />
      <Sidebar scores={scores} />
      <Game addScore={addScore} />
    </div>
  );
}

export default App;
