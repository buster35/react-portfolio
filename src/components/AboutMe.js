import React from "react";
import { useState, useEffect } from "react";
import profilePic from "../assets/profile-pic.jpg";

function AboutMe({ aboutMe, setAboutMe }) {
  return (
    <div className="pages">
      <section>
        <img
          src={profilePic}
          alt="My Professional Headshot"
          width="250"
          height="auto"
        />
        <p>lorem ipsum</p>
      </section>
    </div>
  );
}

export default AboutMe;
