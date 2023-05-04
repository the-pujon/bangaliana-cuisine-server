const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const chefData = require("./data/chef.json");
const recipesData = require("./data/recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/chefs", (req, res) => {
  res.send(chefData);
});
