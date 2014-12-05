App.Views.BeerExpertListview = Backbone.View.extend({
	el: '#beer-table',
	initialize: function () {
		this.collection.on("reset", this.render, this);
	},
	render: function () {
		var i = 0;
		this.collection.each(function (beerModel) {
			++i;
			if (i == 1) {
				this.$el.append("<div class='beer-row'>");
			}
			this.$el.append(new App.Views.BeerExpertItemview({model: beerModel}).render().el);
			if (i >= 3) {
				this.$el.append("</div>");
				i = 0;
			}
		}, this); // 'This' is important because otherwise the callback would have the wrong context
		return this; // enable chained calls
	}
});