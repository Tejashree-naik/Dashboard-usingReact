// src/components/Widget.js
import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Widget({ title, value, icon, range }) {
  const isPositive = range >= 0;

  return (
    <Paper style={{ padding: 20, display: "flex", alignItems: "center" }}>
      <Box style={{ marginRight: 15 }}>{icon}</Box>
      <div>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
        <Typography
          variant="body2"
          style={{
            display: "flex",
            alignItems: "center",
            color: isPositive ? "green" : "red",
          }}
        >
          {isPositive ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
          {`${Math.abs(range)}%`}
        </Typography>
      </div>
    </Paper>
  );
}

export default Widget;
