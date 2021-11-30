const mongoose = require("mongoose");
const { Schema } = mongoose;

const EpisodeSchema = new Schema({
  name: {
    type: String,
  },
  url: {
    type: String,
  },
  air_date: {
    type: String,
  },
  episode: {
    type: String,
    required: true,
    unique: true,
  },
});

const Episode = mongoose.model("Episode", EpisodeSchema);
module.exports = Episode;
