import React, { useState } from "react";
import CardBussinesComponent from "./card/CardBussinesComponent";
import Grid from "@mui/material/Grid";

import { useCardsContext } from "../../providers/CardsProvider";

export default function Cards({ cards }) {
  const { handleDeleteCard, handleGetCards, value } = useCardsContext();
  const { filteredCards } = value;
  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    handleGetCards();
  };

  const handleEdit = (id) => {
    console.log(`Card ${id} is Edited`);
  };

  return (
    <>
      <Grid container spacing={2}>
        {cards?.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CardBussinesComponent
              card={card}
              key={card._id}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
