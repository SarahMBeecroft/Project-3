const router = require("express").Router();
const dbCon = require("../../controllers/dbcontroller");

// "/api/comments"
router.route("/").
  get(dbCon.findComments).
  post(dbCon.createComment);

// "/api/comments/:id"
router.route("/:id").
  get(dbCon.findCommentByID).
  put(dbCon.updateComment).
  delete(dbCon.removeComment);

module.exports = router;
