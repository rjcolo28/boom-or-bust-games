const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/games-reloaded", { useNewUrlParser: true });

const gameSeed = [
    {
        "platforms" : [ 
            "Playstation 4", 
            "Xbox One", 
            "Microsoft Windows"
        ],
    "title" : "Sekiro: Shadows Die Twice",
    "genre" : "Action-adventure",
    "image" : "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Sekiro_art.jpg/220px-Sekiro_art.jpg",
    "summary" : "Carve your own clever path to vengeance in an all-new adventure from developer FromSoftware. Explore late 1500s Sengoku Japan, a brutal period of constant life and death conflict, as you come face to face with larger than life foes in a dark and twisted world. Unleash an arsenal of deadly prosthetic tools and powerful ninja abilities while you blend stealth, vertical traversal, and visceral head to head combat in a bloody confrontation. Take Revenge. Restore your honor. Kill Ingeniously."
    }
]

db.Game.create(gameSeed)
    .then(function(dbGame) {
        console.log(dbGame)
    })
    .catch(function(err) {
        console.log(err)
    });