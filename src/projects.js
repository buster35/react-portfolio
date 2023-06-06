import insomnia from "./assets/insomnia-screengrab.png";
import note from "./assets/Note-persistance.png";
import sql from "./assets/mysql-table-outputs.png";
import wx from "./assets/main-page-img.png";
import freshCatch from "./assets/freshCatch.png";
import codingQuiz from "./assets/quiz-screenshot.png";

const projects = [
  {
    id: 3,
    name: "Weather Dashboard App",
    projectType: "Web API w/ Bootstrap",
    gitHub: "https://github.com/buster35/wakasa-sinus",
    cardBg: wx,
    demo: "https://buster35.github.io/wakasa-sinus/",
  },
  {
    id: 4,
    name: "Minnesota Fresh Catch App",
    projectType: "Full-Stack App (MVC)",
    gitHub: "https://github.com/potteramy/minnesota-fresh-catch-app",
    cardBg: freshCatch,
    demo: "https://minnesota-fresh-catch.herokuapp.com/",
  },
  {
    id: 5,
    name: "Coding Quiz!",
    projectType: "Client-Side JavaScript Quiz",
    gitHub: "https://github.com/buster35/mohini-fluctus",
    cardBg: codingQuiz,
    demo: "https://buster35.github.io/mohini-fluctus/",
  },
  {
    id: 0,
    name: "Ecommerce Backend",
    projectType: "MySQL Restful Demo App",
    gitHub: "https://github.com/buster35/ecommerce-backend",
    cardBg: insomnia,
  },
  {
    id: 1,
    name: "Note-Taker App",
    projectType: "JavaScript Local Storage Demo",
    gitHub: "https://github.com/buster35/note-taker-app",
    cardBg: note,
  },
  {
    id: 2,
    name: "CLI Database Viewer",
    projectType: "Terminal Database Viewer Node.js",
    gitHub: "https://github.com/buster35/CLI-database-viewer",
    cardBg: sql,
  },
];

export default projects;
