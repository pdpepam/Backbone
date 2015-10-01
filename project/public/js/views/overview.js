define(['jquery',
    	'underscore',
	    'backbone',
	    './overviewItem',
	    'text!templates/overview.html'], function ($,
											   _,
											   Backbone,
											   TodoItemView,
											   pageHtml) {



	var TodoComponent = Backbone.View.extend({

		el: $("#content"),

		className:"todo-component_wrapper",

		holders: {
			"addingTaskInput": ".todo-component_adding-task_input",
			"itemWrapper": ".todo-component_item-wrapper"
		},

		events: {
			"keypress .todo-component_adding-task_input": "createOneItem",
			"click .todo-component_remove-button": "removeSelectedItems",
			"click .todo-component_checking-tasks_label": "selectAllItems"
		},

		template: _.template(pageHtml),


		initialize: function () {
			this.listenTo(this.collection, 'all', this.renderCollectionLength);
			this.listenTo(this.collection, 'all', this.renderAdditional);
			this.listenTo(this.collection, 'all', this.renderCollection);
			this.render();
			this.renderCollection();
			this.renderAdditional();
		},

		render: function () {
			$(this.$el).html(this.template());

		},

		renderCollection: function () {
			var $wrapper = $(document.createDocumentFragment());
			var self = this;

			this.collection.each(function (model) {
				$wrapper.append(self.addOneItem(model))
			});

			$('.todo-component_item-wrapper').html($wrapper);
		},

		renderAdditional: function () {
			if (this.collection.length) {
				$(this.$el).find('.todo-component_checking-tasks-wrapper').show();
			}
			else {
				$(this.$el).find('.todo-component_checking-tasks-wrapper').hide();
			}
		},

		renderCollectionLength: function () {
			$(this.el).find('.counter').html(this.collection.length);
		},

		createOneItem: function (e) {
			if (e.keyCode == 13) {
				var value = e.currentTarget.value;
				this.collection.push({description: value});
				this.cleanInput();
			}
		},

		addOneItem: function (model) {
			return  new TodoItemView({model: model}).render();
			/*$(".todo-component_item-wrapper").append(component);*/
		},

		cleanInput: function () {
			$(this.$el).find('.todo-component_adding-task_input').val('');
		},

		removeSelectedItems: function () {
			_.each(this.collection.done(), function (item) {
				var modelToJson = item.toJSON();
				if (modelToJson.checked) {
					item.clear();
				}
			})
		},

		selectAllItems: function () {
			var checked = $(this.$el).find('.todo-component_checking-input:checked').val();
			if(checked){
				this.collection.checkedAllModels();
			}else{
				this.collection.uncheckedAllModels();
			}

		}

	});



	/*return Backbone.View.extend({

		el: $("#content"),

		template: _.template(pageHtml),

		render: function () {
			var viewModel = this.collection;
			this.$el.html(this.template(viewModel));
			return this;
		}

	});*/

	return TodoComponent;
});