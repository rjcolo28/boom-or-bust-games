const router = require("express").Router();
const gamesController = require("../../controllers/gameController");


router.route("/")
  .get(gamesController.findAll)

router.route("/info/:id")
  .get(gamesController.findById)

router.route("/populate/:id")
  .get(gamesController.populate)

module.exports = router;