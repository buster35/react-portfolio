import React from "react";
import { Button, Card, Col, Row, Container } from "react-bootstrap";

function Project({ projects }) {
  return (
    <Row className="cardRow g-4 m-2">
      <h2 id="portfolio">Portfolio:</h2>
      {projects.map((project) => (
        <Col key={project.id} style={{ padding: "10px", margin: "20px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="cardImg"
              variant="top"
              src={project.cardBg}
              alt="project screenshots"
            />
            <Card.Body style={{ backgroundColor: "#778DA9" }}>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>{project.projectType}</Card.Text>
              <Button variant="secondary" href={project.gitHub}>
                GitHub Repo
              </Button>
              <Button variant="secondary" href={project.gitHub}>
                Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Project;
