import React from "react";

// TODO: WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
function Navigation(props) {
  const navTitles = ["About Me", "Portfolio", "Contact", "Resume"];

  return (
    <div>
      <nav>{navTitles}</nav>
    </div>
  );
}

export default Navigation;
