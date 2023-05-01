import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { useCardsContext } from "../../providers/CardsProvider";

export default function CardDetailsPage() {
  const { id } = useParams();
  const { value } = useCardsContext();
  const { filteredCards } = value;

  const myCard = filteredCards?.find((card) => {
    return card._id == id;
  });
  console.log(myCard);
  return (
    <>
      <PageHeader
        title="Card details"
        subtitle="Here you can find all the details about specific card"
      />

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <img
            src={`/${myCard.image.url}`}
            alt="business card image"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "20%" }}
          />
        </Box>
      </Container>
    </>
  );
}
