import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import projects from "./projects";
import Project from "./components/Project";

function App() {
  return (
    <div>
      {/* inside Components i can define props related to state */}
      <div className="App-header">
        <Header />
      </div>
      <div>
        <Project projects={projects} />
      </div>
    </div>
  );
}

export default App;
