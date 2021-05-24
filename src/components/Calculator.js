import React, { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [storedValue, setStoredValue] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("");

  const handleClick = (e) => {
    let currentValue = e.target.name;

    if (inputValue === "" && currentValue === "0") {
      setInputValue(inputValue);
    } else {
      setInputValue(inputValue + currentValue);
    }
  };

  const addDecimal = (e) => {
    if (inputValue.indexOf(".") === -1) {
      setInputValue(inputValue + e.target.name);
    }
  };

  const handleReset = () => {
    setInputValue("");
    setStoredValue("");
    setSelectedOperator("");
  };

  const handleBackButton = () => {
    if (inputValue !== "") {
      const deletedNumber = inputValue.slice(0, inputValue.length - 1);
      setInputValue(deletedNumber);
    }
  };

  const handleSetCalcFunction = (event) => {
    const operator = event.target.name;

    setStoredValue(inputValue);
    setInputValue("");
    setSelectedOperator(operator);
  };

  const calculate = () => {
    let result = "0";
    let previousValue = parseFloat(storedValue);
    let currentValue = parseFloat(inputValue);

    switch (selectedOperator) {
      case "+":
        result = previousValue + currentValue;
        break;
      case "-":
        result = previousValue - currentValue;
        break;
      case "*":
        result = previousValue * currentValue;
        break;
      case "/":
        result = previousValue / currentValue;
        break;
      default:
        result = "0";
    }

    setInputValue(result.toString());
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <input type='text' value={inputValue} />
      </div>

      <button onClick={handleBackButton} name='CE'>
        CE
      </button>

      <button onClick={handleReset} name='C'>
        C
      </button>
      <br />
      <button name='1' onClick={handleClick}>
        1
      </button>
      <button name='2' onClick={handleClick}>
        2
      </button>
      <button name='3' onClick={handleClick}>
        3
      </button>
      <button name='4' onClick={handleClick}>
        4
      </button>
      <br />
      <button name='5' onClick={handleClick}>
        5
      </button>
      <button name='6' onClick={handleClick}>
        6
      </button>
      <button name='7' onClick={handleClick}>
        7
      </button>
      <button name='8' onClick={handleClick}>
        8
      </button>
      <br />
      <button name='9' onClick={handleClick}>
        9
      </button>
      <button name='0' onClick={handleClick}>
        0
      </button>
      <button name='.' onClick={addDecimal}>
        .
      </button>
      <br />
      <button name='+' onClick={(e) => handleSetCalcFunction(e)}>
        +
      </button>
      <button name='-' onClick={(e) => handleSetCalcFunction(e)}>
        -
      </button>
      <button name='*' onClick={(e) => handleSetCalcFunction(e)}>
        x
      </button>
      <button name='/' onClick={(e) => handleSetCalcFunction(e)}>
        ÷
      </button>
      <button name='=' onClick={calculate}>
        =
      </button>
    </div>
  );
};

export default Calculator;
