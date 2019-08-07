// hook the ORM
const db = require("../models");

// export methods
module.exports = {
    /* ***** */
    // Users //
    /* ***** */
    createUser: function (req, res) {
        db.User.create(req.body).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findUsers: function (req, res) {
        // pass an empty object ({}) in req.query to find all users.
        // pass {username: the_username} or {email: the_email} to search by username or email
        db.User.find(req.query).
            then((dbRes) => {
                console.log(dbRes);
                res.json(dbRes);
            }).
            catch((err) => { res.status(422).json(err); });
    },
    findUserByID: function (req, res) {
        db.User.findById(req.params.id).
            populate("favorites").
            then((dbRes) => {
                // console.log(dbRes);
                res.json(dbRes);
            }).
            catch((err) => { res.status(422).json(err); });
    },
    updateUser: function (req, res) {
        db.User.findByIdAndUpdate(req.params.id, req.body, { new: true }).
            populate("favorites").
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    removeUser: function (req, res) {
        db.User.findByIdAndDelete(req.params.id).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    /* ***** */
    // Beers //
    /* ***** */
    createBeer: function (req, res) {
        console.log(req.body);
        db.Beer.create(req.body).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findBeer: function (req, res) {
        // pass an empty object ({}) in req.query to find all beers.
        console.log(req.query);
        db.Beer.find(req.query).
            sort({ favorited: -1 }).
            limit(20).
            then((dbRes) => {
                console.log(dbRes);
                res.json(dbRes);
            }).
            catch((err) => { res.status(422).json(err); });
    },
    findBeerByID: function (req, res) {
        db.Beer.findById(req.params.id).
            populate().
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    updateBeer: function (req, res) {
        db.Beer.findByIdAndUpdate(req.params.id, req.body, {new: true}).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    removeBeer: function (req, res) {
        db.Beer.findByIdAndDelete(req.params.id).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    /* ***** */
    // Bars  //
    /* ***** */
    createBar: function (req, res) {
        db.Bar.create(req.body).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findBar: function (req, res) {
        // pass an empty object ({}) in req.query to find all bars.
        db.Bar.find(req.query).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findBarByID: function (req, res) {
        db.Bar.findById(req.params.id).
            populate().
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    updateBar: function (req, res) {
        db.Bar.findByIdAndUpdate(req.params.id, req.body).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    removeBar: function (req, res) {
        db.Bar.findByIdAndDelete(req.params.id).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    /* ******** */
    // Comments //
    /* ******** */
    createComment: function (req, res) {
        db.Comment.create(req.body).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findComments: function (req, res) {
        // pass an empty object ({}) in req.query to find all comments.
        db.Comment.find(req.query).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findCommentByID: function (req, res) {
        db.Comment.findById(req.params.id).
            populate().
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    updateComment: function (req, res) {
        db.Comment.findByIdAndUpdate(req.params.id, req.body).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    removeComment: function (req, res) {
        db.Comment.findByIdAndDelete(req.params.id).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    /* ******** */
    // Specials //
    /* ******** */
    addFav: function (req, res) {
        const userID = req.params.id;
        // console.log(userID);
        const beerID = req.body._id;
        // console.log(beerID);

        db.Beer.findById(beerID).
            then(beerDBRes => {
                if (!beerDBRes) {
                    db.Beer.create(req.body).
                        then(addBeerRes => {
                            // console.log(addBeerRes);
                            db.User.findByIdAndUpdate(userID, { $addToSet: { favorites: addBeerRes._id } }, { new: true }).
                                // populate("favorites").
                                then(userFavRes => {
                                    // console.log(userFavRes);
                                    res.json(userFavRes.favorites);
                                }).
                                catch((err) => { res.status(422).json(err); });
                            db.Beer.findByIdAndUpdate(beerID, { $addToSet: { favorited: userID } }, { new: true }).
                                then(dbRes => { console.log(dbRes); }).
                                catch((err) => { console.log(err); });
                        }).
                        catch((err) => { res.status(422).json(err); });
                }
                else {
                    db.User.findByIdAndUpdate(userID, { $addToSet: { favorites: beerDBRes._id } }, { new: true }).
                        // populate("favorites").
                        then(userFavRes => {
                            // console.log(userFavRes);
                            res.json(userFavRes.favorites);
                            db.Beer.findByIdAndUpdate(beerID, { $addToSet: { favorited: userID } }, { new: true }).
                                then(dbRes => { console.log(dbRes); }).
                                catch((err) => { console.log(err); });
                        }).
                        catch((err) => { res.status(422).json(err); });
                }
            }).
            catch((err) => { res.status(422).json(err); });
    }
};