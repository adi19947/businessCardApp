import React, { useEffect } from "react";
import { useUser } from "../providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routs/routesModel";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import mapCardToModel from "../../cards/helpers/normalization/mapToModel";
import { getUser } from "../services/localStorageService";

import cardSchema from "../../cards/models/joi-schema/cardSchema";
import CardForm from "../../cards/components/CardForm";
import mapUserToModel from "../helpers/normalization/mapUserToModel";
import UserForm from "../components/UserForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/joi-schema/signupSchema";
import useUsers from "../hooks/useUsers";
import normalizeUser from "../helpers/normalization/normalizeUser";

export default function EditProfile() {
  const { user } = useUser();
  const { handleUpdateUser } = useUsers();
  const { value, ...rest } = useForm(initialSignupForm, signupSchema, () => {
    console.log({ ...normalizeUser({ ...value.data }) });

    handleUpdateUser(user.id, { ...normalizeUser({ ...value.data }) });
  });

  // console.log(user.id);
  console.log(user);
  useEffect(() => {
    const modelUser = user && mapUserToModel(user);
    rest.setData(modelUser);
  }, []);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <>
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UserForm
          title="edit profile"
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
