import React from "react";
import { useState, useEffect } from "react";
import profilePic from "../assets/profile-pic.jpg";
import { Container } from "react-bootstrap";

function AboutMe({ aboutMe, setAboutMe }) {
  return (
    <Container fluid className="pages">
      <img src={profilePic} alt="My Professional Headshot" className="myImg" />
      <p>lorem ipsum</p>
    </Container>
  );
}

export default AboutMe;
