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
import Modal from "./components/Modal";

//App is current representation of state//
function App() {
  const [stack, setStack] = useState("");
  const [open, setOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const handleShow = (e) => {
    setShowModal(true);
    setModalImg(e.target.src);
  };

  let stackContent;

  if (stack.includes("/#portfolio")) {
    stackContent = <Project projects={projects} handleShow={handleShow} />;
  } else if (stack.includes("/#contact")) {
    stackContent = <Contact />;
  } else if (stack.includes("/#resume")) {
    stackContent = <Resume />;
  } else if (stack.includes("/#about-me")) {
    stackContent = <Languages open={open} setOpen={setOpen} />;
  }

  return (
    <>
      {/* inside Components i can define props related to state */}
      <Header stack={stack} setStack={setStack} open={open} setOpen={setOpen} />

      <AboutMe />
      {/* here is where i'll use conditional rendering to determine which react-bootstrap "Stack" component will be displayed based on click event in navbar */}
      <Stack>{stackContent}</Stack>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        projects={projects}
        modalImg={modalImg}
      ></Modal>
      <Footer />
    </>
  );
}

export default App;
