import React from 'react';
import { Container } from "react-bootstrap";
import { FooterWrapper } from '../footer';
import './style.scss';

const BlankLayout = ({ children }) => {
	return (
			<div  className="content-wrapper" >
				{children}
			<FooterWrapper/>
			</div>
	)
}

export default BlankLayout;