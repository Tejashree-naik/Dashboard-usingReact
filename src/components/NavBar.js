import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faClipboardList,
  faUsers,
  faComments,
  faWallet,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav style={navStyle}>
      <h2>Dashboard</h2>
      <ul style={ulStyle}>
        <li>
          <FontAwesomeIcon icon={faChartLine} /> Dashboard
        </li>
        <li>
          <FontAwesomeIcon icon={faClipboardList} /> Analytics
        </li>
        <li>
          <FontAwesomeIcon icon={faClipboardList} /> Orders
        </li>
        <li>
          <FontAwesomeIcon icon={faUsers} /> Customers
        </li>
        <li>
          <FontAwesomeIcon icon={faComments} /> Chats
        </li>
        <li>
          <FontAwesomeIcon icon={faWallet} /> Wallet
        </li>
        <li>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </li>
      </ul>
    </nav>
  );
}

// Inline styles for layout
const navStyle = {
  width: "200px",
  height: "100vh",
  backgroundColor: "light purpule",
  padding: "20px",
};

const ulStyle = {
  listStyleType: "none",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

export default NavBar;
