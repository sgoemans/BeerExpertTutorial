BeerExpertTutorial (JsDoc branch)
==================

###JsDoc - Documenting JavaScript Code
Goal: Use JSDoc syntax to comment code units in order to create HTML documentation for it

#####1) Prerequisites:
Please see the README.md files in the HTML5_CSS (1), GULP_USEMIN (2), and JASMINE_SINON branches of this project first.

#####2) Setup JSDoc:
In order to use JSDoc, you need to include it in the package.json file. Neither does the BeerExpert app need the
documentation files when running, nor does JSDoc need the app running. Therefore, we use the gulp-jsdoc node module
and create a gulp task for creating the documentation.
Best practise is to both install the gulp plugin and add it to package.json in one single step. In a terminal window
enter:

```
npm install gulp-jsdoc --save-dev
```
Note that, aside of the gulp plugin, we certainly need the JSDoc node module. As it is common practise among the
creators of gulp plugins, JSDoc itself is also installed as a dependency of gulp-jsdoc. You can check with

```
npm list jsdoc
```
The list of corresponding npm modules includes gulp-jsdoc as well as jsdoc:
```
└─┬ gulp-jsdoc@0.1.4
  └── jsdoc@3.3.0-alpha5
```

Next you (node) require the plugin in Gulpfile.js and create a corresponding task which takes the input files and
processes them (jsdoc.parser). Finally the output is written to the destination specified in jsdoc.generator.
Behind the scenes, the parser creates an enriched JSON representation of the found code comments. This JSON is piped
directly to the HTML file generator. You could have the JSON saved by using the gulp.dest method instead. But since
we are only interested in the HTML, we don't need it.

Please note the additional parameters we specify in the object literal which is passed to the parser. You can find
these strings in the generated HTML doc.

```
gulp.task("jsdoc", function() {
	return gulp.src("./src/**/*.js")
		.pipe(jsdoc.parser({
			name: 'BeerExpertDoc',
			version: '1.0.0',
			description: "A beer drinker's final app"
		}, 'Beer'))
		.pipe(jsdoc.generator('./docs'))
});
```
