import { useState } from "react";
import "../styles.css";

import React from "react";

const ToggleBgColor = () => {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [btnStyle, setBtnStyle] = useState("white");

  const handleClick = () => {
    setBgColor(bgColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor == "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setBtnStyle(bgColor == "white" ? "#1b1b1b" : "white");
  };
  return (
    <section style={{ backgroundColor:bgColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{backgroundColor:btnStyle, color: textColor, border: `2px solid ${textColor}` }}

      >
        {bgColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
      <section className="content">
        <h1>Welcomen To A <br />Real World...</h1>
      </section>
    </section>
  );
};

export default ToggleBgColor;
