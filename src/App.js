import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import projects from "./projects";
import Project from "./components/Project";
import AboutMe from "./components/AboutMe";

//set state for current "Stack"

// TODO:WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
// function renderResume(e) {
//  e.preventDefault();
//  window.location.href = e.target.href;
//}

//App is current representation of state//
function App() {
  const [showStack, setShowStack] = useState(false);
  //we have showStack held in state; when click event occurs we expect to update useState to the reciprocal of the false boolean (true)//

  return (
    <>
      {/* inside Components i can define props related to state */}
      <Header setShowStack={setShowStack} showStack={showStack} />

      <AboutMe />
      {/* here is where i'll use conditional rendering to determine which react-bootstrap "Stack" component will be displayed based on click event in navbar */}
      {/* <div showStack={showStack}>{stack}</div> */}
      <Footer />
    </>
  );
}

export default App;
