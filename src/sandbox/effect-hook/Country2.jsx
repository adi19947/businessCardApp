import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Country2() {
  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");

  const getFirstCountry = async () => {
    let result = fetch();
  };

  return (
    <div>
      <TextField
        onChange={(e) => {
          setCountry1(e.target.value);
        }}
      />
      <Button>Click</Button>
      <br />
      <br />
      <TextField
        onChange={(e) => {
          setCountry2(e.target.value);
        }}
      />
      <Button>click</Button>
    </div>
  );
}
