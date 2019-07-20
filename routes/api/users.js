const router = require("express").Router();
const dbCon = require("../../controllers/dbcontroller");

// "/api/users"
router.route("/").
  get(dbCon.findUsers).
  post(dbCon.createUser);

// "/api/users/:id"
router.route("/:id").
  get(dbCon.findUserByID).
  put(dbCon.updateUser).
  delete(dbCon.removeUser);

module.exports = router;
