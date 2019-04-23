const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
var logger = require("morgan");
const port = process.env.PORT || 5000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use(logger("dev"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
}

// console.log that server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/games-reloaded";

mongoose.connect(MONGODB_URI)

// GET route to know server is connected
app.get('/express_backend', (req, res) => {
  res.json({ "express": "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});