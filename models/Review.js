const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema ({
    game: [{ type: Schema.Types.ObjectId, ref: "Game" }],
    review: { type: String, required: true },
    reviewer: [{ type: Schema.Types.ObjectId, ref: "User" }]
});

var Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;