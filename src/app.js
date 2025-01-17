const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require('./database/macapa');

const index = require('./routes/index');
const clientRoute = require('./routes/Clients');
const macapaRoutes = require('./routes/Macapa');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', cors(), index);
app.use('/signup', cors(), clientRoute);
app.use('/macapa', cors(), macapaRoutes);

module.exports = app;