// import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleValidate = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onClick={handleValidate}
      className="contactForm"
    >
      <Form.Group className="mb-3" controlId="formNameInput">
        <Form.Label>Name</Form.Label>
        <InputGroup hasValidation>
          <Form.Control type="input" placeholder="Enter name" required />
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <InputGroup hasValidation>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            Email will NEVER be shared, only used in correspondence if desired.
          </Form.Text>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCommentArea">
        <Form.Label>Leave a comment or inquiry</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Comments"
            required
          />
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmailRedirect">
        <Form.Text className="text-danger">
          Back end API functionality is on it's way! In the meantime, please
          feel free to email me at gilb9711@gmail.com for more information in
          regards to my job search and current projects.
        </Form.Text>
      </Form.Group>

      {/* <Button variant="primary" type="submit">
        <Form.Control type="text" disabled readOnly />
        Submit
      </Button> */}
    </Form>
  );
}

export default Contact;
