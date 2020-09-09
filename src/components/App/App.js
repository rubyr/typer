import React from "react";
import css from "./App.module.css";
import Game from "../Game/Game";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function App() {
  return (
    <div className={css.App}>
      <Header />
      <Sidebar />
      <Game />
    </div>
  );
}

export default App;
