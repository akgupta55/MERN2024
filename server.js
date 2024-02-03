require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-route");
const connectDb = require("./util/db");

app.use(express.json());

// mounting route
app.use("/api/auth", router);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port : ${PORT}`);
  });
});

// k7APEJ2Nn98mV0nb
