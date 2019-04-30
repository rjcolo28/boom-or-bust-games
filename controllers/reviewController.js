const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Review
            .find(req.query)
            .sort({ date: -1 })
            .then(dbReview => console.log(dbReview))
            .catch(err => res.status(422).json(err))
    },
    // saving new review and associating it with a game
    create: function(req, res) {
        db.Review
            .create(req.body)
            .then(dbReview => db.Game.findOneAndUpdate({ _id: req.body.game_id }, { $push: { reviews: dbReview._id }}, { new: true }))
            .then(dbGame => res.json(dbGame))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Review
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbReview => res.json(dbReview))
          .catch(err => res.status(422).json(err));
    },
    delete: function(req, res) {
        db.Review
            .findById({ _id: req.params.id })
            .then(dbReview => dbReview.remove())
            .then(dbReview => res.json(dbReview))
            .catch(err => res.status(422).json(err));      
    }   
}