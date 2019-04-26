const router = require("express").Router();
const gamesController = require("../../controllers/gameController");


router.route("/")
  .get(gamesController.findAll)

router
  .route("/:id")
  .get(gamesController.findById)
  .put(gamesController.update)

module.exports = router;
