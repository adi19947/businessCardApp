import { Typography } from "@mui/material";
import React, { memo } from "react";

export default memo(function MySpecificData({ text }) {
  console.log(text + " render");
  return (
    <div>
      <Typography variant="body1">{text}</Typography>
    </div>
  );
});
