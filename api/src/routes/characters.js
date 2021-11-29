const Router = require("express");
const { getAll, getById, save } = require("../controllers/character");
const router = Router();

router.get("/", getAll);

router.get("/:_id", getById);

router.post("/", save);

module.exports = router;
