import { useState, useEffect } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//we don't need to import Header here bc we're importing this page into Header, which is then imported into App.js

function Navigation(props) {
  const [pageNav, setPageNav] = useState("");

  return (
    <Navbar
      variant="dark"
      style={{
        backgroundColor: "#0D1B2A",
        color: "white",
      }}
    >
      <Container>
        <h1>Zach Gilbert</h1>
        <Nav>
          <Nav.Link href="#portfolio" onClick={props.handleButtonClick}>
            Portfolio
          </Nav.Link>
          <Nav.Link href="#about-me" onClick={props.handleButtonClick}>
            About Me
          </Nav.Link>
          <Nav.Link href="#contact" onClick={props.handleButtonClick}>
            Contact
          </Nav.Link>
          <Nav.Link href="#resume" onClick={props.handleButtonClick}>
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
