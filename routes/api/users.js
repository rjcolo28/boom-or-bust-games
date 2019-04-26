const router = require("express").Router();
const usersController = require("../../controllers/userController");

router.route("/")
  .post(usersController.create);


router
  .route("/:id")
  .put(usersController.update)
  .delete(usersController.delete);

module.exports = router;
