import React from "react";
import Navigation from "./Navigation";

// The `Header` component is a child of our `App` component and is responsible for rendering the header across different pages//
function Header({ open, setOpen, stack, setStack }) {
  function handleButtonClick(e) {
    e.preventDefault();
    window.location.href = e.target.href;
    setStack(window.location.href);

    if (window.location.hash === "#about-me") {
      setOpen(!open);
    } else if (window.location.hash !== "#about-me") {
      setOpen(false);
    }
  }

  //anything in return statements use JSX syntax extension (allows HTML to be written inside JS)
  return (
    <>
      <Navigation
        open={open}
        setOpen={setOpen}
        handleButtonClick={handleButtonClick}
        stack={stack}
      />
    </>
  );
}

export default Header;
