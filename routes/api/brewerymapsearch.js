const router = require("express").Router();
const breweryMap = require("../../controllers/breweryMapSearch");

router.route("/:query").
  get(breweryMap.breweryMapSearch);

module.exports = router;