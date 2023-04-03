import { Button } from "@mui/material";
import React, { memo } from "react";
function ButtonComponent({ children, handleClick }) {
  console.log("my button is rendered" + children);
  return (
    <Button onClick={handleClick} variant="outlined">
      {children}
    </Button>
  );
}

export default memo(ButtonComponent);
