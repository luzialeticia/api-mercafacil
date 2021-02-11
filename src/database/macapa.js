const Sequelize = require('sequelize');
const dbConfig = require('../config/macapa');

const Contact = require('../models/Macapa');

const connection = new Sequelize(dbConfig);

Contact.init(connection);

module.exports = connection;