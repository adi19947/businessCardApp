import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavBarLink from "../../../../routs/components/NavBarLink";
import ROUTES from "../../../../routs/routesModel";
import { useTheme } from "../../../../providers/ThemeProvider";

export default function Logo() {
  const { isDark } = useTheme();
  return (
    <>
      <NavBarLink to={ROUTES.ROOT} sx={{ color: "black" }}>
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", md: "inline-flex" },
            marginRight: 2,
            fontFamily: "fantasy",
            color: isDark ? "white" : "black",
          }}
        >
          BCard
        </Typography>
      </NavBarLink>
    </>
  );
}
