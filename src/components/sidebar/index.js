import React from "react";
import { Navbar, Nav, Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faColumns,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import { TableSvg } from "../../../src/assets/icon/table";

export const SideBar = (props) => {
  return (
    <div>
      {props.isOpen && (
        <div id="mySidenav" className="sidebar">
          <Nav>
            <Nav aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="mr-auto"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="sidebar-menu-heading">core</div>
                <Nav.Link active href="/" style={{ fontSize: "medium" }}>
                  &nbsp; &nbsp;
                  <FontAwesomeIcon icon={faTachometerAlt} color={"white"} />
                  &nbsp; Dashboard
                </Nav.Link>

                <div className="sidebar-menu-heading">Interface</div>
                <Accordion>
                  <Accordion.Toggle
                    as={Card.Body}
                    eventKey="0"
                    style={{ color: "white" }}
                  >
                    <FontAwesomeIcon icon={faColumns} color={"white"} />
                    &nbsp; Layouts
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Nav.Link>Static Navigation</Nav.Link>
                      <Nav.Link>Light SideNav</Nav.Link>
                    </Card.Body>
                  </Accordion.Collapse>
                  <Accordion.Toggle
                    as={Card.Body}
                    eventKey="1"
                    style={{ color: "white" }}
                  >
                    <FontAwesomeIcon icon={faBookOpen} color={"white"} />
                    &nbsp; Pages
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Accordion.Toggle as={Card.Body} eventKey="2">
                        <Accordion.Toggle as={Card.Body} eventKey="4">
                          Authentication
                          </Accordion.Toggle>
                      </Accordion.Toggle>
                      <Accordion.Toggle as={Card.Body} eventKey="3">
                        Errors
                      </Accordion.Toggle>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>

                <div className="sidebar-menu-heading">Addons</div>
                <Nav.Link active href="/charts" style={{ fontSize: "medium" }}>
                  &nbsp; &nbsp;
                  <FontAwesomeIcon
                    icon={faTachometerAlt}
                    size="xs"
                    color={"white"}
                  />
                  &nbsp; Charts
                </Nav.Link>

                <Nav.Link active href="/tables" style={{ fontSize: "medium" }}>
                  &nbsp; &nbsp;
                  {TableSvg}
                  &nbsp; Tables
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Nav>
          {/* <footer className="sidebar-footer">
            <h4>Logged in as:</h4>
            <h4>Start Bootstrap</h4>
          </footer> */}
        </div>
      )}
    </div>
  );
};
