import { Button } from "@mui/material";
import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>The number is {counter}</p>
      <Button
        variant="outlined"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        increment+
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        decrement-
      </Button>
    </>
  );
}
