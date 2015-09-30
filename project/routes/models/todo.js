var mongoose = require("mongoose");

var TodoSchema = new mongoose.Schema({
	description: String,
	status: String
});

var Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
	Todo: Todo
};