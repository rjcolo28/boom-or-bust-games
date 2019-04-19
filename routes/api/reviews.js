const router = require("express").Router();
const reviewsController = require("../../controllers/reviewController");


router.route("/api/reviews")
  .get(reviewsController.findAll)
  .post(reviewsController.create);


router
  .route("/api/reviews/:id")
  .get(reviewsController.findById)
  .put(reviewsController.update)
  .delete(reviewsController.remove);

module.exports = router;