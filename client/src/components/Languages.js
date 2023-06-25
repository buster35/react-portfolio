import React from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";

function Languages({ open }) {
  return (
    <Container fluid className="logoContain">
      <Collapse
        in={open}
        dimension="width"
        style={{ transition: "1.2s ease-in" }}
      >
        <Row className="logoRow g-0">
          <Col className="logoCol col-md-4">
            <h3>Foundational Proficiences</h3>
            <div className="logoBlocks">
              <div className="htmlLogo">
                <i className="devicon-html5-plain-wordmark colored"></i>
              </div>
              <div className="cssLogo">
                <i className="devicon-css3-plain-wordmark colored"></i>
              </div>
              <div className="jsLogo">
                <i className="devicon-javascript-plain colored"></i>
              </div>
              <div className="mongoLogo">
                <i className="devicon-mongodb-plain-wordmark colored"></i>
              </div>
              <div className="mysqlLogo">
                <i className="devicon-mysql-plain-wordmark colored"></i>
              </div>
              <div className="bootstrapLogo">
                <i className="devicon-bootstrap-plain colored"></i>
              </div>
              <div className="gitLogo">
                <i className="devicon-git-plain"></i>
              </div>
              <div className="nodeLogo">
                <i className="devicon-nodejs-plain-wordmark colored"></i>
              </div>
            </div>
          </Col>
          <Col className="logoCol col-md-4">
            <h3>Things I'm Actively Studying</h3>
            <div className="logoBlocks">
              <div className="jsLogo">
                <i className="devicon-javascript-plain colored"></i>
              </div>
              <div className="tsLogo">
                <i className="devicon-typescript-plain colored"></i>
              </div>
              <i className="devicon-react-original-wordmark"></i>
              <div className="kotlinLogo">
                <i class="devicon-kotlin-plain-wordmark colored"></i>
              </div>
            </div>
          </Col>
          <Col className="logoCol col-md-4">
            <h3>Things I'd Like to Learn in the Future</h3>
            <div className="logoBlocks" id="futureStudy">
              <i className="devicon-python-plain colored"></i>
              <i className="devicon-vim-plain colored"></i>
            </div>
          </Col>
        </Row>
      </Collapse>
    </Container>
  );
}

export default Languages;
