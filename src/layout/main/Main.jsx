import { Box, IconButton } from "@mui/material";
import { node } from "prop-types";
import React from "react";
import { useTheme } from "../../providers/ThemeProvider";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routs/routesModel";
import { useUser } from "../../users/providers/UserProvider";
export default function Main({ children }) {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <>
      <Box
        sx={{
          minHeight: "85vh",
          backgroundColor: isDark ? "#333333" : "#e3f2fd",
        }}
      >
        {children}
        {user?.isBusiness ? (
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "fixed",
              bottom: 70,
              right: 10,
            }}
          >
            <IconButton onClick={() => navigate(`${ROUTES.CREATE_CARD}`)}>
              <AddCircleSharpIcon
                sx={{
                  color: "#1976d2",
                  fontSize: "4rem",
                }}
              />
            </IconButton>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

Main.propTypes = {
  children: node.isRequired,
};
