import React from "react";
import NavBar from "./NavBar";
import Widget from "./Widget";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Mon", uv: 400, pv: 2400, amt: 2400 },
  { name: "Tue", uv: 300, pv: 1398, amt: 2210 },
  { name: "Wed", uv: 200, pv: 9800, amt: 2290 },
  { name: "Thu", uv: 278, pv: 3908, amt: 2000 },
  { name: "Fri", uv: 189, pv: 4800, amt: 2181 },
  { name: "Sat", uv: 239, pv: 3800, amt: 2500 },
  { name: "Sun", uv: 349, pv: 4300, amt: 2100 },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <NavBar />
      <div className="widgets">
        <Widget title="Total Orders" value="450" />
        <Widget title="Total customers" value="955" />
        <Widget title="Total Revenue" value="$50K" />
        <Widget title="Total Menu" value="250" />
        <Widget title="Total workers" value="30" />
      </div>
      <div className="charts">
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
}

export default Dashboard;
