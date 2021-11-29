const { Router } = require("express");
const {
  getLocations,
  filterByName,
} = require("../controllers/locations");
const router = Router();

router.get("/", getLocations);

router.get("/:name", filterByName);

module.exports = router;
