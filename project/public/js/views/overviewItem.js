define(['jquery',
        'underscore',
        'backbone',
        'models/todo',
        'text!templates/overviewItem.html'], function ($,
                                                       _,
                                                       Backbone,
                                                       model,
                                                       template) {

    var TodoItem = Backbone.View.extend({

        className: "todo-component_item",

        template: _.template(template),

        holders: {
            "todoComponentInput": ".todo-component_item_label_task",

            "editInput": ".todo-component_item_input_edit",
            "saveInput": ".todo-component_item_input_save"
        },

        events: {
            "click .todo-component_item_label_checkbox": "toggleChecked",
            "click .todo-component_item_label_task_title": "edit",
            "blur .todo-component_item_label_task_title": "save"
        },

        initialize: function () {
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model, 'change', this.setChecked);
            this.render();
        },

        render: function () {
            var view = this.template(this.model.toJSON());
            this.$el.html(view);
            return this.$el;
        },

        toggleChecked: function () {
            if (this.model.toogleCheckeModel()) {
                this.setChecked()
            } else {
                this.unChecked()
            }

        },

        setChecked: function () {
            if(this.model.getCheckedState()){
                $(this.$el).find(".todo-component_item_label_checkbox").prop({"checked": true})
            }else{
                $(this.$el).find(".todo-component_item_label_checkbox").prop({"checked": false})
            }
        },

        unChecked: function () {
            $(this.$el).find(".todo-component_item_label_checkbox").prop({"checked": false})
        },

        /*manipulation*/
        edit: function () {
            $(this.$el).find('.todo-component_item_label_task_title').removeClass("todo-component_item_label_task_title__unchecked");
        },

        save: function () {
            var value = $(this.$el).find('.todo-component_item_label_task_title').val();
            this.model.updateTitle(value);
            $(this.$el).find('.todo-component_item_label_task_title').addClass("todo-component_item_label_task_title__unchecked");
        },

        remove: function () {
            $(this.$el).remove();
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

    return TodoItem;
});