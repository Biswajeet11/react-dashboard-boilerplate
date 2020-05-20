import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
  NavDropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SideBar } from "../sidebar";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './style.scss';

export const CustomNavBar = ({ children }) => {
  return (
    <div className="nav-bar">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>Start Bootstrap</Navbar.Brand>
        <Nav className="mr-auto"/>
        <Form>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search for..."
            />
            <InputGroup.Append>
              <Button variant="primary">
                <FontAwesomeIcon icon={faSearch}/>
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Settings</NavDropdown.Item>
        <NavDropdown.Item href="#">Activity Log</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Logout</NavDropdown.Item>
      </NavDropdown>
        <SideBar />
      </Navbar>
      {children}
    </div>
  );
};
