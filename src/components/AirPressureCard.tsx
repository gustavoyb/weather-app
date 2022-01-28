import React from "react";
import "./AirPressureCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function AirPressureCard() {
  return (
    <Card sx={{ maxWidth: 280, maxHeight: 150, backgroundColor: "#1e213a" }}>
      <CardContent className="card">
        <Typography gutterBottom variant="body1" component="div">
          Air Pressure
        </Typography>
        <Typography variant="h3">80%</Typography>
      </CardContent>
    </Card>
  );
}
