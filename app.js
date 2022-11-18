const express = require("express");

const hbs = require("hbs");

const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/accordion", (req, res) => {
  res.render("tos");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
