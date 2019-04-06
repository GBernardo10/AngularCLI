var express = require('express');

var sql = require("mssql");

var app = express();

app.get('/', function (req, res) {

    // config for your database
    var config = {
        user: 'adminGO',
        password: 'GameOver0',
        server: 'gameoverserve.database.windows.net',
        database: 'DataBaseGO',
        options: { encrypt: 'true', }
    };

    sql.connect(config)
        .then(conn => console.log("conectou!"))
        .catch(err => console.log("erro! " + err));
});