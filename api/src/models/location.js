const mongoose = require("mongoose");
const { Schema } = mongoose;

const locationSchema = new Schema({
    name_location: {
        type: String,
    },
    url_location: {
        type: String,
    },
});

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;