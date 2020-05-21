import React, { useState } from "react";
import { Navbar, Nav, Row, Col, Collapse, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeteor,
  faColumns,
  faBookOpen,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
// import "./style.scss";
import "./sidebar.css";

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

// Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
   document.getElementById("mySidebar").style.width = "0";
   document.getElementById("main").style.marginLeft = "0";
 }
export const SideBar=()=> {
  return (
    
    <div>
      <div id="mySidebar" className="sidebar">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div id="main">
        <span className="openbtn" onClick={openNav}>
          &#9776;
        </span>
      </div>
    </div>
  );
}
