import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    console.log(e.target.value);
    let currentValue = e.target.value;
    if (currentValue === "CE") {
      //delete current value
      console.log(currentValue);
    } else if (currentValue === "C") {
      //reset
      console.log(currentValue);
    } else if (currentValue === "=") {
      //compute
      console.log(currentValue);
    } else {
      setValue(value + currentValue);
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>Value: {value} </div>
      <button onClick={handleClick} value='('>
        (
      </button>
      <button onClick={handleClick} value='CE'>
        CE
      </button>
      <button onClick={handleClick} value='('>
        )
      </button>
      <button onClick={handleClick} value='C'>
        C
      </button>
      <br />
      <button value='1' onClick={handleClick}>
        1
      </button>
      <button value='2' onClick={handleClick}>
        2
      </button>
      <button value='3' onClick={handleClick}>
        3
      </button>
      <button value='4' onClick={handleClick}>
        4
      </button>
      <br />
      <button value='5' onClick={handleClick}>
        5
      </button>
      <button value='6' onClick={handleClick}>
        6
      </button>
      <button value='7' onClick={handleClick}>
        7
      </button>
      <button value='8' onClick={handleClick}>
        8
      </button>
      <br />
      <button value='9' onClick={handleClick}>
        9
      </button>
      <button value='0' onClick={handleClick}>
        0
      </button>
      <button value='.' onClick={handleClick}>
        .
      </button>
      <br />
      <button value='+' onClick={handleClick}>
        +
      </button>
      <button value='-' onClick={handleClick}>
        -
      </button>
      <button value='*' onClick={handleClick}>
        x
      </button>
      <button value='/' onClick={handleClick}>
        ÷
      </button>
      <button value='=' onClick={handleClick}>
        =
      </button>
    </div>
  );
};

export default Calculator;
