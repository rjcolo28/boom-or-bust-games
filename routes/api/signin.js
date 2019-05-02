// const User = require("../../models/user");
// const mongoose = require("mongoose");
// var User = mongoose.model('User')
// const UserSession = require("../../models/UserSession");
const router = require("express").Router();    
const signupController = require("../../controllers/signupController");



// module.exports = () => {

    // sign up 
    router.route("/signup")
        .post(signupController.create)
    // log in
//     app.post("/account/signin", (req, res, next) => {
//         const { body } = req;
//         const {
//             password
//         } = body;
//         let {
//             username
//         } = body;

//         if (!username) {
//             res.send({
//                 success: "false",
//                 message: "error: missing username"
//             })
//         }
//         if (!password) {
//             return res.send({
//                 success: "false",
//                 message: "error: missing password"
//             })
//         }

//         User.find({
//             username: username,
//         }, (err, users) => {
//             if (err) {
//                 return res.send({
//                     success: false,
//                     message: "error: server error"
//                 });
//             }
//             if (users.length != 1) {
//                 return res.send({
//                     success: false,
//                     message: "Error: Invalid"
//                 })
//             }

//             const user = users[0];
//             if (!user.validPassword(password)) {
//                 return res.send({
//                     success: false,
//                     message: "Error: Invalid"
//                 })
//             }

//             // create a user session\
//             const UserSession = new UserSession();
//             UserSession.userId = user._id;

//             UserSession.save((err, doc) => {
//                 if (err) {
//                     return res.send({
//                         success: false,
//                         message: "error: server error"
//                     });
//                 }
//                 return res.send({
//                     success: true,
//                     message: "valid sign in",
//                     token: doc._id
//                 })
//             })
//         })
//     });

//     // verify account
//     app.get("/account/verify", (req, res, next) => {
//         // get token
//         const { query } = req;
//         const { token } = query;
//         // verify toke is unique
//         UserSession.find({
//             _id: token,
//             isDeleted: false
//         }, (err, session) => {
//             if (err) {
//                 return res.send({
//                     success: false,
//                     message: "error: server error"
//                 })
//             }
//             if (session.length != 1) {
//                 return res.send({
//                     success: false,
//                     message: "error: invalid"
//                 })
//             } else {
//                 return res.send({
//                     success: true,
//                     message: "goods"
//                 })
//             }
//         })
//     });

//     // log out 
//     app.get("/account/Logout", (req, res, next) => {
//         // get token
//         const { query } = req;
//         const { token } = query;
//         // verify toke is unique
//         UserSession.findOneAndUpdate({
//             _id: token,
//             isDeleted: false
//         }, {
//                 $set: { isDeleted: true }
//             }, null, (err, session) => {
//                 if (err) {
//                     return res.send({
//                         success: false,
//                         message: "error: server error"
//                     })
//                 }

//                 return res.send({
//                     success: true,
//                     message: "good"
//                 })
//             })
//     });
// };

module.exports = router;