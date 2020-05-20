import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const CustomCard = ({ variant, id, content }) => {
  return (
    <Card bg={variant.toLowerCase()} key={id} text="white" className="mb-4">
      <Card.Body>{content}</Card.Body>
      <Card.Footer>
        <a href="#" style={{color:"white"}}>View Details</a>
				<FontAwesomeIcon icon={faAngleRight} size="sm"/>
      </Card.Footer>
    </Card>
  );
};
