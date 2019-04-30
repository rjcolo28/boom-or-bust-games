const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
// this prefices all routes inside of api folder with /api, so do not need to re-write it in those files
// ok. i wasn't the one who set this up so i was a little bit confussed. ryan did. no worries, but you can keep my comment above to remind yourself :). ok. 
router.use("/api", apiRoutes);

module.exports = router;