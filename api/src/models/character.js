const mongoose = require("mongoose");
const { Schema } = mongoose;

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
  },
  species: {
    type: String,
  },
  gender: {
    type: String,
  },
  image: {
    type: String,
  },
  location: [
    {
      type: {
        name: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    },
  ],
  episode: [
    {
      type: {
        name: {
          type: String,
        },
        url: {
          type: String,
        },
        air_date: {
          type: String,
        },
      },
    },
  ],
});

const Character = mongoose.model("Character", characterSchema);
module.exports = Character;
