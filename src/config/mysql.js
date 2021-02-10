const mysql = require('mysql2');
const dotEnv = require('dotenv');

dotEnv.config()

const pool = mysql.createPool({
    "user": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
})