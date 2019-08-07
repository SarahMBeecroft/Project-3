const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String},
    location: {
        lat: Number,
        lng: Number
    },
    addedBy: {type: Schema.Types.ObjectId, ref: "User"},
    beers: [{type: String, ref: "Beer"}]
});

const Bar = mongoose.model("Bar", barSchema);

module.exports = Bar;