const router = require("express").Router();
const gamesController = require("../../controllers/gameController");


router.route("/games")
  .get(gamesController.findAll)

router
  .route("/games/:id")
  .get(gamesController.findById)
  .put(gamesController.update)

module.exports = router;
