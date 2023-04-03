import { Container } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { Navigate, useParams } from "react-router-dom";
import { useCardsContext } from "../../providers/CardsProvider";
import { useUser } from "../../users/providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routs/routesModel";
import CardForm from "../components/CardForm";
import initialCardForm from "../../cards/helpers/initialForms/initialCardForm";
import mapCardToModel from "../../cards/helpers/normalization/mapToModel";
import normalizeCard from "../../cards/helpers/normalization/normalizeCard";
import cardSchema from "../../cards/models/joi-schema/cardSchema";

export default function EditCardPage() {
  const { id } = useParams();
  const { handleUpdateCard, handleGetCard, card } = useCardsContext();
  const { user } = useUser();
  const { value, ...rest } = useForm(initialCardForm, cardSchema, () => {
    handleUpdateCard(card._id, {
      ...normalizeCard({ ...value.data }),
      bizNumber: card.bizNumber,
      user_id: card.user_id,
    });
  });

  //useEffect - update the form data to this card data
  useEffect(() => {
    handleGetCard(id).then((data) => {
      const modelCard = mapCardToModel(data);
      rest.setData(modelCard);
    });
  }, []);
  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="edit card"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
      />
    </Container>
  );
}
