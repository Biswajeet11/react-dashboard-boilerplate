import React from 'react';
import { Container } from "react-bootstrap";
import { CustomNavBar } from '../navbar';
import { FooterWrapper } from '../footer';

import './style.scss';

const Layout = ({ children }) => {
	return (
		<Container fluid className="container-wrapper">
			<CustomNavBar />
			{children}
			<FooterWrapper/>
		</Container>
	)
}

export default Layout;