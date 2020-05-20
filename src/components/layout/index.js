import React from 'react';
// import { Container } from "react-bootstrap";
import { CustomNavBar } from '../navbar';

const Layout = ({ children }) => {
	return (
		<div>
			<CustomNavBar />
				{children}
		</div>
	)
}

export default Layout;