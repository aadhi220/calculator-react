import { useState } from "react";
import "./App.css";
import Display from "./components/Display/Display";
import Keypad from "./components/Keypad/Keypad";

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButton = (value) => {
    if (value === '=') {
      try {
        setResult(input);
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else if (value === 'Del') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <h4 className="">Casio</h4>
        <div className="" style={{ margin: "1rem 0rem" }}>
          <Display input={input} result={result}/>
        </div>
        <div style={{ overflow: "hidden", borderRadius: "10px" }}>
          <div>
            <Keypad
              handleButton={handleButton}
          
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
