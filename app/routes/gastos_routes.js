var ObjectID = require('mongodb').ObjectID

module.exports = function(app, db) {
	app.get('/gastosz/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id) };
		db.collection('gastos').findOne(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send(item);
			}
		});
    });

    app.get('/test', (req, res) => {
        const details = {'_id': new ObjectID(id) };
        db.find
		db.collection('gastos').find(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send(item);
			}
		});
    });
    
    app.get('/', (req, res) => {
        res.send('<h2>Hola mis amigos</h2>');
    })

	app.get('/gastos', (req, res) => {
        const gasto = { 
            nombre: "testNombre", 
            monto: 122, 
            categoria: "testCat", 
            descripcion: "testDescrip"
        };

        // console.log('gastos route:', db);
        
		db.db('dj-quotes').collection('gastos').insert(gasto, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send(result.ops[0]);
			}
		});
    });
    
    
};