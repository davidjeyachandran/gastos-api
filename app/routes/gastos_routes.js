var ObjectID = require('mongodb').ObjectID

module.exports = function(app, db) {
	app.get('/gastos/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id) };
		db.collection('notes').findOne(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send(item);
			}
		});
	});

	app.post('/gastos', (req, res) => {
		const gasto = { 
                        nombre: req.body.nombre, 
                        monto: req.body.monto, 
                        categoria: req.body.monto, 
                        descripcion: req.body.descripcion
                    };
                    
		db.collection('gastos').insert(gasto, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send(result.ops[0]);
			}
		});
	});
};