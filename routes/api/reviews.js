const router = require("express").Router();
const reviewsController = require("../../controllers/reviewController");


router.route("/")
  .get(reviewsController.findAll)
  .post(reviewsController.create);


router
  .route("/:id")
  .put(reviewsController.update)
  .delete(reviewsController.delete);

module.exports = router;