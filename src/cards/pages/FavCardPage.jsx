import { Container } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { useCardsContext } from "../../providers/CardsProvider";
import CardsFeedback from "../components/CardsFeedback";

export default function FavCardPage() {
  const { value, handleGetFavCards } = useCardsContext();
  const { isLoading, error, favCards, filteredCards } = value;

  useEffect(() => {
    handleGetFavCards();
  }, []);

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Favorite Cards"
          subtitle="On this page you can find all your favorites cards"
        />

        <CardsFeedback isLoading={isLoading} error={error} cards={favCards} />
      </Container>
    </div>
  );
}
