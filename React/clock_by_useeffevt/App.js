import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });
  return (
    <div className="App">
      <h1>Current Time:</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
