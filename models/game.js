const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema ({
    api_id: { type: Number, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    userRating: { type: Number },
    overallRating: { type: Number }
})

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;