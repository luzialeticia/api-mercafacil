const express = require('express');
const Contact = express();
const cors = require('cors');
const controller = require('../controllers/Macapa');

Contact.post('/', cors(), controller.store);

module.exports = Contact;