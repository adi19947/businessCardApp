import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routs/components/NavItem";
import ROUTES from "../../../../routs/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";
import { useNavigate } from "react-router-dom";

export default function LeftNavBar() {
  const { user } = useUser();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <LogoIcon />
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
            alignItems: "center",
          },
        }}
      >
        <Logo />
        {user && <NavItem to={ROUTES.CARDS} label="CARDS" />}
        <NavItem to={ROUTES.ABOUT} label="ABOUT" />
        {user && <NavItem to={ROUTES.FAV_CARDS} label="favorites" />}
        {user && user.isBusiness ? (
          <NavItem to={ROUTES.MY_CARDS} label="MY Cards" />
        ) : null}
        {user && user.isAdmin ? (
          <NavItem to={ROUTES.SANDBOX} label="sandbox" />
        ) : null}
        {user && user.isAdmin ? (
          <NavItem to={ROUTES.USERS} label="users management" />
        ) : null}
      </Box>
    </Box>
  );
}
