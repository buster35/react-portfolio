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

function App() {
  return (
    <>
      {/* inside Components i can define props related to state */}
      <Header />

      {window.location.href.includes("" || "/" || "/#about-me") ? (
        <AboutMe />
      ) : (
        <Project projects={projects} />
      )}

      <Footer />
    </>
  );
}

export default App;
