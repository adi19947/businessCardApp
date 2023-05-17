import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { useCardsContext } from "../../providers/CardsProvider";
import {
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "../../providers/ThemeProvider";
import {
  Description,
  Email,
  LocationCity,
  PhoneAndroid,
  Web,
} from "@mui/icons-material";
import Map from "../map/Map";

export default function CardDetailsPage() {
  const { id } = useParams();
  const { value } = useCardsContext();
  const { isDark } = useTheme();
  const { filteredCards } = value;

  const myCard = filteredCards?.find((card) => {
    return card._id == id;
  });
  const { address } = myCard;
  const mapSectionStyle = {
    width: "100%",
    height: "25rem", // Adjust as needed
    margin: "20px",
    marginTop: "4rem",
  };

  return (
    <>
      <Container maxWidth="md" style={{ marginTop: "2rem" }}>
        <PageHeader
          title="Card details"
          subtitle="Here you can find all the details about specific card"
        />
        <Paper
          elevation={3}
          style={{
            padding: "2rem",
            backgroundColor: isDark ? "#333333" : "#B4DAF6",
          }}
        >
          <Grid
            container
            spacing={3}
            justify="center"
            alignItems="center"
            lineHeight={4}
          >
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" component="h1">
                {myCard.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {myCard.subtitle}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  src={`/${myCard.image.url}`} // Replace with the actual image path
                  alt="business card image"
                  sx={{ md: { display: "none" } }}
                />
              </Card>

              {/* <img
                src={`/${myCard.image.url}`}
                alt="business card image"
                style={{ width: "90%", height: "20rem", borderRadius: "50%" }}
              /> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ lineHeight: 3 }}>
                <PhoneAndroid /> {myCard.phone}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 3 }}>
                <Email /> {myCard.email}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 3 }}>
                <LocationCity /> {address.country} , {address.city} ,
                {address.street} {address.houseNumber}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ lineHeight: 3 }}>
                <Description /> {myCard.description}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 3 }}>
                <Web /> {myCard.web}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 3 }}>
                <strong> Zip: </strong>
                {address.zip}
              </Typography>
            </Grid>

            <div style={mapSectionStyle}>
              <Map
                center={[51.505, -0.09]}
                zoom={13}
                address={`${address.city} ${address.street} ${address.houseNumber}`}
              />
            </div>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
