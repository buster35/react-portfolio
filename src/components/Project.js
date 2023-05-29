import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Project({ projects }) {
  return (
    <Row className="g-4">
      <h2 id="portfolio">Portfolio:</h2>
      {projects.map((project) => (
        <Col>
          <Card style={{ width: "18rem" }} key={project.name}>
            <Card.Img variant="top" src={project.cardBg} />
            <Card.Body>
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
