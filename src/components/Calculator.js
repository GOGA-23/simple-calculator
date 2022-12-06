import { useState } from "react";
import ButtonBox from "./ButtonBox";

// it's calculator component and export them to app component
const Calculator = () => {
  const [operand, setOperand] = useState(0);
  const [prevOperand, setPrevOperand] = useState(0);
  const [operator, setOperator] = useState();

  // function for getting input from buttons
  const inputNum = (e) => {
    let input = e.target.value;
    if (operand === 0) {
      setOperand(input);
    } else {
      setOperand(operand + input);
    }
  };

  // function for clearing all the data
  const clear = () => {
    setOperand(0);
  };

  // function for sign changing button
  const changeSign = () => {
    if (operand > 0) {
      setOperand(-operand);
    } else {
      setOperand(Math.abs(operand)); //here we were using the Math.abs() method returns the absolute value of a number.
    }
  };

  // function for handling operators
  const handleOperator = (e) => {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setPrevOperand(operand);
    setOperand(0);
  };

  // function to calculate the input value getting from input buttons and display the output
  const calculation = () => {
    switch (operator) {
      case "%":
        setOperand(parseFloat(prevOperand) % parseFloat(operand));
        break;
      case "/":
        setOperand((parseFloat(prevOperand) / parseFloat(operand)).toFixed(2));
        break;
      case "*":
        setOperand(parseFloat(prevOperand) * parseFloat(operand));
        break;
      case "+":
        setOperand(parseFloat(prevOperand) + parseFloat(operand));
        break;
      case "-":
        setOperand(parseFloat(prevOperand) - parseFloat(operand));
        break;

      default:
        setOperand(0);
        break;
    }
  };

  return (
    // container div
    <div className="container">
      <div className="wrapper">
        <h1>{operand}</h1>
        {/* passing the functions and getting data from button box component as props  */}
        <ButtonBox
          clear={clear}
          changeSign={changeSign}
          handleOperator={handleOperator}
          inputNum={inputNum}
          calculation={calculation}
        />
      </div>
    </div>
    // end of container div
  );
};

export default Calculator;
