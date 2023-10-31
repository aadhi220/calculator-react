import { useState } from "react";
import "./App.css";
import Display from "./components/Display/Display";
import Keypad from "./components/Keypad/Keypad";

function App() {
  const[darkMode,setDarkMode]=useState(false)
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButton = (value) => {
    if (value === "=") {
      try {
        setResult(input);
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "AC") {
      setInput("");
      setResult("");
    } else if (value === "Del") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  

  return (
    <div className="main " style={darkMode ?{backgroundColor:"rgb(15 23 42)"}:{}}>
      <div className="container " style={darkMode ?{backgroundColor:"rgb(43, 43, 43)"}:{}}>
       <div style={{display:'flex',width:'100%',justifyContent:'space-between',alignItems:'center'}}> <h4 style={darkMode ?{color:"aliceblue"}:{}}>Casio</h4> <div  onClick={()=>setDarkMode(!darkMode)} className=" w-[2rem]">
              
              {
                darkMode ?   <i class="fa-solid fa-sun  fa-xl " style={{color:'aliceblue'}}></i>
                :  <i class="fa-solid fa-moon  fa-xl " style={{color:''}}></i>
              }
                
                
                </div></div>
        <div className="" style={{ margin: "1rem 0rem" }}>
          <Display input={input} result={result} darkMode={darkMode} />
        </div>
        <div style={{ overflow: "hidden", borderRadius: "10px" }}>
          <div>
            <Keypad handleButton={handleButton} darkMode={darkMode}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
