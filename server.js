const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
var logger = require("morgan");
const path = require("path");
const port = process.env.PORT || 5000;
require("dotenv").config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(express.static(path.join(__dirname, "client", "build")))

app.use(logger("dev"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// console.log that server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/games-reloaded");

// GET route to know server is connected
app.get('/express_backend', (req, res) => {
  res.json({ "express": "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});