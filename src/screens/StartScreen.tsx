import { Button, Typography } from "@mui/material";
import React from "react";
import "./StartScreen.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateWeatherCard from "../components/DateWeatherCard";

function StartScreen() {
  const [latitude, setLatitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);
  const [ubicacion, setUbicacion] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(savePositions);
    } else {
      console.log("error obteniendo los coordenadas");
    }
  });

  function savePositions(position: any) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  React.useEffect(() => {
    fetch(`/api/location/search/?lattlong=${latitude},${longitude}`)
      .then((res) => res.json())
      .then((json) => {
        setUbicacion(json[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [latitude, longitude]);

  console.log(ubicacion);

  return (
    <div className="StartScreen">
      <div className="left__side">
        <Button variant="contained" size="small">
          Buscar un lugar
        </Button>
        <div className="image__weather">
          <img
            src="https://www.metaweather.com/static/img/weather/s.svg"
            alt="img_url"
          />
        </div>
        <div className="degrees__weather">
          <Typography variant="h3">15°C</Typography>
          <Typography variant="subtitle1">Tormentas intensas</Typography>
        </div>
        <div className="date__weather">
          <Typography variant="subtitle1">Today · March 5</Typography>
        </div>
        <div className="location__weather">
          <LocationOnIcon />
          <Typography variant="body1">Buenos Aires</Typography>
        </div>
      </div>
      <div className="right__side">
        <div className="dates__weather">
          <DateWeatherCard />
          <DateWeatherCard />
          <DateWeatherCard />
          <DateWeatherCard />
        </div>
        <div className="today__info">
          <Typography variant="h5">Today's Hightlights</Typography>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
