/**
 * @exports module:BeerExpertModel
 */
define(["backbone"], function(Backbone) {
	/**
	 * @name BeerExpertModel
	 * @constructor
	 * @augments Backbone.Model
	 */
	return Backbone.Model.extend({
		validate: function () {

		},
		defaults: {
			"title": "Title"
		},
		initialize: function () {

		}
	});
});
