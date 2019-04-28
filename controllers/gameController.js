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
    // find all games and populate them with their reviews  
    populate: function(req, res) {
        db.Game
          .find({})
          .populate("reviews")
          .then(dbGame => res.json(dbGame))
          .catch(err => res.status(422).json(err));
    }
}