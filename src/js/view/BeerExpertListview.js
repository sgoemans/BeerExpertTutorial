/**
 * @exports module:BeerExpertListview
 */
define(["jquery", "backbone", "beerexpertitemview"], function ($, Backbone, BeerExpertItemview) {
	/**
	 * @name BeerExpertListview
	 * @constructor
	 * @augments Backbone.View
	 */
	return Backbone.View.extend(
		/** @lends BeerExpertListview.prototype **/
		{
			/**
			 * The jQuery DOM object '#beer-table' is attached to this view
			 * @type {string}
			 */
			el: '#beer-table',
			initialize: function () {
				this.collection.on("reset", this.render, this);
			},
			/**
			 * Renders the collection of BeerExpertModel into BeerExpertItemview and append it to '#beer-table'. Note
			 * that at the beginning and after each rendering of three models, a new table row is created.
			 * @type {function}
			 */
			render: function () {
				var i = 0;
				this.collection.each(function (beerModel) {
					++i;
					if (i == 1) {
						this.$el.append("<div class='beer-row'>");
					}
					this.$el.append(new BeerExpertItemview({model: beerModel}).render().el);
					if (i >= 3) {
						this.$el.append("</div>");
						i = 0;
					}
				}, this); // 'This' is important because otherwise the callback would have the wrong context
				return this; // enable chained calls
			}
		});
});
