const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 6 },
    email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },
    picture: { type: String },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;