import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import gitLogo from "../assets/github-mark-white.png";
import linkedInLogo from "../assets/LI-In-Bug.png";

function Footer(props) {
  //anything in return statements use JSX syntax extension (allows HTML to be written inside JS)
  return (
    <Navbar
      fixed="bottom"
      variant="dark"
      style={{
        backgroundColor: "#0D1B2A",
        color: "white",
      }}
    >
      <Container
        style={{
          alignItems: "start",
          height: "100px",
        }}
      >
        <Nav>
          <Navbar.Brand href="https://github.com/buster35">
            <img
              src={gitLogo}
              width="50"
              height="auto"
              className="d-inline-block align-center"
            />
          </Navbar.Brand>
          <Navbar.Brand href="https://www.linkedin.com/in/zach-gilbert-4663549a/">
            <img
              src={linkedInLogo}
              width="50"
              height="auto"
              className="d-inline-block align-center"
            />
          </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
