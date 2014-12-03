App.Views.BeerExpertItemview = Backbone.View.extend({
	el: "#beer-test",
	template: _.template($('#beerItemTemplate').html()),
	render: function () {
		this.$el.html(this.template(this.model.toJSON()));
		return this; // enable chained calls
	}
});
