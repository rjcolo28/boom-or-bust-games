const db = require("../models");


module.exports = {
    create: function(req, res) {
        console.log("presave", req.body)
        db.User
          .create({ username: req.body.username, password: req.body.password})
          .then(dbUser => res.json(dbUser))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.User
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    delete: function(req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))      
    }
// , 
//     check: function(){

//     } 
    
//     (req, res, next) => {
//         const { body } = req;
//         const {
//             password } = body;
//         let { username } = body;
//         // checks to see if there is a username
//         if (!username) {
//             res.send({
//                 success: "false",
//                 message: "error: missing username"
//             })
//         }
//         // checks to see if there is a password
//         if (!password) {
//             return res.send({
//                 success: "false",
//                 message: "error: missing password"
//             })
//         }
//         // checks if the is an user with the same username and if there isn't saves it
//         User.find({
//             username: username
//         }, (err, previousUser) => {
//             if (err) {
//                 return res.send({
//                     success: "false",
//                     message: "error: server error"
//                 });
//             } else if (previousUser.length > 0) {
//                 return res.send({
//                     success: "false",
//                     message: "error: account already exist"
//                 })
//             }

//             // save the new user
//             const newUser = new User();

//             newUser.username = username;
//             newUser.password = newUser.generateHash(password);
//             newUser.save((err, user) => {
//                 if (err) {
//                     return res.send({
//                         success: "false",
//                         message: "error: server error"
//                     });
//                 }
//                 return res.send({
//                     success: true,
//                     message: "signed up"
//                 })
//             })
//         })
//     });
};