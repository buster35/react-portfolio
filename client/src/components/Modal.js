import React from "react";
import { Button, Modal, Image } from "react-bootstrap";

function Modals(props) {
  const handleClose = () => props.setShowModal(false);

  return (
    <Modal
      show={props.showModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={true}
      style={{ backgroundColor: "#0D1B2A" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.projects.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          className="modalImg"
          src={props.modalImg}
          style={{ maxWidth: "450px", objectFit: "contain" }}
        ></Image>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modals;
