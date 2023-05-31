import insomnia from "./assets/insomnia-screengrab.png";
import note from "./assets/Note-persistance.png";
import sql from "./assets/mysql-table-outputs.png";

const projects = [
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
