import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Languages() {
  return (
    <Container className="logoContain">
      <Row className="logoRow">
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default Languages;
