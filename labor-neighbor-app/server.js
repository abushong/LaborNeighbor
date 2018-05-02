const express = require('express');
const mysql = require('mysql');
var app = express();
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var token = "abcd1234";
app.use(bodyParser());
//app.use(bodyParser.urlencoded());

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
		var sql = "INSERT INTO Users (FirstName, LastName) VALUES ('Nic', 'Crate')";
		con.query(sql, function(err, result){
			if(err) throw err;
			console.log("1 record inserted");
			res.send(result);
		});
	});
});

app.post('/api/user2', (req, res) => {

	console.log(req.body);

	var con = mysql.createConnection({
		host: "localhost",
		user: "ln",
		password: "password",
		database: "LaborNeighbor"
	});

	con.connect(function(err) {
		
		console.log("Connected!");
		var user = req.body;

		var sql = "INSERT INTO Users (FirstName, LastName, Email, Password, UserType) VALUES "
		+ "('" + String(user.FirstName) + "','"
			+ user.LastName + "','"
			+ user.Email + "','"
			+ user.Password + "','"
			+ user.UserType + "');";

		console.log(sql);
		
		con.query(sql, function(err, result){
			if(err){
				console.log(err);
				return;
			}
			console.log("1 record inserted");
			res.send(result);
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
		con.query("SELECT * FROM Users", function(err, result, fields){
			if(err) throw err;
				console.log(result);
			res.send(result);
		});
	});

});

app.get("/api/jobs", (req, res) => {

	var con = mysql.createConnection({
		host: "localhost",
		user: "ln",
		password: "password",
		database: "LaborNeighbor"
	});

	con.connect(function(err) {
		if(err) throw err;
		con.query("SELECT * FROM Jobs", function(err, result,fields){
			if(err) throw err;
				console.log(result);
			res.send(result);
		});
	});
});

app.post("/api/login" , (req,res) => {
	console.log("login test");
	var con = mysql.createConnection({
		host: "localhost",
		user: "ln",
		password: "password",
		database: "LaborNeighbor"
	});

	con.connect(function(err) {
		console.log("connected");
		var user = req.body;
		var sql = "SELECT EXISTS(SELECT 1 FROM Users WHERE Email = '" + user.Email + "' AND Password = '" + user.Password + "') AS N";

		if(err) throw err;
		con.query(sql, function(err, result){
			if(err){
				console.log(err);
				return;
			}
			console.log("sign in successful");
			console.log("result: " + result[0].N);
			if(result[0].N === 1){
				res.send(token);
			}
			else	
				res.send('incorrect');
		});
	});
});

app.post("/api/userType", (req,res) => {
	var con = mysql.createConnection({
		host: "localhost",
		user: "ln",
		password: "password",
		database: "LaborNeighbor"
	});

	var user = req.body;
	var sql = "SELECT * FROM Users WHERE Email = '" + user.Email + "'";

	con.connect(function(err){
		console.log("connected");

		//finish this
		if(err) throw err;
		con.query(sql, function(err, result,fields){
			if(err) throw err;
				console.log(result);
			res.send(result);
		});

	});
});


app.listen(port, () => console.log(`Listening on port ${port}`));