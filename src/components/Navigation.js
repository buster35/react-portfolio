import { useState, useEffect } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//we don't need to import Header here bc we're importing this page into Header, which is then imported into

// TODO: WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
function Navigation(props) {
  const navTitles = ["About Me", "Portfolio", "Contact", "Resume"];
  const [pageNav, setPageNav] = useState("");

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <h1>Zach Gilbert</h1>
        <Nav>
          <Nav.Link href="#about-me" onClick={props.handleButtonClick}>
            About Me
          </Nav.Link>
          <Nav.Link href="#portfolio" onClick={props.handleButtonClick}>
            Portfolio
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
