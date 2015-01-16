/**
 * @exports module:BeerExpertCollection
 */
define(["backbone", "beerexpertmodel"], function(Backbone, BeerExpertModel) {
	/**
	 * @name BeerExpertCollection
	 * @constructor
	 * @augments Backbone.Collection
	 */
	return BeerExpertCollection = Backbone.Collection.extend(
		/** @lends BeerExpertCollection.prototype **/
		{
			/**
			 * This collection contains BeerExperModels
			 * @type {BeerExpertModel}
			 */
		model: BeerExpertModel,
			/**
			 * The URL where to get a collection of beer types from
			 * @type {string}
			 */
		url: '/beers'
	});
});

