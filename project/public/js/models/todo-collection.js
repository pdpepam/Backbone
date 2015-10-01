define([
	'jquery',
	'backbone',
	'models/todo'
], function ($, Backbone, TodoModel) {


	var TodoItemCollection = Backbone.Collection.extend({
		model: TodoModel,

		url: "/todos",

		done: function () {
			return this.filter(function (item) {
				return item;
			})
		},

		checkedAllModels: function () {
			this.each(function (model) {
				model.checkedModel();
			})
		},

		uncheckedAllModels: function () {
			this.each(function (model) {
				model.unchecedModel();
			})
		}
	});

	/*return Backbone.Collection.extend({

		Model: TodoModel,

		url: "/todos"
	});*/

	return TodoItemCollection;

});