
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./child";

const App = () => {
  const [data,setData]=useState("");
  
  const setOption1 = () => setData(1);
  const setOption2 = () => setData(2);
  return (
    <div>
      <div className="parent">
      <h1>Parent Component</h1>
     <div className="child1">
     <h1>Child Component 1</h1>
     <button onClick={setOption1}>Option 1</button>
     </div>
     <div className="child1">
     <h1>Child Component 2</h1>
     <button onClick={setOption2}>Option 2</button>
     </div>
    </div>
    <p>Selected Option: {data}</p>
    </div>
    
  )
}

export default App;
