import { Container, Grid, Typography } from "@mui/material";
import { display } from "@mui/system";
import React from "react";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../providers/ThemeProvider";
export default function AboutPage() {
  const { isDark } = useTheme();
  return (
    <div>
      <Container>
        <PageHeader title="About Page" subtitle="explanation" />

        <Grid container spacing={2}>
          <Grid item xs={12} md={8} alignSelf="center">
            <Typography sx={{ color: isDark ? "white" : "black" }}>
              Welcome to our Business Card App! Our app is designed to provide a
              hassle-free experience for creating and designing your own
              personalized business cards. We understand the importance of
              having a professional and unique business card to represent your
              brand and make a lasting impression on potential clients. With our
              user-friendly interface, you can easily choose from a variety of
              customizable templates, add your own logo or images, and enter
              your personal information such as name, job title, and contact
              details. Our app allowing you to create a card that truly
              represents your brand and style. In addition to creating and
              designing your own business card. Our team is dedicated to
              providing excellent customer service and ensuring that our app
              meets your needs. If you have any questions or concerns, please
              don't hesitate to contact us. We value your feedback and are
              always looking for ways to improve our app and provide the best
              possible experience for our users. Thank you for choosing our
              Business Card App. We look forward to helping you create a
              professional and memorable business card that will make a lasting
              impression on potential clients.
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
            }}
          >
            <img src="/assets/images/card.jpg" alt="card" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
