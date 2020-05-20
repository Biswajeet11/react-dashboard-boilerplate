import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
  NavDropdown,
  Image
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBar } from "../sidebar";
import { faSearch, faBars ,faUser} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

export const CustomNavBar = () => {
  return (
    <div className="nav-bar">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>Start Bootstrap</Navbar.Brand>
        <FontAwesomeIcon icon={faBars} />
        <Nav className="mr-auto" />
        <Navbar.Collapse className="justify-content-end">
          <Form>
            <InputGroup className="mb-3">
              <FormControl placeholder="Search for..." />
              <InputGroup.Append>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
          <NavDropdown
            className="dropdownMenu dropdown-menu-right"
            alignRight
            eventKey={1}
            title={
              <FontAwesomeIcon icon={faUser} />
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#">Settings</NavDropdown.Item>
            <NavDropdown.Item href="#">Activity Log</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
        <SideBar />
      </Navbar>
    </div>
  );
};
