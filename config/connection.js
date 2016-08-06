var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,
	host: process.env.db_host || 'gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: process.env.db_user || 'qwzn7byz7znjg5hz',
	password: process.env.db_pw || 'g8vk0rq04taj8xqk',
	database: process.env.db || 'i1ij2foo6cszn34k'
});

connection.connect(function(err){
	if(err){
		console.log(err);
		return;
	}
});

module.exports = connection;