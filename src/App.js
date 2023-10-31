import { useState } from "react";
import "./App.css";
import Display from "./components/Display/Display";
import Keypad from "./components/Keypad/Keypad";

function App() {
  const [input, setInput] = useState("");
  const handleCalculate = () => {};
  return (
    <div className="main">
      <div className="container">
        <h4 className="">Casio</h4>
        <div className="" style={{margin:"1rem 0rem"}}>
            <Display />
          </div>
        <div style={{ overflow: "hidden", borderRadius: "10px"  }}>
        
          <div>
            <Keypad setInput={setInput} handleCalculate={handleCalculate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
