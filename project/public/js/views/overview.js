define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/overview.html'
], function ($, _, Backbone, pageHtml) {

	return Backbone.View.extend({

		el: $("#content"),

		template: _.template(pageHtml),

		render: function () {
			var viewModel = this.collection;

			this.$el.html(this.template(viewModel));

			return this;
		}

	});
});