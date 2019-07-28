const router = require("express").Router();
const dbCon = require("../../controllers/dbcontroller");

// "/api/bars"
router.route("/").
  get(dbCon.findBar).
  post(dbCon.createBar);

// "/api/bars/:id"
router.route("/:id").
  get(dbCon.findBarByID).
  put(dbCon.updateBar).
  delete(dbCon.removeBar);

module.exports = router;
