import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleChange = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    alert(`Form submitted with name: ${name}`);
  }
  
  const handleMouseEnter = () =>{
    setIsHovered(true);
  }
  const handleMouseLeave = () =>{
    setIsHovered(false);
  }

  return (
    <div className="App">
      <h1>Event handler React</h1>
      <p>Click the Alert button</p>
      <button onClick={handleClick}>Alert</button>
      <br />
      <h2>Handle change</h2>
      <input
        type="text"
        onChange={handleChange}
        value={text}
        placeholder="Write something"
      />
      <p>You are writing {text}</p>
      <br />
      <h2>Handle Submit</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <br />
      <h2>Mouse Events</h2>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: isHovered ? "yellow" : "red",
        }}
      ></div>
    </div>
  );
}

export default App;
