const db = require("../models");


module.exports = {
    create: function(req, res) {
        db.User
          .create(req.body)
          .then(dbUser => res.json(dbUser))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.User
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbUser => res.json(dbUser))
          .catch(err => res.status(422).json(err));
    },
    delete: function(req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));      
    }   
};