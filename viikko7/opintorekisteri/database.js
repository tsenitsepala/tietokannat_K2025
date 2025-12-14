const mysql = require('mysql2');

const myConnectionString = "mysql://netuse:netpass@localhost:3306/arviointitietokanta";
const connection = mysql.createPool(myConnectionString);

module.exports = connection;