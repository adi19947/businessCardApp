import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";

import RightNavBar from "./right-navigation/RightNavBar";
import SearchBar from "./search-bar/SearchBar";

export default function NavBar() {
  return (
    <AppBar position="sticky" color="primary" elevation={10}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LeftNavBar />
        <SearchBar />
        <RightNavBar />
      </Toolbar>
    </AppBar>
  );
}
