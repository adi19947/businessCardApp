import React from "react";
import Typography from "@mui/material/Typography";

export default function LoopComponent() {
  let arr = ["one", "two", "three"];
  return (
    <>
      <div>
        {arr.map((value) => (
          <Typography variant="body1" color="initial" key={value}>
            {value}
          </Typography>
        ))}
      </div>
    </>
  );
}
