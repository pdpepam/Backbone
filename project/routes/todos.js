var Todo = require("./models/todo").Todo;

module.exports = {

	init: function () {
		// populate collection with test data
		// to be removed...
		Todo.collection.count({}, function(err, count) {

				new Todo({ description: "Test Todo Item 1", status: "Test Status" }).save();

		});
		console.log(Todo.collection);
	},

	getAll: function(req, res) {
		var query = Todo.find();

		query.select('_id todoId description');


		query.exec(function (error, todos) {
			res.send(JSON.stringify(todos));
		});
	}

};