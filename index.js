const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const chefs = require("./data/chef.json");
const recipes = require("./data/recipes.json");

app.use(cors());

//recipes server homepage
app.get("/", (req, res) => {
  res.send("The recipes data");
});

//for chefs
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

//for getting recipes by category
app.get("/chef/:id", (req, res) => {
  const categoryId = req.params.id;

  const categoryrecipes = chefs.find((n) => n.id === categoryId);
  res.send(categoryrecipes);
});

//for all recipes
app.get("/recipes", (req, res) => {
  res.send(recipes);
});

//for getting recipes by id
app.get("/recipes/:id", (req, res) => {
  const recipesId = req.params.id;
  const selectedrecipes = recipes.filter((n) => n.chef_id === recipesId);
  res.send(selectedrecipes);
});

app.listen(port, () => {
  console.log("server is running in port: ", port);
});
