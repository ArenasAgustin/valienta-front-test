const { Router } = require('express');
const router = Router();
const characterRoute = require('./characters');
const locationRoute = require('./locations');

router.use('/characters', characterRoute);

router.use('/locations', locationRoute);

module.exports = router;