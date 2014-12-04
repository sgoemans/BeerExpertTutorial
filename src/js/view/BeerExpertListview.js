App.Views.BeerExpertListview = Backbone.View.extend({
	initialize: function () {
		this.collection.on("reset", this.render, this);
		console.log("initializing...");
	},
	render: function() {
		this.collection.each(function(beerModel) {
			this.$el.append(new App.Views.BeerExpertItemview({ model: beerModel }).render().el)}, this);
		return this; // enable chained calls
	}
});