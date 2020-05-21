import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const AuthenticatedRoute = ({
	component: Component,
	...rest }) => (
		<Route
			{...rest}
			render={(props) => {
				let jwt = localStorage.getItem('token')
				return (
					jwt ?
						<Component {...props} />
						:
						<Redirect
							to={{
								pathname: '/',
								state: { from: props.location }
							}}
						/>
				)
			}}
		/>
	);

