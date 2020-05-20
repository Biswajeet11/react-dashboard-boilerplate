import React from "react";
import { Card } from "react-bootstrap";
import './style.scss';

export const CardWrapper = (props) => {
  return (
    <Card className="mb-4">
      <Card.Header className={props.footerContent?"header":""}>{props.content}</Card.Header>
      <Card.Body>
        {props.children}
      </Card.Body>
      {props.footerContent && (<Card.Footer className="footer">
        {props.footerContent}
      </Card.Footer>)}
    </Card>
  );
};
