var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : "3306",
  user     : 'root',
  password : '123456',
  database : 'driverschool'
});
 
connection.connect();

connection.query('SELECT * from Persons', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
});

connection.end();