import React, { useEffect, useState } from "react";

import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Country from "./Country";
import Country2 from "./Country2";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, [refresh]);

  return (
    <div>
      <Button onClick={() => setRefresh(!refresh)}>Refresh</Button>
      {countries.map((country) => {
        return <Country country={country} key={JSON.stringify(country)} />;
      })}
    </div>
  );
}
