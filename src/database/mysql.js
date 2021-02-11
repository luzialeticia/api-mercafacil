// const Sequelize = require('sequelize');
// const dbConfig = require('../config/mysql');

// const connection = new Sequelize(dbConfig);

// module.exports = connection

const con = require('../config/mysql');

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
});

module.exports = con;