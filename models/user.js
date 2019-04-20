const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 6 },
    email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },
    picture: { type: String, default: "https://img.icons8.com/android/24/000000/user.png" },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review"}],
    games: [{ type: Schema.Types.ObjectId, ref: "Game"}]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;