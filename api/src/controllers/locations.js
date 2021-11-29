const axios = require("axios");

let locations = [];

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

    locations = [
      ...locationsPage1.data.results,
      ...locationsPage2.data.results,
      ...locationsPage3.data.results,
    ];

    const typeLocations = new Set();
    const nameLocations = new Set();

    locations.map((location) => {
      typeLocations.add(location.type);
      nameLocations.add(location.name);
    });

    res.send({ locations, typeLocations, nameLocations });
  } catch (error) {
    res.send({
      status: "error",
      error,
    });
  }
};

const filterByName = (req, res) => {
  try {
    const { name } = req.params;

    const filteredLocations = locations.filter((location) =>
      location.name.toUppercase().includes(name.toUppercase())
    );

    res.send(filteredLocations);
  } catch (error) {
    res.send({
      status: "error",
      error,
    });
  }
};

module.exports = {
  getLocations,
  filterByName,
};
