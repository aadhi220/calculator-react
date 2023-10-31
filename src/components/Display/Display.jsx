import React, { useState } from "react";
import "./Display.min.css";
export default function Display({ input, result ,darkMode}) {
  const [calculate, setCalculate] = useState("");

  return (
    <>
      <div className={`${darkMode ? "display-dark":"display"}`}>
        <div className="sm-dis">{result}</div>
        <div className="main-dis">{input}</div>
      </div>
    </>
  );
}
