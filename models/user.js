const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 6 },
    picture: { type: String, default: "https://img.icons8.com/android/24/000000/user.png" },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    games: [{ type: Schema.Types.ObjectId, ref: "Game" }], 
    isDeleted: {type: Boolean, default:false}
});

// Define schema methods
// method to hash password
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
// method to compare the passwords
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// // Define hooks for pre-saving
// UserSchema.pre('save', function (next) {
//     if (!this.password) {
//         console.log('models/user.js =======NO PASSWORD PROVIDED=======')
//         next()
//     } else {
//         console.log('models/user.js hashPassword in pre save');

//         this.password = this.hashPassword(this.password)
//         next()
//     }
// })

const User = mongoose.model("User", UserSchema);

module.exports = User;