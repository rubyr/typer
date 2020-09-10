// TODO: remove this component? how useful can it be really

import React from "react";
import css from "./Sidebar.module.css";

const Sidebar = ({ scores }) => {
  return (
    <aside className={css.Sidebar}>
      {scores.length > 0 && (
        <>
          <p>Top scores:</p>

          <ul>
            {scores.map((score, i) => (
              <li key={i}>{score}</li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
