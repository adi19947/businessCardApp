import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";

import Spinner from "./../../cards/components/Spinner";
import Error from "./../../cards/components/Error";

import CardsFeedback from "../components/CardsFeedback";
import { useCardsContext } from "../../providers/CardsProvider";

export default function CardPage() {
  const { value, handleGetCards } = useCardsContext();
  const { filteredCards, error, isLoading } = value;

  useEffect(() => {
    handleGetCards();
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;

  return (
    <Box>
      <Container
        sx={{
          mt: 2,
        }}
      >
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all business cards from all categories"
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filteredCards}
        />
      </Container>
    </Box>
  );
}
