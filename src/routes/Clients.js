const express = require('express');
const Client = express();
const cors = require('cors');
const controller = require('../controllers/Clients');

Client.post('/', cors(), controller.store);

module.exports = Client;