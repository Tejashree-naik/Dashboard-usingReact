// src/App.js
import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import Sidebar from "./components/Sidebar";
import CustomPieChart from "./components/PieChart";
import CustomBarChart from "./components/BarChart";
import CustomLineChart from "./components/LineChart"; // Import LineChart
import Widget from "./components/Widget"; // Import Widget

// Import Icons from Material UI
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";


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

           {/* Widgets Section with Icons and Range Symbols */}
        <Grid container spacing={3} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Widget title="Total Users" value="450" icon={<PeopleIcon fontSize="large" />} range={12} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Widget title="Total Revenue" value="$50K" icon={<AttachMoneyIcon fontSize="large" />} range={-8} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Widget title="Orders" value="955" icon={<ShoppingCartIcon fontSize="large" />} range={5} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Widget title="Deliveries" value="250" icon={<LocalShippingIcon fontSize="large" />} range={15} />
          </Grid>
        </Grid>

        {/* Dashboard Charts */}
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
