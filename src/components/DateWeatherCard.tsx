import React from "react";
import "./DateWeatherCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function DateWeatherCard(){
  return (
    <Card sx={{ maxWidth: 120, maxHeight:160, backgroundColor: '#1e213a' }}>
      <CardContent className="card">
        <Typography gutterBottom variant="body1" component="div">
          Tomorrow
        </Typography>
        <div className="image__weather">
        <img
            src="https://www.metaweather.com/static/img/weather/s.svg"
            alt="img_url"
          />
        </div>
        <Typography variant="body1">
          16°C - 11°C
        </Typography>
      </CardContent>
    </Card>
  );
};


