import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ROUTES from "../routs/routesModel";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Container sx={{ p: "2rem" }}>
      <PageHeader title="ERROR PAGE" subtitle="Page not found" />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{ mt: "1rem" }}>
            Oops..The requested URL was not found on this server
          </Typography>
          <Button onClick={() => navigate(ROUTES.ROOT)}>
            Click here to return home page
          </Button>
        </Box>
        <Box>
          <img src="assets/images/error.jpg" style={{ width: "20rem" }}></img>
        </Box>
      </Box>
    </Container>
  );
}

//ERROR PAGE
//Page not found
