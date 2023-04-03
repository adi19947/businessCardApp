import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";

export default function CreateCardPage() {
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Create Card"
          subtitle="On this page you can create cards"
        />
      </Container>
    </div>
  );
}
