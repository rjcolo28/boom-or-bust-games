const router = require("express").Router();
const usersController = require("../../controllers/userController");

router.route("/users")
  .post(usersController.create);


router
  .route("/users/:id")
  .put(usersController.update)
  .delete(usersController.delete);

module.exports = router;
