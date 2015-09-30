define([
	'jquery',
	'backbone',
	'models/todo'
], function ($, Backbone, TodoModel) {

	return Backbone.Collection.extend({

		Model: TodoModel,

		url: "/todos"
	});

});