// button box component
const ButtonBox = ({
  clear,
  changeSign,
  handleOperator, // props getting from the calculator component
  inputNum,
  calculation,
}) => {
  return (
    // button div wrapped with buttons
    <div className="btn-grid">
      <button className="operator" onClick={clear}>
        C
      </button>
      <button className="operator" onClick={changeSign}>
        +/-
      </button>
      <button className="operator" onClick={handleOperator} value="%">
        %
      </button>
      <button className="operator" onClick={handleOperator} value="/">
        /
      </button>
      <button onClick={inputNum} value={7}>
        7
      </button>
      <button onClick={inputNum} value={8}>
        8
      </button>
      <button onClick={inputNum} value={9}>
        9
      </button>
      <button className="operator" onClick={handleOperator} value="*">
        *
      </button>
      <button onClick={inputNum} value={4}>
        4
      </button>
      <button onClick={inputNum} value={5}>
        5
      </button>
      <button onClick={inputNum} value={6}>
        6
      </button>
      <button className="operator" onClick={handleOperator} value="-">
        -
      </button>
      <button onClick={inputNum} value={1}>
        1
      </button>
      <button onClick={inputNum} value={2}>
        2
      </button>
      <button onClick={inputNum} value={3}>
        3
      </button>
      <button className="operator" onClick={handleOperator} value="+">
        +
      </button>
      <button className="operand span-two" onClick={inputNum} value={0}>
        0
      </button>
      <button onClick={inputNum} value=".">
        .
      </button>
      <button className="operator" onClick={calculation} value="=">
        =
      </button>
    </div>
    // end of button div
  );
};

export default ButtonBox;
