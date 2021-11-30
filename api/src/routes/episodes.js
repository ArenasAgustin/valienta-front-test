const { Router } = require("express");
const {
  getEpisodes,
  filterByNameEpisodes,
} = require("../controllers/episodes");
const router = Router();

router.get("/", getEpisodes);

router.get("/:name", filterByNameEpisodes);

module.exports = router;
