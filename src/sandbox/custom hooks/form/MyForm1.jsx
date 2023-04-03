import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function MyForm1() {
  const [data, setData] = useState({ firstName: "", lastName: "" });

  const handleName = ({ target: { name, value } }) => {
    const fieldName = name;

    setData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return (
    <div style={{ margin: "10px" }}>
      <TextField
        name="firstName"
        label="First name"
        value={data.firstName}
        onChange={handleName}
      />
      <TextField
        name="lastName"
        label="Last name"
        value={data.lastName}
        onChange={handleName}
      />
    </div>
  );
}
