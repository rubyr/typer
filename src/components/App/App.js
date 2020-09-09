import React from "react";
import css from "./App.module.css";
import Game from "../Game/Game";

function App() {
  return (
    <div className={css.App}>
      <h1 className={css.logo}>
        typer<span className={css.logoCursor}>_</span>
      </h1>
      <Game />
    </div>
  );
}

export default App;
