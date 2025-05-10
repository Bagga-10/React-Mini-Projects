import { useState } from "react";
import "../styles.css";

function Calculator() {
  const [inputvalue, setinputvalue] = useState("");

  const display = (value) => {
    setinputvalue((prevValue) => prevValue + value); 
  };

  const calculate = () => {
    try {
      const answer = eval(inputvalue); 
      setinputvalue(answer.toString()); 
    } catch (error) {
      setinputvalue("Error");
    }
  };

  const clear = () => {
    setinputvalue("");
  };

  return (
    <form className="calculator" name="calc">
      <input
        type="text"
        className="value"
        value={inputvalue}
        disabled
        aria-label="Calculator display"
      />
      <span className="num clear" onClick={clear} aria-label="Clear">
        C
      </span>
      <span onClick={() => display("/")} aria-label="Divide">/</span>
      <span onClick={() => display("*")} aria-label="Multiply">*</span>
      <span onClick={() => display("7")} aria-label="7">7</span>
      <span onClick={() => display("8")} aria-label="8">8</span>
      <span onClick={() => display("9")} aria-label="9">9</span>
      <span onClick={() => display("-")} aria-label="Subtract">-</span>
      <span onClick={() => display("4")} aria-label="4">4</span>
      <span onClick={() => display("5")} aria-label="5">5</span>
      <span onClick={() => display("6")} aria-label="6">6</span>
      <span className="plus" onClick={() => display("+")} aria-label="Add">
        +
      </span>
      <span onClick={() => display("1")} aria-label="1">1</span>
      <span onClick={() => display("2")} aria-label="2">2</span>
      <span onClick={() => display("3")} aria-label="3">3</span>
      <span onClick={() => display("0")} aria-label="0">0</span>
      <span onClick={() => display("00")} aria-label="00">00</span>
      <span onClick={() => display(".")} aria-label="Decimal">.</span>
      <span className="num equal" onClick={calculate} aria-label="Equal">
        =
      </span>
    </form>
  );
}

export default Calculator;
