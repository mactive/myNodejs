var config = require('./configLoader.js');

config.load(__dirname+'/config.json');

var mysql      = require('mysql');
var connection = mysql.createConnection(config.get('db'));

connection.connect(function(err) {
  // connected! (unless `err` is set)
  console.log("mysql====");
});

connection.query('SELECT * FROM `queue` ', function(err, rows) {
  // connected! (unless `err` is set)
  console.log(rows);
  console.log(err);
});