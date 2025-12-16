import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Increment counter
  const incrementHandler = () => {
    setCount(count + 1);
  };

  // Decrement counter
  const decrementHandler = () => {
    setCount(count - 1);
  };

  // Reset counter
  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>Counter : {count}</h3>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Counter;
