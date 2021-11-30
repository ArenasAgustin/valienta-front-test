const axios = require("axios");
const Location = require("../models/location");

const getLocations = async (req, res) => {
  try {
    const locationsPage1 = await axios.get(
      "https://rickandmortyapi.com/api/location"
    );
    const locationsPage2 = await axios.get(
      "https://rickandmortyapi.com/api/location/?page=2"
    );
    const locationsPage3 = await axios.get(
      "https://rickandmortyapi.com/api/location/?page=3"
    );

    const locations = [
      ...locationsPage1.data.results,
      ...locationsPage2.data.results,
      ...locationsPage3.data.results,
    ];

    const typeLocations = new Set(["all"]);
    const nameLocations = new Set(["all"]);

    locations.map(async (location) => {
      typeLocations.add(location.type);
      nameLocations.add(location.name);
      (await Location.findOne({ name: location.name })) ||
        (await Location.create(location));
    });

    res.send({
      locations,
      typeLocations: [...typeLocations],
      nameLocations: [...nameLocations],
    });
  } catch (error) {
    res.send({
      status: "error",
      error,
    });
  }
};

const filterByName = async (req, res) => {
  try {
    const { name } = req.params;

    name.replace("%20", " ");

    const filteredLocations = await Location.findOne({ name });

    res.send([filteredLocations]);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getLocations,
  filterByName,
};
