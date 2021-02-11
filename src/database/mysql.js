const Sequelize = require('sequelize');
const dbConfig = require('../config/mysql');

const connection = new Sequelize(dbConfig);

module.exports = connection