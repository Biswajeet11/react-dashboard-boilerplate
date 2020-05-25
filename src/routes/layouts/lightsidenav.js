import React from "react";
import { CardWrapper } from "../../../src/components/wrapper/index";
import { CustomBreadCrum } from "../../../src/components/breadcrum/index";

export const LightSideNav = () => {
  return (
    <div>
      <h1>Sidenav Light</h1>
      <CustomBreadCrum content="Sidenav Light"/>
      <CardWrapper>
        This page is an example of using the light side navigation option. By
        appending the .sb-sidenav-light class to the .sb-sidenav class, the side
        navigation will take on a light color scheme. The .sb-sidenav-dark is
        also available for a darker option.
      </CardWrapper>
    </div>
  );
};
