const router = require("express").Router();
const users = require("./users");
const beers = require("./beers");
const comments = require("./comments");

const beerSearch = require("./beersearch");
const breweryMapSearch = require("./brewerymapsearch");

// db routes
router.use("/users", users);
router.use("/beers", beers);
router.use("/comments", comments);

// external routes
router.use("/beersearch", beerSearch);
router.use("/brewerymapsearch", breweryMapSearch);

module.exports = router;
