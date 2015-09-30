var todos = require('./todos');

var routerAPI = {

	init: function (app) {
		this.app = app;

		// init routes
		todos.init();

		// pages
		app.get('/', this.getIndex);

		// JSONs
		app.get("/todos/", todos.getAll);
	},

	getIndex: function (req, res) {
		res.render('index', {});
	}

};

var Router = function () {
};
Router.prototype = routerAPI;

module.exports = new Router();