import React from "react";
import { MenuProvider } from "../../providers/MenuProvider";
import LeftNavBar from "./topNavBar/left-navigation/LeftNavBar";
import Logo from "./topNavBar/logo/Logo";
import LogoIcon from "./topNavBar/logo/LogoIcon";
import NavBar from "./topNavBar/NavBar";

export default function Header() {
  return (
    <div>
      <MenuProvider>
        <NavBar />
      </MenuProvider>
    </div>
  );
}
