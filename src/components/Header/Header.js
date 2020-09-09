import React from "react";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.Header}>
      <h1 className={css.logo}>
        {">"} typer<span className={css.logoCursor}>_</span>
      </h1>
    </header>
  );
};

export default Header;
