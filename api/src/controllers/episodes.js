const axios = require("axios");

let episodes = [];

const getEpisodes = async (req, res) => {
  try {
    const episodePage1 = await axios.get(
      "https://rickandmortyapi.com/api/episode"
    );
    const episodePage2 = await axios.get(
      "https://rickandmortyapi.com/api/episode/?page=2"
    );
    const episodePage3 = await axios.get(
      "https://rickandmortyapi.com/api/episode/?page=3"
    );

    episodes = [
      ...episodePage1.data.results,
      ...episodePage2.data.results,
      ...episodePage3.data.results,
    ];

    const nameEpisodes = new Set();
    const episodeCode = new Set();

    episodes.forEach((episode) => {
      nameEpisodes.add(episode.name);
      episodeCode.add(episode.episode);
    });

    res.send({ episodes, nameEpisodes, episodeCode });
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

    const filteredEpisodes = episodes.filter((episode) =>
      episode.name.toLowerCase().includes(name.toLowerCase())
    );

    res.send(filteredEpisodes);
  } catch (error) {
    res.send({
      status: "error",
      error,
    });
  }
};

module.exports = {
  getEpisodes,
  filterByName,
};
