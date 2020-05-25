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
        <div
          id="mySidenav"
          className={
            props.isLight ? "sidebar sidebar-light" : "sidebar sidebar-dark"
          }
        >
          <Nav>
            <Nav aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="mr-auto"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="sidebar-menu-heading">core</div>
                <Nav.Link
                  color={!props.isLight ? "black" : "#adb5bd"}
                  // active
                  href="/"
                  style={
                    ({ fontSize: "medium" },
                    !props.isLight
                      ? { color: "white" }
                      : {
                          color: "#adb5bd",
                        })
                  }
                >
                  &nbsp; &nbsp;
                  <FontAwesomeIcon
                    icon={faTachometerAlt}
                    color={!props.isLight ? "white" : "#adb5bd"}
                  />
                  &nbsp;Dashboard
                </Nav.Link>

                <div className="sidebar-menu-heading">Interface</div>
                <Accordion>
                  <Accordion.Toggle
                    as={Card.Body}
                    eventKey="0"
                    style={
                      !props.isLight
                        ? { color: "white" }
                        : {
                            color: "#adb5bd",
                          }
                    }
                  >
                    <FontAwesomeIcon
                      icon={faColumns}
                      color={!props.isLight ? "white" : "#adb5bd"}
                    />
                    &nbsp; Layouts
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Nav.Link
                        href="/static"
                        color={!props.isLight ? "white" : "#adb5bd"}
                      >
                        Static Navigation
                      </Nav.Link>
                      <Nav.Link
                        href="/light"
                        color={!props.isLight ? "white" : "#adb5bd"}
                      >
                        Light SideNav
                      </Nav.Link>
                    </Card.Body>
                  </Accordion.Collapse>
                  <Accordion.Toggle
                    as={Card.Body}
                    eventKey="1"
                    style={
                      !props.isLight
                        ? { color: "white" }
                        : {
                            color: "#adb5bd",
                          }
                    }
                  >
                    <FontAwesomeIcon
                      icon={faBookOpen}
                      color={!props.isLight ? "white" : "#adb5bd"}
                    />
                    &nbsp; Pages
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body color={!props.isLight ? "white" : "#adb5bd"}>
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
                <Nav.Link
                  href="/charts"
                  // style={{ fontSize: "medium" }}
                  style={
                    ({ fontSize: "medium" },
                    !props.isLight
                      ? { color: "white" }
                      : {
                          color: "#adb5bd",
                        })
                  }
                  // color={!props.isLight ? "white" : "#adb5bd"}
                >
                  &nbsp; &nbsp;
                  <FontAwesomeIcon
                    icon={faTachometerAlt}
                    size="xs"
                    color={!props.isLight ? "white" : "#adb5bd"}
                  />
                  &nbsp; Charts
                </Nav.Link>

                <Nav.Link
                  // active
                  href="/tables"
                  style={
                    ({ fontSize: "medium" },
                    !props.isLight
                      ? { color: "white" }
                      : {
                          color: "#adb5bd",
                        })
                  }
                  // color={!props.isLight ? "white" : "#adb5bd"}
                >
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
