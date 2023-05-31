import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import projects from "./projects";
import Project from "./components/Project";

function App() {
  return (
    <div style={{ backgroundColor: "#E0E1DD", height: "100%" }}>
      {/* inside Components i can define props related to state */}
      <Header />

      <Project projects={projects} />
    </div>
  );
}

export default App;
