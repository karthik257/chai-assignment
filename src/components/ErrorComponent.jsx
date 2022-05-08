import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


export const ErrorComponent = () => {
  return (
    <Row>
      <Col md={12}>
        <h1 className="display-1 text-center mt-5 text-danger">
          Error...! Page not found
        </h1>
      </Col>
    </Row>
  );
};
