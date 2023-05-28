import { useState, useEffect } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// TODO: WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
function Navigation(props) {
  const navTitles = ["About Me", "Portfolio", "Contact", "Resume"];
  const [pageNav, setPageNav] = useState("");

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav>
          <Nav.Link href="#about-me">About Me</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
