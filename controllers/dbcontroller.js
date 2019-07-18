// hook the ORM
const db = require("../models");

// export methods
module.exports = {
// Users
    findUsers: function(req, res) {
        // pass an empty object ({}) in req.query to find all users.
        // pass {username: the_username} or {email: the_email} to search by username or email
        db.User.find(req.query).then().catch();
    },
    findUserByID: function(req, res) {
        db.User.findById(req.params.id).populate().then().catch();
    },
// Beers
    findBeer: function(req, res) {
        // pass an empty object ({}) in req.query to find all beers.
        db.Beer.find(req.query).then().catch();
    },
    findBeerByID: function(req, res) {
        db.Beer.findById(req.params.id).populate().then().catch();
    },
// Comments
    findComments: function(req, res) {
        // pass an empty object ({}) in req.query to find all comments.
        db.Comment.find(req.query).then().catch();
    },
    findCommentByID: function(req, res) {
        db.User.findById(req.params.id).populate().then().catch();
    }
};