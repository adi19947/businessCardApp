import { Container } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routs/routesModel";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import useUsers from "../hooks/useUsers";
import loginSchema from "../models/joi-schema/loginSchema";
import { useUser } from "../providers/UserProvider";

export default function LoginPage() {
  const { handleLogin } = useUsers();
  const { user } = useUser();
  const { value, onSubmit, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );
  if (user) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <>
      <PageHeader title="Welcome to login page" subtitle="login page" />

      <Container
        sx={{
          pt: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          title="LOGIN"
          onSubmit={onSubmit}
          onReset={rest.handleReset}
          styles={{ maxWidth: "450px" }}
          onChange={rest.validateForm}
          to={ROUTES.CARDS}
        >
          <Input
            label="Email"
            name="email"
            type="email"
            data={value.data}
            error={value.errors.email}
            onChange={rest.handleChange}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            data={value.data}
            error={value.errors.password}
            onChange={rest.handleChange}
          />
        </Form>
      </Container>
    </>
  );
}
