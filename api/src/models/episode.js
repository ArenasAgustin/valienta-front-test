const mongoose = require("mongoose");
const { Schema } = mongoose;

const EpisodeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
  },
  air_date: {
    type: String,
  },
  episode: {
    type: String,
  },
});

const Episode = mongoose.model("Episode", EpisodeSchema);
module.exports = Episode;
