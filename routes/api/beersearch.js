const router = require("express").Router();
const beerSearch = require("../../controllers/beersearch");

router.route("/:query").
  get(beerSearch.searchBeer);

module.exports = router;