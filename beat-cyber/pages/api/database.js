var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'mobile7',
  user: 'lucas',      
  password: 'luK14gaga',      
  database: 'webproject' 
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;

