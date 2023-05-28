import React from "react";
//TODO: WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the
//TODO: WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted

// The `Header` component is a child of our `App` component and is responsible for rendering the header across different pages//
function Header(props) {
  const name = "Zach Gilbert";

  //anything in return statements use JSX syntax extension (allows HTML to be written inside JS)
  return (
    <div className="container">
      <h1>{name}</h1>
    </div>
  );
}

export default Header;
