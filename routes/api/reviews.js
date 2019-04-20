const router = require("express").Router();
const reviewsController = require("../../controllers/reviewController");


router.route("/reviews")
  .get(reviewsController.findAll)
  .post(reviewsController.create);


router
  .route("/reviews/:id")
  .put(reviewsController.update)
  .delete(reviewsController.delete);

module.exports = router;