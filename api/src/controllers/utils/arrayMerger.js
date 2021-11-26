const axios = require("axios");

const formatter = async (array) => {
  try {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
      const episodeApi = await axios.get(`${array[i].episode[0]}`);

      const episode = {
        name: episodeApi.data.name,
        url: episodeApi.data.url,
        air_date: episodeApi.data.air_date,
      };
      const location = {
        name: array[i].location.name,
        url: array[i].location.url,
      };

      const newCharacter = {
        id: array[i].id,
        name: array[i].name,
        status: array[i].status,
        species: array[i].species,
        image: array[i].image,
        gender: array[i].gender,
        location,
        episode,
      };

      newArray.push(newCharacter);
    }

    return newArray;
  } catch (err) {
    res.json({ message: err });
  }
};

const arrayMerger = async (arrayDB, arrayApi) => {
  try {
    const array = [...arrayDB];
    arrayApi = await formatter(arrayApi);

    for (let i = 0; i < arrayApi.length; i++) {
      let equal = false;

      for (let j = 0; (j < arrayDB.length) & !equal; j++) {
        if (arrayApi[i].name === arrayDB[j].name) equal = true;
      }

      if (!equal) array.push(arrayApi[i]);
    }
    return array;
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = { arrayMerger, formatter };
