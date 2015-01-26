BeerExpertTutorial (RequireJS branch)
==================

###RequireJS - Modularize Your Code
Goal: Use RequireJS to better structure your code and benefit from asynchronous module loading

#####1) Prerequisites:
Please see the README.md files in the HTML5_CSS (1), GULP_USEMIN (2), JASMINE_SINON, and JSDOC branches of this
project first.

#####2) Setup RequireJS:
In order to use RequireJS, you need to include it in bower.json. It is not a dev or build plugin because it is
required during app runtime. Therefore, we put it into the dependencies attribute of bower.json:
```
bower install requirejs --save
```
In a RequireJS application, no javascript files but one are specified via script tags in index.html. The app is launched
by the remaining script tag which loads RequireJS with a reference to the RequireJS configuration javascript file:
```
<script data-main="js/main.js" src="bower_components/requirejs/require.js"></script>
```

#####3) RequireJS configuration
RequireJS creates namespaces when modules are loaded. Therefore, our namespace.js file, which set up our namespace
"App" and "app" is not needed any more.
The main configuration option for requirejs.config() is "paths". See the corresponding part in our main.js:
```
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
```
RequireJs needs to know where the modules are stored in your project. Using attribute names like "jquery" or "backbone",
which refer to the correct file locations, frees the developer from writing the complete pathname each time he loads/accesses
a module. This is usually done quite frequently and if for some reason the file location changes, the new location must
only be change in one single place.

With such path attributes, the corresponding "define" statement looks like this (taken from BeerExpertItemview.js):
```
define('BeerExpertItemView', ["jquery", "underscore", "backbone"], function($, _, Backbone) {
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
```
