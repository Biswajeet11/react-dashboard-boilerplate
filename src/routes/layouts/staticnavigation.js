import React from "react";
import { CardWrapper } from "../../../src/components/wrapper/index";
import { CustomBreadCrum } from "../../../src/components/breadcrum/index";

export const StaticNavigation = () => {
  return (
    <div>
      <h1>Static Navigation</h1>
      <CustomBreadCrum content="Static Navigation"/>
      <CardWrapper>
        This page is an example of using static navigation. By removing the
        .sb-nav-fixed class from the body, the top navigation and side
        navigation will become static on scroll. Scroll down this page to see an
        example.
      </CardWrapper>
    </div>
  );
};
