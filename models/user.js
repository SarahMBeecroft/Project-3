const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    dateJoined: {type: Date},
    lastLogin: {type: Date},
    favorites: {type: Array},
    comments: {type: Array}
});

const User = mongoose.model("User", userSchema);

module.exports = User;