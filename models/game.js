const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema ({
    title: { type: String, required: true },
    platforms: { type: Array },
    genres: { type: String },
    image: { type: String },
    summary: { type: String, required: true },
    reviews: [ { type: Schema.Types.ObjectId, ref: "Review" } ]
})

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;