const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema (
    {
        game: { type: Schema.Types.ObjectId, ref: "Game" },
        posted: { type: Date, default: Date.now },
        author: [ { type: Schema.Types.ObjectId, ref: "User"} ],
        review: { type: String, required: true }
    }
);

var Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;