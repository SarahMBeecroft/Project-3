const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
    name: {type: String, required: true},
    id: {type: String, required: true},
    user: {type: mongoose.ObjectId, required: true},
    brewery: {type: String},
    bars: {type: Array},
    description: {type: String},
    label: {type: String},
    abv: {type: Number},
    ibu: {type: Number},
    flavors: {type: Array},
    favorited: {type: Array},
    comments: {type: Array}
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;