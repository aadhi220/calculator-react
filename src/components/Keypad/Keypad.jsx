import React from "react";
import "./Keypad.min.css";
export default function Keypad({ handleButton }) {
  return (
    <>
      <div className="keypad">
        <button className="clear" onClick={() => handleButton("AC")}>
          AC
        </button>
        <button className="clear" onClick={() => handleButton("Del")}>
          Del
        </button>
        <button className="operator" onClick={() => handleButton("/")}>
          /
        </button>
        <button className="num" onClick={() => handleButton("7")}>
          7
        </button>
        <button className="num" onClick={() => handleButton("8")}>
          8
        </button>
        <button className="num" onClick={() => handleButton("9")}>
          9
        </button>
        <button className="operator" onClick={() => handleButton("*")}>
          *
        </button>
        <button className="num" onClick={() => handleButton("4")}>
          4
        </button>
        <button className="num" onClick={() => handleButton("5")}>
          5
        </button>
        <button className="num" onClick={() => handleButton("6")}>
          6
        </button>
        <button className="operator" onClick={() => handleButton("-")}>
          -
        </button>
        <button className="num" onClick={() => handleButton("1")}>
          1
        </button>
        <button className="num" onClick={() => handleButton("2")}>
          2
        </button>
        <button className="num" onClick={() => handleButton("3")}>
          3
        </button>
        <button className="operator" onClick={() => handleButton("+")}>
          +
        </button>
        <button className="num" onClick={() => handleButton("0")}>
          0
        </button>

        <button className="calculate" onClick={() => handleButton("=")}>
          =
        </button>
      </div>
    </>
  );
}
