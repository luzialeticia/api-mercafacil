const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const index = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', cors(), index);

module.exports = app;