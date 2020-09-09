// TODO: remove this component? how useful can it be really

import React from "react";
import css from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={css.Sidebar}>
      <p>Top scores:</p>

      <ul>
        {[35, 22, 17, 14, 12].map((score) => (
          <li>{score}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
