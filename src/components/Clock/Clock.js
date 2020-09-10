import React, { useEffect, useState } from "react";
import css from "./Clock.module.css";

const Clock = ({ endTime }) => {
  const [width, setWidth] = useState();
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setWidth(endTime - Date.now());
    }, 1000 / 60);
    return () => {
      clearInterval(timeInterval);
    };
  }, [endTime]);
  return <div className={css.Clock} style={{ width: width }}></div>;
};

export default Clock;
