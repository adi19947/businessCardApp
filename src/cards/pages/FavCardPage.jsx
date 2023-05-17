import { Container } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { useCardsContext } from "../../providers/CardsProvider";
import CardsFeedback from "../components/CardsFeedback";
import { useUser } from "../../users/providers/UserProvider";

export default function FavCardPage() {
  const { value, handleGetFavCards } = useCardsContext();
  const { user } = useUser();
  const { isLoading, error, favCards } = value;

  useEffect(() => {
    handleGetFavCards();
  }, [user]);

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
