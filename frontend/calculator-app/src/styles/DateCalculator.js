import React from "react";
import { Select, DatePicker, Card } from "antd";
import { useState } from "react";
import moment from "moment";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const dateFormat = "YYYY/MM/DD";

export default function DateCalculator() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [different, setDifferent] = useState(0);
  const [str, setStr] = useState(0);

  console.log("startdate", moment(new Date(startDate)).format("DD-MM-YYYY"));

  console.log("endate", moment(new Date(endDate)).format("DD-MM-YYYY"));

  const differentData = (date) => {
    let different = date.diff(startDate, "days");
    console.log("Different", different);
    setDifferent(different);
    let str = getFormatedStringFromDays(different);
    console.log("str", str);
    setStr(str);
  };

  function getFormatedStringFromDays(numberOfDays) {
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor((numberOfDays % 365) / 30);
    var days = Math.floor((numberOfDays % 365) % 30);
    return ["Years : ", years, " Months : ", months, " Days : ", days];
  }

  return (
    <>
      <Card
        style={{
          width: 500,
          marginTop: "24px",
          borderColor: "#000",
        }}
      >
        <div>
          <h2 style={{ textAlign: "center" }}>Date Calculation</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Select
              defaultValue="Difference Between Dates"
              bordered="false"
              style={{
                width: 300,
              }}
              // onChange={handleChange}
              options={[
                {
                  value: "Difference Between Dates",
                  label: "Difference Between Dates",
                },
                {
                  value: "Add or Subtract Days",
                  label: "Add or Subtract Days",
                },
              ]}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontWeight: "bold",
              }}
            >
              From
            </p>
            <DatePicker
              format={dateFormat}
              onChange={(date) => {
                setStartDate(moment(new Date(date)));
                differentData(moment(new Date(date)));
              }}
            />

            <p
              style={{
                fontWeight: "bold",
              }}
            >
              To
            </p>
            <DatePicker
              format={dateFormat}
              onChange={(date) => {
                setEndDate(moment(new Date(date)));
                differentData(moment(new Date(date)));
              }}
            />

            <p
              style={{
                fontWeight: "bold",
              }}
            >
              Difference
            </p>
            <p
              style={{
                fontWeight: "bold",
              }}
            >
              {str}
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}
