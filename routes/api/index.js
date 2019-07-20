const router = require("express").Router();
const users = require("./users");
const beers = require("./beers");
const comments = require("./comments");

// saved routes
router.use("/users", users);
router.use("/beers", beers);
router.use("/comments", comments);

module.exports = router;
