App.Collections.BeerExpertCollection = Backbone.Collection.extend({
	model: App.Models.BeerExpertModel,
	url: '/beers'
});

