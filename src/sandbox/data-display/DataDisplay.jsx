import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavItem from "../../routs/components/NavItem";

export default function DataDisplay() {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            to="cardcomponent"
            label="My Card Page"
            sx={{ color: "black" }}
          />
          <NavItem to="stackcomp" label="Stack Page" sx={{ color: "black" }} />
          <NavItem
            to="typographycomp"
            label="Typography Page"
            sx={{ color: "black" }}
          />
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
