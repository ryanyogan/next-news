import express from "express";
import cors from "cors";

const categories = require("./categories.json");
const posts = require("./posts.json");
const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;

app.get("/posts", (_req, res) => {
  return res.json(posts);
});

app.get("/categories", (_req, res) => {
  return res.json(categories);
});

app.listen(port, () => {
  console.log(`DB is running on http://localhost:${port}`);
});
