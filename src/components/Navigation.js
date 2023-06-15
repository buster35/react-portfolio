import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//we don't need to import Header here bc we're importing this page into Header, which is then imported into App.js

function Navigation(props) {
  return (
    <Navbar
      variant="dark"
      style={{
        backgroundColor: "#0D1B2A",
        color: "white",
      }}
    >
      <div className="navContain">
        <h1>
          <a
            href="#about-me"
            style={{ outline: "none", textDecoration: "none", color: "white" }}
            onClick={props.handleButtonClick}
          >
            Zach Gilbert
          </a>
        </h1>
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
      </div>
    </Navbar>
  );
}

export default Navigation;
