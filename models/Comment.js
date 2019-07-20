const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    note: {type: String, required: true},
    username: {type: String, required: true},
    beer: {type: String, required: true},
    timestamp: {type: Date},
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;