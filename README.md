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

