import { Select } from "antd";
import React, { useState } from "react";
import Calculator from "./Calculator";
import DateCalculator from "./DateCalculator";
import ScientificCalculator from "./ScientificCalculator";
export default function Dashboard() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSelectedCalculator(value);
  };
  const [selectedCalculator, setSelectedCalculator] = useState("Standard");
  const RenderSelectedCalculator = () => {
    switch (selectedCalculator) {
      case "Standard":
        return <Calculator />;
        break;
      case "scientific":
        return <ScientificCalculator />;
        break;
      case "date":
        return <DateCalculator />;
        break;

      default:
        return <Calculator />;
        break;
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
      }}
    >
      <Select
        defaultValue="simple"
        style={{
          width: 200,
        }}
        onChange={handleChange}
        options={[
          {
            value: "Standard",
            label: "Standard Calculator",
          },
          {
            value: "scientific",
            label: "Scientific Calculator",
          },
          {
            value: "date",
            label: "Date Calculator",
          },
        ]}
      />
      <RenderSelectedCalculator />
    </div>
  );
}
