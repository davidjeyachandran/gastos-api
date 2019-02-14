const gastosRoutes = require('./gastos_routes');

module.exports = function(app, db) {
	gastosRoutes(app,db);

}
