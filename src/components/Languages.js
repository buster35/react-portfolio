import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, div } from "react-bootstrap";

function Languages() {
  return (
    <Container fluid className="logoContain">
      <Row className="logoRow">
        <Col className="logoCol">
          <h3>Things I'm Actively Studying</h3>
          <div className="logoBlocks">
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-typescript-plain colored"></i>
            <i class="devicon-react-original-wordmark"></i>
          </div>
        </Col>
        <Col className="logoCol">
          <h3>Foundational Proficiences</h3>
          <div className="logoBlocks">
            <div class="htmlLogo">
              <i class="devicon-html5-plain-wordmark colored"></i>
            </div>
            <div class="cssLogo">
              <i class="devicon-css3-plain-wordmark colored"></i>
            </div>
            <div class="jsLogo">
              <i class="devicon-javascript-plain colored"></i>
            </div>
            <div class="mongoLogo">
              <i class="devicon-mongodb-plain-wordmark colored"></i>
            </div>
            <div class="mysqlLogo">
              <i class="devicon-mysql-plain-wordmark colored"></i>
            </div>
            <div class="bootstrapLogo">
              <i class="devicon-bootstrap-plain colored"></i>
            </div>
            <div class="gitLogo">
              <i class="devicon-git-plain"></i>
            </div>
            <div class="nodeLogo">
              <i class="devicon-nodejs-plain-wordmark colored"></i>
            </div>
          </div>
        </Col>
        <Col className="logoCol">
          <h3>Things I'd Like to Learn in the Future</h3>
          <div className="logoBlocks">
            <i class="devicon-python-plain colored"></i>
            <i class="devicon-vim-plain colored"></i>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Languages;
