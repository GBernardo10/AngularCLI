var sql = require("mssql");
var app = express();
var express = require('express');

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
	var config = {
    user: 'adminGO',
    password: 'GameOver0',
    server: 'gameoverserve.database.windows.net',
	database: 'DataBaseGO',
    options: { encrypt: 'true', }
};

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from users', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});