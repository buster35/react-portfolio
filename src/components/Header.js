import React from "react";
import Navigation from "./Navigation";

// The `Header` component is a child of our `App` component and is responsible for rendering the header across different pages//
function Header(props) {
  function handleButtonClick(e) {
    e.preventDefault();
    window.location.href = e.target.href; //click events reference each page section
  }
  //anything in return statements use JSX syntax extension (allows HTML to be written inside JS)
  return (
    <>
      <Navigation handleButtonClick={handleButtonClick} />
    </>
  );
}

export default Header;
