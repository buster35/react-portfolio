import React from "react";
import { Button, Card, Col, Row, Container } from "react-bootstrap";

function Project({ projects, handleShow }) {
  return (
    <Container fluid style={{ marginBottom: "100px" }}>
      <Row className="g-4 mt-0 pages">
        <h2 id="portfolio">Portfolio:</h2>
        {projects.map((project) => (
          <Col key={project.id} style={{ padding: "10px", margin: "20px" }}>
            <Card style={{ width: "auto", minWidth: "200px" }}>
              {/* eslint-disable-next-line */}
              <a onClick={handleShow}>
                <Card.Img
                  className="cardImg"
                  variant="top"
                  src={project.cardBg}
                  alt="project screenshots"
                />
              </a>
              <Card.Body
                style={{
                  backgroundColor: "#778DA9",
                }}
              >
                <Card.Title>{project.name}</Card.Title>

                <Card.Text>{project.projectType}</Card.Text>

                <Button variant="secondary" href={project.gitHub}>
                  GitHub Repo
                </Button>
                <Button variant="secondary" href={project.demo}>
                  Deployed
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Project;
