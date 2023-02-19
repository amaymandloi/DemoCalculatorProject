import React, { useState } from "react";
import { Container, Screen, Prevoius, Current, Button } from "./style";
import axios from "axios";
import base_url from "../baseapi/baseapi";

const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [prevoius, setPrevoius] = useState("");
  const [operations, setOperations] = useState("");
  //const [result, setResult] = useState("");

  const appendValueHandler = (el) => {
    console.log("btn click");
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
    //  setResult("");
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

  const percentage = async (el) => {
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

  const numberByOne = async (e1) => {
    if (current === "") return;
    console.log("numberByOne");
    const result = await axios.get(`${base_url}numberByOne/${current}`);
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
        const divresult = await axios.get(
          `${base_url}division/${num1}/${num2}`
        );
        setCurrent(divresult.data.toString());
        break;

      case "X":
        const mulresult = await axios.get(
          `${base_url}multification/${num1}/${num2}`
        );
        setCurrent(mulresult.data.toString());
        break;

      case "+":
        const sumresult = await axios.get(
          `${base_url}addition/${num1}/${num2}`
        );
        setCurrent(sumresult.data.toString());
        break;

      case "-":
        const subresult = await axios.get(
          `${base_url}subtractionion/${num1}/${num2}`
        );
        setCurrent(subresult.data.toString());
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

    // return result;
  };

  //console.log(compute());

  return (
    // memory:null,
    <>
      <Container>
        <Screen>
          <Prevoius>
            {prevoius}
            {operations}
          </Prevoius>
          <Current>{current}</Current>
        </Screen>

      <Button>MR</Button>
        <Button>M+</Button>
        <Button>M-</Button>
        <Button>MC</Button>
        <Button control onClick={allclearHandler}>
          AC
        </Button>

        <Button operation data={"x²"} onClick={squareOfNumber}>
          x²
        </Button>

        <Button operation data={"√"} onClick={squareRootOfNumber}>
          ²√x
        </Button>
        <Button del onClick={deleteHandler}>
          ⌫
        </Button>
        <Button operation data={"1/x"} onClick={numberByOne}>
          1/x
        </Button>
        <Button operation data={"%"} onClick={percentage}>
          %
        </Button>
        <Button operation data={"/"} onClick={chooseOperationHandler}>
          /
        </Button>
        <Button blank onClick={deleteHandler}></Button>

        <Button data={1} onClick={appendValueHandler}>
          1
        </Button>
        <Button data={2} onClick={appendValueHandler}>
          2
        </Button>
        <Button data={3} onClick={appendValueHandler}>
          3
        </Button>

        <Button operation data={"X"} onClick={chooseOperationHandler}>
          X
        </Button>
        <Button data={4} onClick={appendValueHandler}>
          4
        </Button>
        <Button data={5} onClick={appendValueHandler}>
          5
        </Button>
        <Button data={6} onClick={appendValueHandler}>
          6
        </Button>
        <Button operation data={"-"} onClick={chooseOperationHandler}>
          -
        </Button>
        <Button data={7} onClick={appendValueHandler}>
          7
        </Button>

        <Button data={8} onClick={appendValueHandler}>
          8
        </Button>
        <Button data={9} onClick={appendValueHandler}>
          9
        </Button>

        <Button operation data={"+"} onClick={chooseOperationHandler}>
          +
        </Button>
        <Button decimal data={"."} onClick={appendValueHandler}>
          .
        </Button>
        <Button data={0} onClick={appendValueHandler}>
          0
        </Button>

        <Button equals onClick={equalHandler}>
          =
        </Button>
      </Container>
    </>
  );
};

export default Calculator;
