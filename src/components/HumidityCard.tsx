import React from "react";
import "./HumidityCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function DateWeatherCard() {
  return (
    <Card sx={{ maxWidth: 280, maxHeight: 200, backgroundColor: "#1e213a" }}>
      <CardContent className="card">
        <Typography gutterBottom variant="body1" component="div">
          Humidity
        </Typography>
        <Typography variant="h3">80%</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2">0%</Typography>
          </Box>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={80} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2">100%</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
