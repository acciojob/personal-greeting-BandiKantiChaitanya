
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [input,setInput]=useState()
  
  function handleInput(e){
    setInput(e.target.value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input type="text"  value={input} onChange={handleInput}/>
        {
        input && <div>Hello {input}!</div>
        }
    </div>
  )
}

export default App
