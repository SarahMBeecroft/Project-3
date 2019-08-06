const router = require("express").Router();
const breweryMap = require("../../controllers/breweryMapSearch");

router.route("/:callback").
  get(breweryMap.mapSearch);

module.exports = router;