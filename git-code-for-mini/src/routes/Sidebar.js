// Sidebar.js
import React from "react";
import SidebarButton from "../components/SidebarButton"; // Import SidebarButton component
import "../styles/SidebarStyles.css"; // Import Sidebar styles
import { Link } from "react-router-dom";



function Sidebar() {
  const buttonData = [
    { label: "Home", to: "/" },
    { label: "Week 1", to: "/Video1" },
    { label: "Week 2", to: "/Lesson1" },
    { label: "Week 3",to: "/Lesson2" },
    { label: "Week 4", to: "/Lesson3" },
    { label: "Assignment 1", to: "/Assignment" },
    { label: "Week 5",to: "/Lesson4" },
    { label: "Week 6", to: "/Lesson5" },
    { label: "Assignment 2", to: "/Assignment2"},
    { label: "Button", to: "/about" },
  ];

  // const handleButtonClick = (buttonNumber) => {
  //   // Handle button click based on the buttonNumber
  //   alert(`Button ${buttonNumber} clicked.`);
  // };

  return (
    <>
    <div className="sidebar">
      <h2>Sidebar</h2>
      <div className="sidebar-buttons">
        {buttonData.map((button, index) => (
          <Link key={index} to={button.to}>
            <SidebarButton label={button.label} />
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}

export default Sidebar;
