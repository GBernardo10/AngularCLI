var express = require('express');
var app = express();
var sql = require('mssql');
var http = require('http');
var bodyParser = require('body-parser');


app.get('/', function (req, res) {
	// configurar conexao banco de dados
	var config = {
		user: 'adminGO',
		password: 'GameOver0',
		server: 'gameoverserve.database.windows.net:1433',
		database: 'DataBaseGO'
	};

	sql.connect(config, function (err) {
		if (err) console.log(err);

		var request = new sql.Request();

		request.query('select * from users', function (err, recordset) {
			if (err) console.log(err)

			res.send(recordset);
		});
	});
});

var server = app.listen(5000, function () {
	console.log('Server is running...');
});