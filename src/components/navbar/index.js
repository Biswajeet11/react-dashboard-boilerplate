import React from 'react';
import { Navbar,Nav, Form ,FormControl,Button} from 'react-bootstrap';
import { SideBar } from '../sidebar';

export const CustomNavBar = () => {
	return (
		<Navbar bg="dark" variant="dark">
    <Navbar.Brand>React bootstrap</Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
			</Form>
			<SideBar/>
  </Navbar>
	)
}