import React, { useState } from "react";
import {
  Container,
  Screen,
  Prevoius,
  Current,
  Button,
} from "./ScientificStyle";
import axios from "axios";
import base_url from "../baseapi/baseapi";
// import ChacheMemory from "./ChacheMemory";

const ScientificCalculator = () => {
  const [current, setCurrent] = useState("");
  const [prevoius, setPrevoius] = useState("");
  const [operations, setOperations] = useState("");
  // const [memory, setMemory] = useState("");

  const appendValueHandler = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };

  const allclearHandler = () => {
    setCurrent("");
    setOperations("");
    setPrevoius("");
  };

  const chooseOperationHandler = (el) => {
    if (current === "") return;
    if (prevoius !== "") {
      let value = compute();
      setPrevoius(value);
    } else {
      setPrevoius(current);
    }
    setCurrent("");
    setOperations(el.target.getAttribute("data"));
  };

  // const percentage = async (el) => {
  //   if (current === "") return;
  //   if (prevoius !== "") {
  //     let value = compute();
  //     setPrevoius(value);
  //   } else {
  //     setPrevoius(current);
  //   }
  //   setCurrent("");
  //   setOperations(el.target.getAttribute("data"));
  // };

  const squareOfNumber = async (e1) => {
    if (current === "") return;
    // console.log("square");
    const square = await axios.get(`${base_url}square/${current}`);
    setCurrent(square.data.toString());
  };

  const squareRootOfNumber = async (e1) => {
    if (current === "") return;
    // console.log("square");
    const square = await axios.get(`${base_url}squareRoot/${current}`);
    setCurrent(square.data.toString());
  };

  // const numberByOne = async (e1) => {
  //   if (current === "") return;
  //   console.log("numberByOne");
  //   const result = await axios.get(`${base_url}numberByOne/${current}`);
  //   setCurrent(result.data.toString());
  // };

  const sinValue = async (e1) => {
    if (current === "") return;
    console.log("sinValue");
    const result = await axios.get(`${base_url}sinValue/${current}`);
    setCurrent(result.data.toString());
  };

  const cosValue = async (e1) => {
    if (current === "") return;
    console.log("cosValue");
    const result = await axios.get(`${base_url}cosValue/${current}`);
    setCurrent(result.data.toString());
  };

  const tanValue = async (e1) => {
    if (current === "") return;
    console.log("tanValue");
    const result = await axios.get(`${base_url}tanValue/${current}`);
    setCurrent(result.data.toString());
  };

  const cosecValue = async (e1) => {
    if (current === "") return;
    console.log("cosecValue");
    const result = await axios.get(`${base_url}cosecValue/${current}`);
    setCurrent(result.data.toString());
  };
  const cotValue = async (e1) => {
    if (current === "") return;
    console.log("cotValue");
    const result = await axios.get(`${base_url}cotValue/${current}`);
    setCurrent(result.data.toString());
  };

  const secValue = async (e1) => {
    if (current === "") return;
    console.log("secValue");
    const result = await axios.get(`${base_url}secValue/${current}`);
    setCurrent(result.data.toString());
  };

  const logValue = async (e1) => {
    if (current === "") return;
    console.log("logValue");
    const result = await axios.get(`${base_url}logValue/${current}`);
    setCurrent(result.data.toString());
  };
  const piValue = async (e1) => {
    console.log("piValue");
    const result = await axios.get(`${base_url}piValue`);
    setCurrent(result.data.toString());
  };
  const tenValue = async (e1) => {
    if (current === "") return;
    console.log("tenValue");
    const result = await axios.get(`${base_url}tenValue/${current}`);
    setCurrent(result.data.toString());
  };
  const cube = async (e1) => {
    if (current === "") return;
    console.log("cube");
    const result = await axios.get(`${base_url}cube/${current}`);
    setCurrent(result.data.toString());
  };
  const equalHandler = () => {
    let value = compute();
    console.log(`value is ${value}`);
    if (value === undefined || value == null) return;
    // setCurrent(value);
    console.log(`value curent ${setCurrent}`);
    setPrevoius("");
    setOperations("");
  };
  const compute = async () => {
    // let result=parseFloat(result1);
    let num1 = parseFloat(prevoius);
    let num2 = parseFloat(current);
    if (isNaN(num1) || isNaN(num2)) return;
    switch (operations) {
      case "/":
        const div = await axios.get(`${base_url}division/${num1}/${num2}`);
        setCurrent(div.data.toString());
        break;

      case "X":
        const multi = await axios.get(
          `${base_url}multification/${num1}/${num2}`
        );
        setCurrent(multi.data.toString());
        break;

      case "+":
        const addition = await axios.get(`${base_url}addition/${num1}/${num2}`);
        setCurrent(addition.data.toString());
        break;

      case "-":
        const sub = await axios.get(
          `${base_url}subtractionion/${num1}/${num2}`
        );
        setCurrent(sub.data.toString());
        break;

      case "%":
        console.log("Percentage");
        const percentage = await axios.get(
          `${base_url}percentage/${num1}/${num2}`
        );
        setCurrent(percentage.data.toString());
        break;
      default:
        return;
    }
  };
  return (
    <>
      <Container>
        <Screen>
          <Prevoius>
            {prevoius}
            {operations}
          </Prevoius>
          <Current>{current}</Current>
        </Screen>
        <Button onClick={sinValue}>Sin</Button>
        <Button onClick={cosValue}>Cos</Button>
        <Button onClick={tanValue}>Tan</Button>
        <Button onClick={cosecValue}>Cosec</Button>
        <Button onClick={cotValue}>Cot</Button>
        <Button onClick={secValue}>Sec</Button>
        <Button onClick={tenValue}>10x</Button>
        <Button operation data={"x³"} onClick={cube}>
          x³
        </Button>
        <Button operation data={"√"} onClick={squareRootOfNumber}>
          ²√x
        </Button>

        <Button operation data={"x²"} onClick={squareOfNumber}>
          x²
        </Button>
        <Button data={1} onClick={appendValueHandler}>
          1
        </Button>
        <Button data={2} onClick={appendValueHandler}>
          2
        </Button>
        <Button data={3} onClick={appendValueHandler}>
          3
        </Button>
        <Button operation data={"/"} onClick={chooseOperationHandler}>
          /
        </Button>
        <Button onClick={piValue}>π</Button>
        <Button data={5} onClick={appendValueHandler}>
          5
        </Button>
        <Button data={6} onClick={appendValueHandler}>
          6
        </Button>
        <Button data={4} onClick={appendValueHandler}>
          4
        </Button>
        <Button operation data={"×"} onClick={chooseOperationHandler}>
          ×
        </Button>
        <Button onClick={logValue}>log</Button>
        <Button data={9} onClick={appendValueHandler}>
          9
        </Button>
        <Button data={8} onClick={appendValueHandler}>
          8
        </Button>
        <Button data={7} onClick={appendValueHandler}>
          7
        </Button>
        <Button operation data={"+"} onClick={chooseOperationHandler}>
          +
        </Button>
        <Button onClick={deleteHandler}>⌫</Button>
        <Button decimal data={"."} onClick={appendValueHandler}>
          .
        </Button>
        <Button data={0} onClick={appendValueHandler}>
          0
        </Button>
        <Button equals onClick={equalHandler}>
          =
        </Button>
        <Button operation data={"-"} onClick={chooseOperationHandler}>
          -
        </Button>
        <Button control onClick={allclearHandler}>
          AC
        </Button>
      </Container>
    </>
  );
};

export default ScientificCalculator;
