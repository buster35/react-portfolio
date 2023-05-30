import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import insomnia from "../assets/insomnia-screengrab.png";
import note from "../assets/Note-persistance.png";

function Project({ projects }) {
  let imgImport = [insomnia, note];

  return (
    <Row className="g-4">
      <h2 id="portfolio">Portfolio:</h2>
      {projects.map((project) => (
        <Col key={project.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgImport[0]} />
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
