import React, { useState } from "react";
import '../Style.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
        <p>"Progress isn’t always about adding more. It’s knowing what to increase, what to reduce, and when to do each with intention"</p>
      <div>
        <h2 className="number">{count}</h2>
      </div>
      <div className="btns">
        <button onClick={increment} className="increment">
          +
        </button>
        <button onClick={decrement} className="increment">
          -
        </button>
      </div>
      <footer className="foot">
        <h3>Created By Syed Farhan ❤️ </h3>
      </footer>
    </div>
  );
};

export default Counter;
