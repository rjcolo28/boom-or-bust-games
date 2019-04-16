const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/games-reloaded";

mongoose.connect(MONGODB_URI)

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});