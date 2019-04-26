var express = require('express');
var app = express();
var sql = require('mssql');
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

var port = 5000;

//app.get('/', function (req, res) {
// configurar conexao banco de dados
var config = {
	server: 'gameoverserve.database.windows.net',
	user: 'adminGO',
	password: 'GameOver0',
	database: 'DataBaseGO',
	options:
	{
		database: 'DataBaseGO', //update me
		encrypt: true
	}
};

sql.connect(config, function (err) {
	if (err) console.log(err);

	// create request
	var request = new sql.Request();

	// pega os registro na tabela conforme o query abaixo
	request.query('select * from users', function (err, recordset) {
		if (!err) {
			console.log(recordset)
		}
		//res.send(recordset);
	});
});
//});

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});

export class ConexaoBancoDados {
}
