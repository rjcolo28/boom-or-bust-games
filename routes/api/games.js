const router = require("express").Router();
const gamesController = require("../../controllers/gameController");


router.route("/api/games")
  .get(gamesController.findAll)

router
  .route("/api/games/:id")
  .get(gamesController.findById)
  .put(gamesController.update)

module.exports = router;
