import React from "react";
import SliderComponent from "./Common/SliderComponent";

export default function ({ data, setData }) {
  return (
    <>
      <SliderComponent
        label="Home value"
        unit="$"
        amount={data.homeValue}
        defaultValue={data.homeValue}
        min={1000}
        max={10000}
        step={500}
        value={data.homeValue}
        onchange={(e, value) => {
          setData({
            ...data,
            downPayment: value * (data.intrestRate / 100),
            loanAmount: value * (1 - data.intrestRate / 100),
            homeValue: value
          });
        }}
      />
      <SliderComponent
        label="Down payment"
        unit="$"
        amount={data.downPayment}
        defaultValue={data.downPayment}
        min={0}
        max={data.homeValue}
        step={500}
        value={data.downPayment}
        onchange={(e, value) => {
          setData({
            ...data,
            loanAmount: data.homeValue - value,
            downPayment: value
          });
        }}
      />
      <SliderComponent
        label="Loan Amount"
        unit="$"
        amount={data.loanAmount}
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        step={500}
        value={data.loanAmount}
        onchange={(e, value) => {
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value
          });
        }}
      />
      <SliderComponent
        label="Intrest Rate"
        unit="%"
        amount={data.intrestRate}
        defaultValue={data.intrestRate}
        min={2}
        max={18}
        step={2}
        value={data.intrestRate}
        onchange={(e, value) => {
          setData({
            ...data,
            intrestRate: value
          });
        }}
      />
    </>
  );
}
