import { AppBar, Container, Toolbar } from "@mui/material";

import React from "react";
import { Outlet } from "react-router-dom";
import NavItem from "../routs/components/NavItem";
export default function SandBox() {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to="counter" label="Counter Page" sx={{ color: "black" }} />
          <NavItem
            to="mydetails"
            label="My Details Page"
            sx={{ color: "black" }}
          />
          <NavItem
            to="password"
            label="Password Page"
            sx={{ color: "black" }}
          />
          <NavItem to="todo" label="Todo Page" sx={{ color: "black" }} />
          <NavItem
            to="countries"
            label="countries Page"
            sx={{ color: "black" }}
          />
          <NavItem
            to="datadisplay"
            label="data display Page"
            sx={{ color: "black" }}
          />
          <NavItem
            to="weather"
            label="weather display Page"
            sx={{ color: "black" }}
          />
          <NavItem to="render" label="render page" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
