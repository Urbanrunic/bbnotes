// notes list item view

var MOB = MOB || {};

MOB.NotesListItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'notes-list-item',
    template: _.template($('script.notes-list-item').html()),

    events: {
        'click .delete': 'delete'
    },

    initialize: function(){
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));

        return this;
    },

    delete: function (e) {
        this.model.destroy();
    }
});
