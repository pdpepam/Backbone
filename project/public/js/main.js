require.config({
	paths: {
		jquery: 'https://code.jquery.com/jquery-1.11.3.min',
		underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
		backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min',
		text: "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min",
		templates: '../templates'
	}
});

define([
	'jquery',
	'underscore',
	'backbone',
	'router'
], function ($, _, Backbone, Router) {
	window.app_router = new Router();

	Backbone.history.start({pushState: true});
});