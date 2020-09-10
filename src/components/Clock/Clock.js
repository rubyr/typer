import React, { useEffect, useState } from "react";
import css from "./Clock.module.css";

const Clock = ({ endTime, score }) => {
  const [height, setHeight] = useState();
  useEffect(() => {
    if (endTime === undefined) return;
    const timeInterval = setInterval(() => {
      setHeight(endTime - Date.now());
    }, 1000 / 60);
    return () => {
      clearInterval(timeInterval);
    };
  }, [endTime]);
  return (
    <div
      className={css.Clock}
      style={{ height: height / (50 / (score / 10 + 1)) + "%" }}
    >
      {" "}
    </div>
  );
};

export default Clock;
