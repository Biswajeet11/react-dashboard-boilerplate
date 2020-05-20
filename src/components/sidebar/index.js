import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeteor,
  faBook,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

export const SideBar = () => {
  return (
    <div className="sidenav">
      <h5 style={{ color: "rgb(70,71,72)" }}>CORE</h5>
      <a>
        <div>
          <FontAwesomeIcon icon={faMeteor} />
          Dashboard
        </div>
      </a>
      <h5 style={{ color: "rgb(70,71,72)" }}>INTERFACE</h5>
      <a>
        <div>
          <FontAwesomeIcon icon={faMeteor} />
          Layouts
        </div>
      </a>
      <a>
        <div>
          <FontAwesomeIcon icon={faBook} />
          Pages
        </div>
      </a>
      <h5 style={{ color: "rgb(70,71,72)" }}>Addons</h5>
      <a>
        <div>
          <FontAwesomeIcon icon={faMeteor} />
          Charts
        </div>
      </a>
      <a>
        <div>
          <FontAwesomeIcon icon={faDatabase} />
          Tables
        </div>
      </a>
    </div>
  );
};
