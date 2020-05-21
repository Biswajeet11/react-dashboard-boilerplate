import React from "react";
import "./sidebar.css";

export const SideBar = (props) => {
  return (
    <div>
      {props.isOpen && (
        <div>
          <div id="mySidebar" className="sidebar">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
};
