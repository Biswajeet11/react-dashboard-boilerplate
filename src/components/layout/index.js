import React from 'react';
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