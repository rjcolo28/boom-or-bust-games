const router = require("express").Router();
const gamesRoutes = require("./games");
const usersRoutes = require("./users");
const reviewsRoutes = require("./reviews");


router.use("/games", gamesRoutes);
router.use("/users", usersRoutes);
router.use("/reviews", reviewsRoutes);

module.exports = router;