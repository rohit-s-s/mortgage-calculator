import * as React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

export default function SliderSizes({
  defaultValue,
  min,
  max,
  step,
  label,
  unit,
  onchange,
  value,
  amount
}) {
  return (
    <>
      <Stack alignItems="start">
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h6">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        min={min}
        max={max}
        step={step}
        onChange={onchange}
        value={value}
        marks
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit}
          {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit}
          {max}
        </Typography>
      </Stack>
    </>
  );
}
