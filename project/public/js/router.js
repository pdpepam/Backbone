define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {

	return Backbone.Router.extend({
		routes: {
			"": "overview",
			"/": "overview"
		},

		// overview page
		overview: function () {
			require([
				"views/overview",
				"models/todo-collection"
			], function (OverviewView, TodoCollection) {
				var collection = new TodoCollection();
				collection.fetch({
					success: function (response, models) {
						var view = new OverviewView({
							collection: collection
						});
						view.render();
					}
				})
			});
		}

	});
});