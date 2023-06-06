import React from "react";
import profilePic from "../assets/profile-pic.jpg";
import { Stack, Image } from "react-bootstrap";

function AboutMe({ aboutMe, setAboutMe }) {
  return (
    <Stack>
      <div className="aboutMe">
        <Image
          fluid
          src={profilePic}
          alt="My Professional Headshot"
          className="myImg"
        />
        <p style={{ padding: "15px 15px" }}>
          Hello, world. Thanks for stopping by my portfolio site. My name is
          Zach, I'm a junior developer with a curious nature and desire to
          become well-versed in whatever I'm passionate about. My career journey
          can be summarized nicely with one of my favorite quotes: <br />
          <br /> "For what it's worth: it's never too late or, in my case, too
          early to be whoever you want to be. There's not time limit, stop
          whenever you want. You can change or stay the same, there are no rules
          to this thing. We can make the best or the worst of it. I hope you
          make the best of it. And I hope you see things that startle you. I
          hope you feel things you never felt before. I hope you meet people
          with a different point of view. I hope you live a life you're proud
          of. If you find that you're not, I hope you have the courage to start
          all over again." -F. Scott Fitzgerald
        </p>
      </div>
    </Stack>
  );
}

export default AboutMe;
