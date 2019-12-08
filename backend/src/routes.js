const express = require('express');
const UserController = require('./controllers/UserController');
const MovieController = require('./controllers/MovieController');
const routes = express.Router();

routes.post('/sessions', UserController.store);

routes.post('/movies', MovieController.store);

module.exports = routes;
