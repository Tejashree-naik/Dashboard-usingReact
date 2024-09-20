// src/App.js
import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import Sidebar from "./components/Sidebar";
import CustomPieChart from "./components/PieChart";
import CustomBarChart from "./components/BarChart";
import CustomLineChart from "./components/LineChart"; // Import LineChart
import Widget from "./components/Widget"; // Import Widget

function App() {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div style={{ flexGrow: 1, padding: 20 }}>
        <Typography variant="h4" gutterBottom>
          Business Dashboard
        </Typography>

        {/* Widgets Section */}
        <Grid container spacing={3} style={{ marginBottom: 20 }}>
          <Grid item xs={12} md={3}>
            <Widget title="Total Users" value="450" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Widget title="Total Revenue" value="$50K" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Widget title="Orders" value="955" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Widget title="Deliveries" value="250" />
          </Grid>
        </Grid>

        {/* Dashboard Grid */}
        <Grid container spacing={3}>
          {/* PieChart Section */}
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: 20 }}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <CustomPieChart />
            </Paper>
          </Grid>

          {/* BarChart Section */}
          <Grid item xs={12} md={8}>
            <Paper style={{ padding: 20 }}>
              <Typography variant="h6" gutterBottom>
                Revenue Over Time
              </Typography>
              <CustomBarChart />
            </Paper>
          </Grid>

          {/* LineChart Section */}
          <Grid item xs={12}>
            <Paper style={{ padding: 20 }}>
              <Typography variant="h6" gutterBottom>
                Revenue Trend Line
              </Typography>
              <CustomLineChart />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
