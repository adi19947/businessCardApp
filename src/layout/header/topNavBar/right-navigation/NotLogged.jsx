import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routs/components/NavItem";
import ROUTES from "../../../../routs/routesModel";
export default function NotLogged() {
  return (
    <Box
      sx={{
        p: 0,
        marginLeft: 2,
        gap: 2,
        display: { xs: "none", md: "inline-flex" },
        alignItems: "center",
      }}
    >
      <NavItem to={ROUTES.LOGIN} label="LOGIN" />
      <NavItem to={ROUTES.SIGN_UP} label="SIGN-UP" />
    </Box>
  );
}
