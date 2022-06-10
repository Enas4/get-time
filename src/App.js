import { useState } from "react";
import "./App.css";

function App() {
  let time = new Date().toLocaleTimeString();

  const [currTime, setCurrTime] = useState(time);

  const updatedTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrTime(time);
  };
  return (
    <div className="App">
      <h1>{currTime}</h1>
      <button onClick={updatedTime}>Get updated time</button>
    </div>
  );
}

export default App;
