import { CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { useCardsContext } from "../../providers/CardsProvider";
import CardHead from "../components/card/CardHead";

export default function CardDetailsPage() {
  const { id } = useParams();
  const { value } = useCardsContext();
  const { cards } = value;

  const myCard = cards?.find((card) => {
    return card._id == id;
  });

  return (
    <>
      <PageHeader
        title="Card details"
        subtitle="Here you can find all the details about specific card"
      />
      <Container>
        <CardHead image={myCard.image} />
      </Container>
    </>
  );
}
