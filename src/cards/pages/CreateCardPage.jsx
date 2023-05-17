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

export default function CreateCardPage() {
  const { handleCreateCard } = useCardsContext();
  const { user } = useUser();
  const { value, ...rest } = useForm(initialCardForm, cardSchema, () => {
    handleCreateCard({
      ...normalizeCard({
        ...value.data,
        ...(value.data.likes = []),
        ...(value.data.bizNumber = 1),
        ...(value.data.user_id = user.id),
      }),
    });
  });

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <>
      <PageHeader />
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardForm
          title="create card"
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          errors={value.errors}
          onFormChange={rest.validateForm}
          onInputChange={rest.handleChange}
          data={value.data}
        />
      </Container>
    </>
  );
}
