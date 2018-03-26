const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/User', (req, res) => {

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
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));