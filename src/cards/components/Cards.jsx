import React, { useState } from "react";
import CardBussinesComponent from "./card/CardBussinesComponent";
import Grid from "@mui/material/Grid";

import { useCardsContext } from "../../providers/CardsProvider";

export default function Cards() {
  const { handleDeleteCard, handleGetCards, value } = useCardsContext();
  const { cards } = value;
  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    handleGetCards();
  };
  console.log(cards);
  const handleEdit = (id) => {
    console.log(`Card ${id} is Edited`);
  };
  const handleLike = (id) => {
    console.log(`Card ${id} is Liked`);
  };

  return (
    <>
      <Grid container spacing={2}>
        {cards?.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CardBussinesComponent
              card={card}
              key={card._id}
              handleEdit={handleEdit}
              handleLike={handleLike}
              handleDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
