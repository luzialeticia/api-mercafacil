const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysqlDB = require('../src/database/mysql')
const index = require('./routes/index');

mysqlDB.connect()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', cors(), index);

module.exports = app;