const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to day 1st of coding 15 days challenges");
});

app.get("/registration", (req, res) => {
  res.status(200).send("Welcome to My Coding challenge");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running at port : ${PORT}`);
});
