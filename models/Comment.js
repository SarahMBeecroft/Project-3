const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    note: {type: String, required: true},
    username: {type: Schema.Types.ObjectId, ref: "User"},
    beer: {type: String, ref: "Beer"},
    timestamp: {type: Date},
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;