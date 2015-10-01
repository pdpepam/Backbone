define([
	'jquery',
	'backbone'
], function ($, Backbone) {

	var TodoItemModel = Backbone.Model.extend({

		idAttribute: "_id",

		defaults: function () {
			return {
				"description": "unnamed task",
				"checked": false
			};
		},

		initialize: function () {
			if (!this.get("description") && this.get("description").length) {
				this.set({"description": this.defaults.description});
			}
		},

		clear: function () {
			this.destroy();
		},

		getCheckedState: function(){
			return this.get("checked");
		},

		checkedModel: function () {
			this.set({"checked": true});
		},

		unchecedModel: function () {
			this.set({"checked": false});
		},

		toogleCheckeModel: function () {
			var checkedState = this.get("checked");
			this.set({"checked": !checkedState});
			return !checkedState;
		},

		updateTitle: function (value) {
			this.set({"description": value});
		}

	});

	/*return Backbone.Model.extend({

		idAttribute: "_id"

	});*/

	return TodoItemModel;
});