const axios = require("axios");
const Episode = require("../models/episode");

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

    const episodes = [
      ...episodePage1.data.results,
      ...episodePage2.data.results,
      ...episodePage3.data.results,
    ];

    const nameEpisodes = new Set(["all"]);
    const episodeCode = new Set(["all"]);

    episodes.forEach(async (episode) => {
      nameEpisodes.add(episode.name);
      episodeCode.add(episode.episode);
      (await Episode.findOne({ name: episode.episode })) ||
        (await Episode.create(episode));
    });

    res.send({
      episodes,
      nameEpisodes: [...nameEpisodes],
      episodeCode: [...episodeCode],
    });
  } catch (error) {
    res.send({
      status: "error",
      error,
    });
  }
};

const filterByNameEpisodes = async (req, res) => {
  try {
    const { name } = req.params;

    name.replace("%20", " ");

    const filteredEpisodes = await Episode.find({ name: name });

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
  filterByNameEpisodes,
};
