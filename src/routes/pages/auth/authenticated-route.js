import React from "react";
import { Route } from "react-router-dom";
import Layout from "../../../components/layout";

export const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);
