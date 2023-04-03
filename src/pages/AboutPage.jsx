import { Container, Grid, Typography } from "@mui/material";
import { display } from "@mui/system";
import React from "react";
import PageHeader from "../components/PageHeader";
export default function AboutPage() {
  return (
    <div>
      <Container>
        <PageHeader title="About Page" subtitle="explanation" />

        <Grid container spacing={2}>
          <Grid item xs={12} md={8} alignSelf="center">
            <Typography>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
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
