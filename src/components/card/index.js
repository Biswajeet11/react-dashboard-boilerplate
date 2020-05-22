import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import './style.scss'

export const CustomCard = ({ variant, id, content }) => {
  return (
    <Card bg={variant.toLowerCase()} key={id} text="white" className="details-link mb-4">
      <Card.Body>{content}</Card.Body>
      <Card.Footer className="details-link-wrapper">
        <a href="/"  className="stretched-link" style={{color:"white"}}  >View Details</a>
				<FontAwesomeIcon icon={faAngleRight} size="1x"/>
        </Card.Footer>
    </Card>
  );
};
