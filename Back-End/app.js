const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const configdb = require("./config/db.config");
const postsRoutes = require("./router/postsRoutes");

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

mongoose
  .connect(configdb.db, {
    UseNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database blog :)");
  })
  .catch((error) => {
    console.log("cannot connect to database blog :(" + error);
  });

app.use("/api", postsRoutes);

const port = process.env.PORT || 8000;

app.listen(port, function () {
  console.log("Ready to Run ...");
});
