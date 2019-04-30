const express = require('express');
const mongoose = require("mongoose");
const router = require("./routes");
const app = express();
var logger = require("morgan");
const port = process.env.PORT || 5000;
require("dotenv").config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.use(logger("dev"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
}

// console.log that server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/games-reloaded");

// GET route to know server is connected
app.get('/express_backend', (req, res) => {
  res.json({ "express": "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});