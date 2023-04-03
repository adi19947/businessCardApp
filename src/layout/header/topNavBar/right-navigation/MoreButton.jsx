import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useMenuContext } from "../../../../providers/MenuProvider";
import Menu from "../menu/Menu";

const MoreButton = () => {
  const { handleToggle } = useMenuContext();
  return (
    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
      <IconButton
        onClick={handleToggle}
        size="large"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: "inline-flex", md: "none" } }}
      >
        <MoreVertIcon />
      </IconButton>
      <Box sx={{ position: "absolute", right: 0, top: 68 }}>
        <Menu />
      </Box>
    </Box>
  );
};

export default MoreButton;
