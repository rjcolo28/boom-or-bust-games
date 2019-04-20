const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/games-reloaded", { useNewUrlParser: true });

const userSeed = [
    {
        username: "butjonDoe123",
        password: "deerMan45",
        email: "jondoe@email.com",
    },
];

db.User.create(userSeed)
    .then(function(dbUser) {
        console.log(dbUser)
    })
    .catch(function(err) {
        console.log(err)
    });