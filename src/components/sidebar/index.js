import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeteor,
  faColumns,
  faBookOpen,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

export const SideBar = () => {
  return (
    <div className="sidenav">
      <h5 style={{ color: "rgb(70,71,72)" }}>CORE</h5>
      <a>
        <div>
          <FontAwesomeIcon icon={faTachometerAlt} size="xs" />
          Dashboard
        </div>
      </a>
      <h5 style={{ color: "rgb(70,71,72)" }}>INTERFACE</h5>
      <a>
        <div>
          <FontAwesomeIcon icon={faColumns} size="xs" />
          Layouts
        </div>
      </a>
      <a>
        <div>
          <FontAwesomeIcon icon={faBookOpen} size="xs"  />
          Pages
        </div>
      </a>
      <h5 style={{ color: "rgb(70,71,72)" }}>Addons</h5>
      <a>
        <div>
          <FontAwesomeIcon icon={faMeteor} size="xs" />
          Charts
        </div>
      </a>
      <a>
        <div>
          {/* <FontAwesomeIcon icon={faDatabase} size="sm" /> */}
          Tables
        </div>
      </a>
    </div>
  );
};
