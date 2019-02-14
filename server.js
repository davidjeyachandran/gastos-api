const express     = require ('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const db		  = require('./config/db');

const app		  = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect('mongodb://' + 'david' + ':' + '1password' + '@ds123625.mlab.com:23625/dj-quotes', {useNewUrlParser: true}, (err, database) => {
    if (err) return console.log(err)
    // console.log(database);
	require('./app/routes')(app, database);
	app.listen(port, () => {
		console.log("We are live on " + port);
	})
})
