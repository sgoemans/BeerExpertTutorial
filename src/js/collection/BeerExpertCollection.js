define(["backbone", "beerexpertmodel"], function(Backbone, BeerExpertModel) {
	var BeerExpertCollection = Backbone.Collection.extend({
		model: BeerExpertModel,
		url: '/beers'
	});
	return BeerExpertCollection;
});

