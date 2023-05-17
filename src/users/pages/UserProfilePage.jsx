import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

import { useUser } from "../providers/UserProvider";
import PageHeader from "../../components/PageHeader";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routs/routesModel";
import { useTheme } from "../../providers/ThemeProvider";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    gap: "1rem",
    marginTop: "2rem",
  },
  paper: {
    padding: "2rem",
    border: "2px solid black",

    fontStyle: "italic",
  },
  avatar: {
    width: "12rem",
    height: "12rem",
    marginBottom: "1rem",
    border: "2px solid black",
  },
  button: {
    marginTop: "1rem",
  },
};

function UserProfilePage() {
  const { user } = useUser();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <Container>
      <PageHeader
        title="profile page"
        subtitle="Here you can find your profile details"
      />
      <div style={styles.root}>
        <Avatar alt="lol" src={user?.image} style={styles.avatar} />

        <Paper
          style={styles.paper}
          sx={{ backgroundColor: isDark ? "#333333" : "#B4DAF6" }}
          elevation={10}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ textDecoration: "underLine" }}
          >
            {user?.firstName} {user?.lastName}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <strong>Email:</strong> {user?.email}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>County: </strong>
            {user?.address.country}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong> City: </strong>
            {user?.address.city}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong> Street: </strong>
            {user?.address.street}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>House-number: </strong>
            {user?.address.houseNumber}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong> Zip: </strong>
            {user?.address.zip}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong> Business Account: </strong>
            {user?.isBusiness ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong> Admin: </strong>
            {user?.isAdmin ? "Yes" : "No"}
          </Typography>
        </Paper>
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={() => navigate(ROUTES.EDIT_USER)}
        >
          Edit Profile
        </Button>
      </div>
    </Container>
  );
}

export default UserProfilePage;
