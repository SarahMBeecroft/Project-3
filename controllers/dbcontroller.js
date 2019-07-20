// hook the ORM
const db = require("../models");

// export methods
module.exports = {
    // Users
    findUsers: function (req, res) {
        // pass an empty object ({}) in req.query to find all users.
        // pass {username: the_username} or {email: the_email} to search by username or email
        db.User.find(req.query).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findUserByID: function (req, res) {
        db.User.findById(req.params.id).populate().
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    // Beers
    findBeer: function (req, res) {
        // pass an empty object ({}) in req.query to find all beers.
        db.Beer.find(req.query).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findBeerByID: function (req, res) {
        db.Beer.findById(req.params.id).
            populate().
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    // Comments
    findComments: function (req, res) {
        // pass an empty object ({}) in req.query to find all comments.
        db.Comment.find(req.query).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findCommentByID: function (req, res) {
        db.User.findById(req.params.id).
            populate().
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    }
};