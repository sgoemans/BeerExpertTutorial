/**
 * @exports module:BeerExpertItemview
  */
define('BeerExpertItemView', ["jquery", "underscore", "backbone"], function($, _, Backbone) {
	/**
	 * @name BeerExpertItemview
	 * @constructor
	 * @augments Backbone.View
	 */
	return Backbone.View.extend({
		tagName: 'div',
		className: 'beer-cell',
		template: _.template($('#beerItemTemplate').html()),
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this; // enable chained calls
		}
	});
});
