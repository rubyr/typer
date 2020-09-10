import React from "react";
import css from "./Landing.module.css";
import github from "../../images/gh.png";
import twitter from "../../images/tw.png";

const Landing = () => {
  return (
    <div className={css.Landing}>
      <p>
        Welcome to <code>typer</code>! Typer is an app designed to test your
        typing skills.
        <br />
        This app was made for the MintBean OpenHack: No Mouse competition. It
        was made in under 48 hours and was designed to be played solely with the
        keyboard, as per the competition's rules.
        <br />
        To play the game, use the "tab" key on your keyboard to select the start
        button, and press enter. There will be no countdown. A letter will
        appear on the screen, simply type the letter that shows up.
        <br />
        This app was built using React.
      </p>
      <div className={css.links}>
        <a
          href="https://github.com/rubyr/typer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Github"></img>
        </a>
        <a
          href="https://www.twitter.com/rubyr_js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter"></img>
        </a>
      </div>
    </div>
  );
};

export default Landing;
