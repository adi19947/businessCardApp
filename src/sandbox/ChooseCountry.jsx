import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import Country from "./effect-hook/Country";

export default function ChooseCountry() {
  const [countryName, setCountryName] = useState("");
  const [country, setCountry] = useState(null);

  const handleChange = (e) => {
    setCountryName(e.target.value);
    console.log(countryName);
  };

  useEffect(() => {
    const fetchData = async (countryName) => {
      let result = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      result = await result.json();

      return result[0];
    };
    if (countryName != "") {
      fetchData(countryName)
        .then((value) => setCountry(value))
        .catch((err) => {
          console.log(err);
        });
    }
  }, [countryName]);

  return (
    <>
      <FormControl fullWidth sx={{ mt: "3rem" }}>
        <InputLabel>country</InputLabel>
        <Select value={countryName} onChange={handleChange}>
          <MenuItem value="israel">israel</MenuItem>
          <MenuItem value="japan">japan</MenuItem>
          <MenuItem value="brazil">brazil</MenuItem>
        </Select>
      </FormControl>
      <Country country={country} />
    </>
  );
}
