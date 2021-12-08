
const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "t123456",
    database: "pools_db",
});