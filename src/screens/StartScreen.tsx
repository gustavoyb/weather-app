import { Button, Typography } from "@mui/material";
import React from "react";
import "./StartScreen.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function StartScreen() {
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
          <div>chau</div>
        </div>
      </div>
  );
}

export default StartScreen;
