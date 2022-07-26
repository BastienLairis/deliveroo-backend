require("dotenv").config();
const express = require("express");
const data = require("./data.json");

const app = express();

app.get("/", (req, res) => {
  //J'envoie ma data au client
  res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log("Server has started !");
});
