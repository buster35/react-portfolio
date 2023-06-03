import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import projects from "./projects";
import Project from "./components/Project";
import AboutMe from "./components/AboutMe";

// TODO:WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default

// TODO:WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
// function renderResume(e) {
//  e.preventDefault();
//  window.location.href = e.target.href;
//}

function App() {
  return (
    <>
      {/* inside Components i can define props related to state */}
      <Header />

      {window.location.href.includes("" || "/" || "/#about-me")}
      <AboutMe />
      <Project projects={projects} />
      <Footer />
    </>
  );
}

export default App;
