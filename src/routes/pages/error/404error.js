import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import errorImage from "../../../assets/error-404-monochrome.svg";

export const Error404 = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
				<Col lg="6">
					<div className="text-center mt-4">
          <Image
            className="mb-4 img-error"
            src={errorImage}
            alt="error_image"
          />
          <p className="lead">
            This requested URL was not found on this server.
          </p>
          <a href=".">
            <i className="fas fa-arrow-left" />
            Return to Dashboard
          </a>
					</div>
        </Col>
      </Row>
    </Container>
  );
};
