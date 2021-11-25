const mongoose = require("mongoose");
const { Schema } = mongoose;

const EpisodeSchema = new Schema({
    name_episode: {
        type: String,
    },
    url_episode: {
        type: String,
    },
    air_date_episode: {
        type: String,
    },
});

const Episode = mongoose.model("Episode", EpisodeSchema);
module.exports = Episode;