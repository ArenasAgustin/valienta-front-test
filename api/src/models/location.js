const mongoose = require("mongoose");
const { Schema } = mongoose;

const locationSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
  },
  dimension: {
    type: String,
  },
  url: {
    type: String,
  },
});

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
