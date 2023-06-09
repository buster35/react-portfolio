const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));

//   app.get("/*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "..", "../client/build/index.html"));
//   });

//   app.get("*", function (req, res) {
//     const index = path.join(__dirname, "build", "../client/build/index.html");
//     res.sendFile(index);
//   });
// }

app.use(routes);

//This sets our express "init" for localhost (or other via process.env.PORT) inside a method that first initiates our connection to the mongodb database//
db.once("open", () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
