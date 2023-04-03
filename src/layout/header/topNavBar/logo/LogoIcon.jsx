import { Avatar, IconButton } from "@mui/material";
import React from "react";
import NavBarLink from "../../../../routs/components/NavBarLink";
import ROUTES from "../../../../routs/routesModel";

export default function LogoIcon() {
  return (
    <>
      <NavBarLink to={ROUTES.ROOT}>
        <IconButton>
          <Avatar
            src="/assets/images/business-card.png"
            alt="business-card icon"
          />
        </IconButton>
      </NavBarLink>
    </>
  );
}
