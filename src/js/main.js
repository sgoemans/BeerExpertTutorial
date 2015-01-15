require.config({
	paths: {
		jquery: "../../bower_components/jquery/dist/jquery",
		underscore: "../../bower_components/underscore/underscore",
		backbone: "../../bower_components/backbone/backbone",
		app: "app",
		beerexpertmodel: "model/BeerExpertModel",
		beerexpertcollection: "collection/BeerExpertCollection",
		beerexpertitemview: "view/BeerExpertItemView",
		beerexpertlistview: "view/BeerExpertListView"
	},
	// non-AMD scripts shims/exports
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});
require(['app'], function (myApp) {
	myApp();
});
