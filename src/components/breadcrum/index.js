import React from "react";
import { Breadcrumb } from "react-bootstrap";

export const CustomBreadCrum = ({ content }) => {
  return content.length > 0 ? (
    <Breadcrumb className="mb-4">
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item active>{content}</Breadcrumb.Item>
    </Breadcrumb>
  ) : (
    <Breadcrumb className="mb-4">
      <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
    </Breadcrumb>
  );
};
