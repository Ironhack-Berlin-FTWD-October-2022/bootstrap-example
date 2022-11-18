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
app.get("/modal", (req, res) => {
  res.render("modal");
});
app.get("/list-group", (req, res) => {
  res.render("list-group");
});
app.get("/spinner", (req, res) => {
  res.render("spinner");
});
app.get("/movies", (req, res) => {
  const movies = [
    {
      name: "El Topo",
      poster:
        "https://assets.cdn.moviepilot.de/files/b466d6f225b730d32c8e1ba22d5579e8f52d191f48b4d5c92cdcf66ed1b5/limit/1024/2000/eltopo.jpg",
    },
    {
      name: "Jackie Brown",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/89/Jackie_Brown_%281997%29.png",
    },
    {
      name: "The Matrix",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    },
    {
      name: "Wings of Desire",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/7/74/Wingsofdesireposter.jpg",
    },
  ];
  res.render("movies", { movies });
});

app.get("/carousel", (req, res) => {
  const movies = [
    {
      name: "El Topo",
      poster:
        "https://assets.cdn.moviepilot.de/files/b466d6f225b730d32c8e1ba22d5579e8f52d191f48b4d5c92cdcf66ed1b5/limit/1024/2000/eltopo.jpg",
    },
    {
      name: "Jackie Brown",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/89/Jackie_Brown_%281997%29.png",
    },
    {
      name: "The Matrix",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    },
    {
      name: "Wings of Desire",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/7/74/Wingsofdesireposter.jpg",
    },
  ];
  res.render("carousel", { movies });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
