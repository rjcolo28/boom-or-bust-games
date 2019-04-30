const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Game
            .find(req.query)
            .then(dbGame => res.json(dbGame))
            .catch(err => res.status(422).json(err))
    },
    findById: function(req, res) {
        db.Game
          .findById(req.params.id)
          .then(dbGame => res.json(dbGame))
          .catch(err => res.status(422).json(err));
      },
    // find specific game and populate it with saved reviews  
    populate: function(req, res) {
        db.Game
          .findById({ _id: req.params.id })
          .populate("reviews")
          .then(results => res.json(results))
          .catch(err => res.status(422).json(err));
    }
}