import React from "react";
import Container from "@mui/material/Container";
import Form from "../../forms/components/Form";
import useForm from "../../forms/hooks/useForm";
import Joi from "joi";
import Input from "../../forms/components/Input";
import ROUTES from "../../routs/routesModel";

export default function LoginComp() {
  const INITIAL_FORM = {
    email: "",
    password: "",
  };

  const schema = {
    email: Joi.string().min(2).required(),
    password: Joi.string().min(2).max(7).required(),
  };
  const handleSubmit = (data) => console.log(data);

  const { value, ...rest } = useForm(INITIAL_FORM, schema, handleSubmit);

  return (
    <Container
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="LOGIN"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        styles={{ maxWidth: "450px" }}
        onChange={rest.validateForm}
        to={ROUTES.SANDBOX}
      >
        <Input
          label="Email"
          name="email"
          data={value.data}
          error={value.errors.email}
          onChange={rest.handleChange}
        />
        <Input
          label="Password"
          name="password"
          data={value.data}
          error={value.errors.password}
          onChange={rest.handleChange}
        />
      </Form>
    </Container>
  );
}
