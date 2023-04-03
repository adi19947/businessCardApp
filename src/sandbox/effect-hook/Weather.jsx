import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Weather() {
  const myApiKey = "764212f7c449113806a2306552e5a007";
  const [cityName, setCityName] = useState("");

  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  function fetchData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myApiKey}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    console.log(cityName);
  }, [cityName]);

  //   useEffect(async () => {
  //     const result = await axios();
  //     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myApiKey}`
  //   }, []);
  return (
    <div>
      <TextField
        value={cityName}
        onChange={(event) => setCityName(event.target.value)}
      />
      <Button onClick={fetchData}>Click</Button>
    </div>
  );
}
