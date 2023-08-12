// // module

// import React, {useState} from "react"
// import ReactDom from "react-dom"
// import "./style.css"

// const Calculator = () => {
   
//    const [num1, setNum1] = useState("Num 1");
//    const [num2, setNum2] = useState("Num 2");
//    const [operation, setOperation] = useState("");
//    const [result, setReult] = useState("");
//    const [error, setError]= useState("");


//    function numberChange(event ,field){
//       let inputValue = event.terget.value;
//       if(!isNaN(inputValue) || inputValue === ""){
//          setError("Success!");
//          inputValue === "num1"? setNum1 = num1 : setNum2 = num2;
//       }
//       else{
//          setError("Error!");
//       }
//    }
//    return (
//     <div className="main-container" >
//       <div className="react-calculator">
//        <h1>React Calculator</h1>
//        <div className="cal-input" id="cal-inputs">
//             <input 
//             type="text" 
//             value={num1} 
//             onChange={(e) => numberChange(e , "num1")}></input><br/>
//             <input 
//             type="text" 
//             value={num2}
//             onChange={(e) => numberChange(e , "num2")}
//             ></input>
//        </div>
//        <div className="cal-buttons">
//             <div>
//                <button id="add" >+</button>
//             </div>
            
//             <div>
//                <button id="min" >-</button>
//             </div>
            
//             <div>
//                <button id="mul">*</button>
//             </div>
            
//             <div>
//                <button id="div">/</button>
//             </div>
//         </div>
//         <div>
//            <p value={error}></p>
//         </div>
//         <div>
//            <p value={result}></p>
//         </div>
//         </div>
//     </div>
//    );
// }


// ReactDom.render(<Calculator/>, document.getElementById('root'));


import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const validateInputs = () => {
    setError("");
    if (number1 === "" || number2 === "") {
      setError("Please enter both numbers.");
      return false;
    }
    if (isNaN(number1) || isNaN(number2)) {
      setError("Please enter valid numbers.");
      return false;
    }
    return true;
  };

  const handleOperation = (op) => {
    if (validateInputs()) {
      setOperation(op);
      setResult("");
    }
  };

  const calculateResult = () => {
    if (validateInputs()) {
      switch (operation) {
        case "add":
          setResult(parseFloat(number1) + parseFloat(number2));
          break;
        case "subtract":
          setResult(parseFloat(number1) - parseFloat(number2));
          break;
        case "multiply":
          setResult(parseFloat(number1) * parseFloat(number2));
          break;
        case "divide":
          if (parseFloat(number2) === 0) {
            setError("Cannot divide by zero.");
          } else {
            setResult(parseFloat(number1) / parseFloat(number2));
          }
          break;
        default:
          setError("Select a valid operation.");
          break;
      }
    }
  };

  return (
    <div className="react-calculator">
      <h1>React Calculator</h1>
      <div className="cal-input">
        <input
          type="text"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <input
          type="text"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div className="cal-buttons">
        <div>
          <button onClick={() => handleOperation("add")}>+</button>
        </div>
        <div>
          <button onClick={() => handleOperation("subtract")}>-</button>
        </div>
        <div>
          <button onClick={() => handleOperation("multiply")}>*</button>
        </div>
        <div>
          <button onClick={() => handleOperation("divide")}>/</button>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      {result !== "" && <p className="success">Result: {result}</p>}
    </div>
  );
};

ReactDOM.render(<Calculator />, document.getElementById("root"));
