import React from "react";
import "./WindStatusCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function WindStatusCard() {
  return (
    <Card sx={{ maxWidth: 280, maxHeight: 200, backgroundColor: "#1e213a" }}>
      <CardContent className="card">
        <Typography gutterBottom variant="body1" component="div">
          Wind Status
        </Typography>
        <Typography variant="h3">7 mph</Typography>
      </CardContent>
    </Card>
  );
}
