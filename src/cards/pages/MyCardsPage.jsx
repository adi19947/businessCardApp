import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { useCardsContext } from "../../providers/CardsProvider";
import ROUTES from "../../routs/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import CardsFeedback from "../components/CardsFeedback";

export default function MyCards() {
  const { value, handleGetMyCards } = useCardsContext();
  const { filteredCards, error, isLoading } = value;
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.CARDS);
    } else {
      handleGetMyCards();
    }
  }, [user]);
  console.log(filteredCards);
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="My Cards"
          subtitle="On this page you can find your business cards"
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filteredCards}
        />
      </Container>
    </div>
  );
}
