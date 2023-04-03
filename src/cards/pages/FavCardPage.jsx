import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";

export default function FavCardPage() {
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Favorite Cards"
          subtitle="On this page you can find all your favorites cards"
        />
      </Container>
    </div>
  );
}
