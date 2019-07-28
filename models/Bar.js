const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String},
    location: {
        lat: Number,
        lng: Number
    },
    addedBy: {type: mongoose.ObjectId, required: true},
    beers: {type: Array}
});

const Bar = mongoose.model("Bar", barSchema);

module.exports = Bar;