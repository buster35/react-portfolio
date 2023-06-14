import { useState } from "react";
import "./App.css";
import { Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import projects from "./projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Languages from "./components/Languages";

//App is current representation of state//
function App() {
  const [stack, setStack] = useState("");

  let stackContent;

  if (stack.includes("/#portfolio")) {
    stackContent = <Project projects={projects} />;
  } else if (stack.includes("/#contact")) {
    stackContent = <Contact />;
  } else if (stack.includes("/#resume")) {
    stackContent = <Resume />;
  } else stackContent = <Languages />;

  return (
    <>
      {/* inside Components i can define props related to state */}
      <Header stack={stack} setStack={setStack} />

      <AboutMe />
      {/* here is where i'll use conditional rendering to determine which react-bootstrap "Stack" component will be displayed based on click event in navbar */}
      <Stack>{stackContent}</Stack>
      <Footer />
    </>
  );
}

export default App;
