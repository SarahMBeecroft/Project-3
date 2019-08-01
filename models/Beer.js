const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
    // _id: {type: Schema.Types.ObjectId, required: true},
    _id: { type: String, required: true },
    name: { type: String, required: true },
    // user: {type: mongoose.ObjectId, required: true},
    brewery: { type: String },
    bars: [{ type: Schema.Types.ObjectId, ref: "Bar" }],
    description: { type: String },
    label: { type: String },
    abv: { type: Number },
    ibu: { type: Number },
    flavors: [{ type: String }],
    favorited: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;