import React from "react";
import { Route } from "react-router-dom";
import BlankLayout from "../../../components/blank-layout";

export const UnAuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <BlankLayout>
          <Component {...props} />
        </BlankLayout>
      );
    }}
  />
);
