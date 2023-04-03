import { Typography } from "@mui/material";
import React from "react";
import Spinner from "../../cards/components/Spinner";
import Error from "../../cards/components/Error";
import Cards from "../../cards/components/Cards";

export default function CardsFeedback({ isLoading, cards, error }) {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length === 0) {
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );
  }
  if (cards) return <Cards cards={cards} />;
  return null;
}
