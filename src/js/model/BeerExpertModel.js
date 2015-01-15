define(["backbone"], function(Backbone) {
	var BeerExpertModel = Backbone.Model.extend({
		validate: function () {

		},
		defaults: {
			"title": "Title"
		},
		initialize: function () {

		}
	});
	return BeerExpertModel;
});
