import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import React, { useState } from "react";

export default function Form() {
  const [data, setData] = useState({ firstName: "", lastName: "" });

  const handleChangeFirsName = ({ target }) => {
    setData((prev) => ({ ...prev, firstName: target.value }));
  };
  const handleChangeLastName = ({ target }) => {
    setData((prev) => ({ ...prev, lastName: target.value }));
  };

  console.log(data);

  return (
    <Container
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box component="form" sx={{ mt: 2, p: { xs: 1, sm: 2 } }}>
        <Typography align="center" variant="h5" component="h1" mb={2}>
          Example Form
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              name="firstName"
              label="First Name"
              type="text"
              fullWidth
              onChange={handleChangeFirsName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="lastName"
              label="Last Name"
              type="text"
              fullWidth
              onChange={handleChangeLastName}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} my={2} direction="row" width="100">
          <Grid item xs={12} sm={6}>
            <Button color="error" component="div" variant="outlined" fullWidth>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" component="div" fullWidth>
              {<LoopIcon />}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
