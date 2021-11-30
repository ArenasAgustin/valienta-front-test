const { Router } = require('express');
const router = Router();
const characterRoute = require('./characters');
const locationRoute = require('./locations');
const episodeRoute = require('./episodes');

router.use('/characters', characterRoute);

router.use('/locations', locationRoute);

router.use('/episodes', episodeRoute);

module.exports = router;