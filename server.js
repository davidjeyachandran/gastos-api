const express     = require ('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const db		  = require('./config/db');

const app		  = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(db.url, {useNewUrlParser: true}, (err, client) => {
    if (err) return console.log(err)
    // console.log(database);
    database = client.db('dj-quotes');
	require('./app/routes')(app, database);
	app.listen(port, () => {
		console.log("We are live on " + port);
	})
})
