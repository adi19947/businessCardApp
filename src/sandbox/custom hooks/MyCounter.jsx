import { Button, Typography } from "@mui/material";
import React from "react";
import useCounter from "./useCounter";

export default function MyCounter() {
  const { value, increment, decrement, reset } = useCounter();
  return (
    <div>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={reset}>reset</Button>
      <Typography>{value}</Typography>
    </div>
  );
}
