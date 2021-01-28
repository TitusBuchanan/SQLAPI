var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'password',
    port:3306,
    database:'sql_store'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to SQL!");
});