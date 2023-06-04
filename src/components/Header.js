import React from "react";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Project from "./Project";
import projects from "../projects";
// The `Header` component is a child of our `App` component and is responsible for rendering the header across different pages//
function Header(props) {
  const [stack, setStack] = useState(null);
  console.log(props);

  // setShowStack(!showStack)

  function handleButtonClick(e) {
    e.preventDefault();
    window.location.href = e.target.href; //click events reference respective "stacks"
    setStack(window.location.href);
    if (stack.includes("/#portfolio")) {
      console.log("test");
      // stack = <Project projects={projects} />;
      props.setShowStack(!props.showStack);
    } else if (stack.includes("#about-me")) {
      stack = "";
      // } else if (stack.includes("#contact")) {
      //   stack = <Contact />;
      // } else if (stack.includes("#resume")) {
      //   stack = <Resume />;
    }
    console.log(stack);
  }

  //anything in return statements use JSX syntax extension (allows HTML to be written inside JS)
  return (
    <>
      <Navigation
        handleButtonClick={handleButtonClick}
        stack={stack}
        setShowStack={props.setShowStack}
        showStack={props.showStack}
      />
    </>
  );
}

export default Header;
