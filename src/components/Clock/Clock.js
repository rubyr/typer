import React, { useEffect, useState } from "react";
import css from "./Clock.module.css";

const Clock = ({ endTime, score }) => {
  const [height, setHeight] = useState();

  useEffect(() => {
    if (endTime === undefined) return;

    // every 1/60 seconds, refresh the height of the div
    const timeInterval = setInterval(() => {
      setHeight(endTime - Date.now());
    }, 1000 / 60);

    // when endTime changes, clear the interval we just set up
    return () => {
      clearInterval(timeInterval);
    };
  }, [endTime]);

  const percent = height / (50 / (score / 10 + 1));

  return (
    <div
      className={css.Clock}
      style={{
        height: percent + "%",
        background: `hsla(${percent}, 50%, 50%, 0.1)`,
      }}
    ></div>
  );
};

export default Clock;
