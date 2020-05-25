import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CustomNavBar } from "../navbar";
import { FooterWrapper } from "../footer";

import "./style.scss";

const Layout = ({ children,isLight}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Container
      fluid
      className={isOpen ? "container-wrapper" : "content-wrapper"}
    >
      {children}
      <CustomNavBar setIsOpen={setIsOpen} isOpen={isOpen} isLight={isLight}/>
      <FooterWrapper />
    </Container>
  );
};

export default Layout;
