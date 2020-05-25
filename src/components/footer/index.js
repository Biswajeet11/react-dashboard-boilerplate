import React from "react";
import { Container } from "react-bootstrap";
import "./style.scss";

export const FooterWrapper = () => {
  return (
    <div className="d-flex flex-column">
    <footer className="mt-auto">
      {/* <Container fluid={true}> */}
        {/* <div className="d-flex align-items-center justify-content-between small"> */}
          <div>
            <a href="/">Privacy Policy</a>
            &middot;
            <a href="/">Terms &amp; Conditions</a>
          </div>
        {/* </div> */}
      {/* </Container> */}
      </footer>
      </div>
  );
};
