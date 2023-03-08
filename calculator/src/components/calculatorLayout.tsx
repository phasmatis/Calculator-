import { useState } from "react";
const buttonStyle = "w-1/4 m-2 rounded-md border-2 border-black bg-violet-800";
export const CalculatorLayout = () => {
  const [input, setInput] = useState("");
  const [secondInput, setSecondinput] = useState("");
  const [operatorSelected, setOperatorselected] = useState("");
  const [result, setResult] = useState(0);
  const setCurrentinput = (value: string) => {
    if (operatorSelected !== "") {
      setSecondinput(secondInput + value);
    } else {
      return setInput(input + value);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="h-[600px] w-[500px] rounded-md border-2 border-black bg-slate-400">
        <div className="mx-auto mt-3 h-[60px] w-[400px] rounded-md bg-white">
          {operatorSelected === "" ? input : secondInput}
          <div>result {result}</div>
        </div>
        <div className="mx-auto mt-10 flex w-[400px] flex-wrap justify-around">
          <button
            className={buttonStyle}
            onClick={() => {
              setCurrentinput("0");
            }}
          >
            0
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setCurrentinput("1");
            }}
          >
            1
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setCurrentinput("2");
            }}
          >
            2
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setCurrentinput("3");
            }}
          >
            3
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setCurrentinput("4");
            }}
          >
            4
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setCurrentinput("5");
            }}
          >
            5
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setCurrentinput("6");
            }}
          >
            6
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setCurrentinput("7");
            }}
          >
            7
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setCurrentinput("8");
            }}
          >
            8
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setCurrentinput("9");
            }}
          >
            9
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setInput("");
              setSecondinput("");
              setResult(0);
              setOperatorselected("");
            }}
          >
            clear
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setOperatorselected("+");
            }}
          >
            +
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setOperatorselected("-");
            }}
          >
            -
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setOperatorselected("*");
            }}
          >
            *
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setOperatorselected("/");
            }}
          >
            /
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              if (operatorSelected === "+") {
                setResult(Number(input) + Number(secondInput));
              }
              if (operatorSelected === "-") {
                setResult(Number(input) - Number(secondInput));
              }
              if (operatorSelected === "*") {
                setResult(Number(input) * Number(secondInput));
              }
              if (operatorSelected === "/") {
                setResult(Number(input) / Number(secondInput));
              }
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};
