import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
export default function StackComp() {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </Stack>
    </>
  );
}
