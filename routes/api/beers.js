const router = require("express").Router();
const dbCon = require("../../controllers/dbcontroller");

// "/api/beers"
router.route("/").
  get(dbCon.findBeer).
  post(dbCon.createBeer);

// "/api/beers/:id"
router.route("/:id").
  get(dbCon.findBeerByID).
  put(dbCon.updateBeer).
  delete(dbCon.removeBeer);

module.exports = router;
