import insomnia from "./assets/insomnia-screengrab.png";
import note from "./assets/Note-persistance.png";
import sql from "./assets/mysql-table-outputs.png";
import wx from "./assets/main-page-img.png";
import freshCatch from "./assets/freshCatch.png";
import codingQuiz from "./assets/quiz-screenshot.png";
import garden from "./assets/homepage-screenshot.png";
import createThought from "./assets/create-a-thought.png";

const projects = [
  {
    id: 6,
    name: "Social Gardening App",
    projectType: "MERN Full-Stack Web App",
    gitHub: "https://github.com/buster35/social-garden",
    cardBg: garden,
    demo: "https://social-garden.herokuapp.com/login",
  },
  {
    id: 7,
    name: "Social App Back-End",
    projectType: "NoSQL Database Simulation w/ MongoDB",
    gitHub: "https://github.com/buster35/social-experiment",
    cardBg: createThought,
    demo: "https://drive.google.com/file/d/1uflTGxUtAomyZSB37hj2iKcvkeISsQZ2/view",
  },
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
    id: 1,
    name: "Note-Taker App",
    projectType: "JavaScript Local Storage Demo",
    gitHub: "https://github.com/buster35/note-taker-app",
    cardBg: note,
    demo: "https://limitless-shore-27065.herokuapp.com/",
  },
  {
    id: 0,
    name: "Ecommerce Backend",
    projectType: "MySQL Restful Demo App",
    gitHub: "https://github.com/buster35/ecommerce-backend",
    cardBg: insomnia,
    demo: "https://drive.google.com/file/d/1f0TndOfppk5gvviNAEvKB5VcUDMW_7jv/view",
  },
  {
    id: 2,
    name: "CLI Database Viewer",
    projectType: "Terminal Database Viewer Node.js",
    gitHub: "https://github.com/buster35/CLI-database-viewer",
    cardBg: sql,
    demo: "https://drive.google.com/file/d/1PWjVe4FV3KpN-CkQB3RvNf-4c-dqJPTh/view",
  },
];

export default projects;
