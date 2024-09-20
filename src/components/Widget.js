// src/components/Widget.js
import React from "react";
import { Paper, Typography } from "@mui/material";

const Widget = ({ title, value }) => {
  return (
    <Paper style={{ padding: 20, textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {value}
      </Typography>
    </Paper>
  );
};

export default Widget;
