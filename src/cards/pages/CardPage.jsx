import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";

import Spinner from "./../../cards/components/Spinner";
import Error from "./../../cards/components/Error";

import CardsFeedback from "../components/CardsFeedback";
import { useCardsContext } from "../../providers/CardsProvider";

export default function CardPage() {
  const { cards, isLoading, error, handleGetCards } = useCardsContext();

  useEffect(() => {
    handleGetCards();
  }, []);
  const handleDelete = (id) => {
    console.log(`card ${id} deleted`);
  };

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={cards}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
}
