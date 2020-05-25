import React from 'react';
import { Container } from "react-bootstrap";
import { FooterWrapper } from '../footer';
import './style.scss';

const BlankLayout = ({ children }) => {
	return (
			<Container fluid className="content-wrapper" >
				{children}
			<FooterWrapper/>
			</Container>
	)
}

export default BlankLayout;