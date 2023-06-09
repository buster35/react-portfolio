import React from "react";
import { Navbar, Nav } from "react-bootstrap";
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
      <div
        style={{
          height: "100px",
        }}
        className="navContain"
      >
        <Nav>
          <Navbar.Brand href="https://github.com/buster35" target="_blank">
            <img
              src={gitLogo}
              width="50"
              height="auto"
              className="d-inline-block align-center"
              alt="gitHub logo"
            />
          </Navbar.Brand>
          <Navbar.Brand
            href="https://www.linkedin.com/in/zach-gilbert-4663549a/"
            target="_blank"
          >
            <img
              src={linkedInLogo}
              width="60"
              height="auto"
              className="d-inline-block align-center"
              alt="linkedIn logo"
            />
          </Navbar.Brand>
        </Nav>
      </div>
    </Navbar>
  );
}

export default Footer;
