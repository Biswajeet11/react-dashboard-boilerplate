import React from "react";
import { Container } from "react-bootstrap";
export const FooterWrapper = () => {
  return (
    <footer className="py-4 bg-light mt-auto">
      <Container fluid={true}>
        <div className="d-flex align-items-center justify-content-between small">
          <div>
            <a href="#">Privacy Policy</a>
            &middot;
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
