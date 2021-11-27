const Character = require("../models/character");
const axios = require("axios");
const { arrayMerger, formatter } = require("./utils/arrayMerger");

const save = async (req, res) => {
  const { name, status, species, gender, image, location, episode } = req.body;
  const newCharacter = new Character({
    name,
    status,
    species,
    gender,
    image,
    location,
    episode,
  });

  try {
    const character = await newCharacter.save();
    res.send({
      status: "ok",
      character,
    });
  } catch (error) {
    res.send({
      status: "error",
      error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const characters = await Character.find();

    const charactersApiPage1 = await axios.get(
      `https://rickandmortyapi.com/api/character/`
    );
    const charactersApiPage2 = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=2`
    );
    const charactersApiPage3 = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=3`
    );

    const charactersApiData = [
      ...charactersApiPage1.data.results,
      ...charactersApiPage2.data.results,
      ...charactersApiPage3.data.results,
    ];

    const characterApiRefactored = await arrayMerger(
      [...characters],
      [...charactersApiData]
    );

    res.json(characterApiRefactored);
  } catch (err) {
    res.json({ message: err });
  }
};

const getById = async (req, res) => {
  try {
    const { _id } = req.params;
    let character = {};

    if (!_id.match(/^[0-9a-fA-F]{24}$/)) {
      let characterApi = await axios.get(
        `https://rickandmortyapi.com/api/character/${_id}`
      );

      const newCharacterArray = await formatter([characterApi.data]);
      const newCharacterObjet = new Character(newCharacterArray[0]);

      character = await newCharacterObjet.save();
    } else {
      character = await Character.findById(_id);
    }

    res.json(character);
  } catch (err) {
    res.json({ message: err }).status(400);
  }
};

module.exports = {
  getAll,
  getById,
  save,
};
