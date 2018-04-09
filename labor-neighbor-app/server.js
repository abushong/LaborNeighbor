const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/user', (req, res) => {

	console.log('here1');
	var con = mysql.createConnection({
		host: "localhost",
		user: "ln",
		password: "password",
		database: "LaborNeighbor"
	});

	console.log('here');

	con.connect(function(err) {
		if(err) throw err;
		console.log("Connected!");
		var sql = "INSERT INTO Users (FirstName, LastName) VALUES (Nic Cage)";
		con.query(sql, function(err, result){
			if(err) throw err;
			console.log("1 record inserted");
		});
	});
});

app.get("/api/users", (req, res) => {

	var con = mysql.createConnection({
		host: "localhost",
		user: "ln",
		password: "password",
		database: "LaborNeighbor"
	});

	con.connect(function(err) {
		if(err) throw err;
		con.query("SELECT * FROM Users", function(err, result, fileds){
			if(err) throw err;
			console.log(result);
		});
	});

});


app.listen(port, () => console.log(`Listening on port ${port}`));