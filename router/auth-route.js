const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).send("Welcome to day 1st of coding 15 days challenges");
});

module.exports = router;
