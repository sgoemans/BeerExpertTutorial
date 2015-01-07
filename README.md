BeerExpertTutorial (Jasmine branch)
==================

###Unit tests using Jasmine, automated by Gulp
Goal: Facilitate unit testing with Jasmine & Sinon. Create a Gulp task for running the tests.

#####1) Prerequisites:
Please see the README.md files in the HTML5_CSS (1) and GULP_USEMIN (2) branches of this project first.

#####2) Setup Jasmine:
In order to use Jasmine, you need to include it in the bower.json file, as it will be needed during app runtime.
Please note that testing an app requires the app modules/units to run in order to check for their results in a
testing environment like Jasmine. Because the testing framework is not needed in the final app distribution,
the bower config entries are put into the devDependencies section of the bower.json file.
```
  "devDependencies": {
    "jasmine": "*",
    "jasmine2-junit": "*",
    "sinon-browser-only": "~1.12.1"
  }
```

#####3) jasmine2-junit
https://github.com/sandermak/jasmine2-junit

By default, Jasmine 2.0 only provides a ConsoleReporter and HtmlReporter. Neither are suitable for reporting in
a CI build. This project adds a JUnitXmlReporter which outputs JUnit compliant testreports. The reporter currently
only works when running specs with PhantomJS.

In order to setup jasmine2-junit, you need to add the following scripts to your spec runner html file:

```
    <!-- DevDependencies for testing -->
    <link rel="shortcut icon" type="image/png" href="../bower_components/jasmine/images/jasmine_favicon.png">
    <link rel="stylesheet" href="../bower_components/jasmine/lib/jasmine-core/jasmine.css"/>
    <script src="../bower_components/jasmine/lib/jasmine-core/jasmine.js"></script>
    <script src="../bower_components/jasmine/lib/jasmine-core/jasmine-html.js"></script>
    <script src="../bower_components/jasmine2-junit/jasmine2-junit.js"></script>
    <!-- This boot.js is a modified version of Jasmine's default boot.js! -->
    <script src="../bower_components/jasmine2-junit/boot.js"></script>
```

#####4) sinon-browser-only
Sinon is a nodejs module, meaning that it extensively uses node's internal require mechanism. The author's attempts to
create a browser-friendly version with "browserify" failed. As a result, using Sinon in a browser environment is not
possible at first glance. Fortunately, someone created a browser-friendly version, named "sinon-browser-only"
(https://www.npmjs.com/package/sinon-browser-only).

Sinon is a node module and must be installed using npm. Sinon-browser-only is not a mode module. It can be installed
via bower:
```
bower install sinon-browser-only --save-dev
```

... or, if you just put an entry in the bower.json file (like in the devDependencies example above), install all the
bower modules by entering the following command in a terminal window and project folder:
```
bower install
```

#####5) Gulp test task
Of course we could just run the SpecRunner.html file from within WebStorm. But we already have a few Gulp tasks, and
a test task would neatly fit into it. A Gulp task always runs in a nodejs environment, as often mentioned before. We
therefore need a headless browser engine which lets us use it as a node module, which in our case is PhantomJs:
```
gulp.task("test", function() {
	return gulp.src("test/**/*.html")
		.pipe(jasminePhantomJs());
});
```
