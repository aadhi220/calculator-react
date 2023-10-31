import React from 'react'
import './Keypad.min.css'
export default function Keypad({setInput,handleCalculate}) {
  return (
    <>
<div className='keypad'>
<button className='clear' onClick={() => setInput("")}>AC</button>
<button className='clear' onClick={() => setInput("")}>Del</button>
<button className='operator' onClick={() => setInput("/")}>/</button>
    <button className='num' onClick={() => setInput("7")}>7</button>
    <button className='num' onClick={() => setInput("8")}>8</button>
    <button className='num' onClick={() => setInput("9")}>9</button>
    <button className='operator' onClick={() => setInput("*")}>*</button>
    <button className='num' onClick={() => setInput("4")}>4</button>
    <button className='num' onClick={() => setInput("5")}>5</button>
    <button className='num' onClick={() => setInput("6")}>6</button>
    <button className='operator' onClick={() => setInput("-")}>-</button>
    <button className='num' onClick={() => setInput("1")}>1</button>
    <button className='num' onClick={() => setInput("2")}>2</button>
    <button className='num' onClick={() => setInput("3")}>3</button>
    <button className='operator' onClick={() => setInput("+")}>+</button>
    <button className='num' onClick={() => setInput("0")}>0</button>
   
    <button className='calculate' onClick={handleCalculate}>=</button>
</div>

    
    
    
    
    
    </>
  )
}
