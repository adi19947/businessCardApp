import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import MySpecificData from "./MySpecificData";

export default function Data() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        +
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        -
      </Button>
      <Typography>{counter}</Typography>
      <MySpecificData text="hello"></MySpecificData>
      <MySpecificData text="bye"></MySpecificData>
    </div>
  );
}
