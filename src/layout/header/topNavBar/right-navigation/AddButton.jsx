import React from "react";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../../routs/routesModel";

export default function AddButton() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
      <IconButton
        sx={{ display: { xs: "inline-flex", md: "none" } }}
        onClick={() => navigate(`${ROUTES.CREATE_CARD}`)}
      >
        <AddCircleSharpIcon
          sx={{
            color: "white",
          }}
        />
      </IconButton>
    </Box>
  );
}
