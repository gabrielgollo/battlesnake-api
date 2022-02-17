const express = require('express');
const routes = express.Router();
const topLevelConfig = require('./src/configs/top-level.json')
const GameController = require('./src/controllers/game-controller');

routes.get('/', (req, res) => {
    res.status(200).json(topLevelConfig);
});

routes.post('/start', GameController.start);

module.exports = routes;