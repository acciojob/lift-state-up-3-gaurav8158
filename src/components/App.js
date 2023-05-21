import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  const [data, setdata] = useState("");


  return (
    <div className="parent">
    <h1>Parent Component</h1>
    <div className="tomato-child">
      <h2>Child Component 1</h2>
      <button onClick={(e)=>{setdata(e.target.innerHTML)}}>Option 1</button>
    </div>

    <div className="yellow-child">
      <h2>Child Component 2</h2>
      <button onClick={(e)=>{setdata(e.target.innerHTML)}}>Option 2</button>
    </div>

    <p className="answer">
    Selected Option: {data}

    </p>
        
    </div>
  )
}

export default App