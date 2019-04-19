const router = require("express").Router();
const usersController = require("../../controllers/userController");


router.route("/api/users")
  .get(usersController.findAll)
  .post(usersController.create);


router
  .route("/api/users/:id")
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
