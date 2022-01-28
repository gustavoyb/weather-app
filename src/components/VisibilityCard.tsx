import React from "react";
import "./VisibilityCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function VisibilityCard() {
  return (
    <Card sx={{ maxWidth: 280, maxHeight: 150, backgroundColor: "#1e213a" }}>
      <CardContent className="card">
        <Typography gutterBottom variant="body1" component="div">
          Visibility
        </Typography>
        <Typography variant="h3">6,4 miles</Typography>
      </CardContent>
    </Card>
  );
}
