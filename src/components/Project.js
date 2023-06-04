import React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Container,
  Modal,
  Image,
} from "react-bootstrap";

function Project({ projects }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <Container fluid>
      <Row className="g-4 mt-0 pages">
        <h2 id="portfolio">Portfolio:</h2>
        {projects.map((project) => (
          <Col key={project.id} style={{ padding: "10px", margin: "20px" }}>
            <Card style={{ width: "auto" }}>
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
                <Button variant="secondary" href={project.gitHub}>
                  Demo
                </Button>
              </Card.Body>
            </Card>
            <Modal
              show={showModal}
              onHide={handleClose}
              backdrop="static"
              keyboard={true}
              style={{ backgroundColor: "#0D1B2A" }}
            >
              <Modal.Header closeButton>
                <Modal.Title>{project.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Image
                  src={project.cardBg}
                  style={{ maxWidth: "450px", objectFit: "contain" }}
                ></Image>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Project;
