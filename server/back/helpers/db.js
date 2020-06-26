const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ARCOxp380',
  database : 'Odyssey'
});
module.exports  =  connection;