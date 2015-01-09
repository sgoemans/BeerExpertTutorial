BeerExpertTutorial (Jasmine branch)
==================

###Unit tests using Jasmine, Sinon, and PhantomJs, automated by Gulp
Goal: Facilitate unit testing with Jasmine & Sinon. Create a Gulp task for running the tests.

#####1) Prerequisites:
Please see the README.md files in the HTML5_CSS (1) and GULP_USEMIN (2) branches of this project first.

#####2) Setup Jasmine:
In order to use Jasmine and see the results in a browser window, you need to include it in the bower.json file,
as it will be needed during app runtime.
Because the testing framework is not needed in the final app distribution,
the corresponding Jasmine bower config entries are put into the devDependencies section of the bower.json file.
```
  "devDependencies": {
    "jasmine": "*",
    "jasmine2-junit": "*",
    "sinon-browser-only": "~1.12.1"
  }
```
Jasmine is also available if you want to test pure node related javascript code. For node applications, there is no
SpecRunner.html, so you need to install an npm module.

#####3) SpecRunner.html
The SpecRunner.html file in the project's test folder is used for unit testing. The name doesn't matter, it could also
be index.html. SpecRunner.html is quite similar to your app's index.html file, but it also includes several <script>
tags for Jasmine / Sinon and <script> tags for the unit test files (specs). See the part which is added to the
BeerExpertTutorial's index.html file and saved to SpecRunner.html in the test folder of the BeerExpert Tutorial:
```
    <!-- DevDependencies for testing -->
    <link rel="shortcut icon" type="image/png" href="../bower_components/jasmine/images/jasmine_favicon.png">
    <link rel="stylesheet" href="../bower_components/jasmine/lib/jasmine-core/jasmine.css"/>
    <script src="../bower_components/jasmine/lib/jasmine-core/jasmine.js"></script>
    <script src="../bower_components/jasmine/lib/jasmine-core/jasmine-html.js"></script>
    <script src="../bower_components/jasmine/lib/jasmine-core/boot.js"></script>
    <script src="../bower_components/sinon-browser-only/sinon.js"></script>
    <!-- Unit testing modules -->
    <script src="fixtures/beerExpertFixture.js"></script>
    <script src="specs/beerExpertModel.spec.js"></script>
    <script src="specs/beerExpertCollection.spec.js"></script>
    <script src="specs/beerExpertItemview.spec.js"></script>
    <script src="specs/beerExpertListview.spec.js"></script>
```

#####4) jasmine2-junit
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

#####5) sinon-browser-only
Sinon is a nodejs module, meaning that it extensively uses node's internal require mechanism. My attempts to
create a browser-friendly version with "browserify" failed. As a result, using Sinon in a browser environment is not
possible at first glance. Fortunately, someone created a browser-friendly version, named "sinon-browser-only"
(https://www.npmjs.com/package/sinon-browser-only).

NOTE: Sinon is a node module and must be installed using npm. Sinon-browser-only is not a mode module. It can be installed
via bower:
```
bower install sinon-browser-only --save-dev
```

... or, if you just put an entry in the bower.json file (like in the devDependencies example above), install all the
bower modules by entering the following command in a terminal window and project folder:
```
bower install
```
NOTE: We COULD have used the Sinon node module, but this would have prevented running the SpecRunner.html in the browser.
We cannot specify a node module in a browser's script tag because the browser has no idea of node. Therefore, the
following is not possible:
```
<script src="../bower_components/sinon/lib/sinon.js"></script>
```
Instead, we have to use a Sinon compatible module for asynchronous script loading (like the browser via script tags).
There seem to be two competing modules available:

https://www.npmjs.com/package/sinon-browser-only
```
    "sinon-browser-only": "~1.12.1"
```

or https://github.com/blittle/sinon.js (which hasn't seen updates for quite some time)
```
    "sinonjs": "~1.10.2"
```

Only a node module is able to use the node Sinon module, like Grunt, Gulp, self-written modules, and of course
node itself.

#####6) Gulp test task
Of course we could just run the SpecRunner.html file from within WebStorm. But we already have a few Gulp tasks, and
a test task would neatly fit into it. A Gulp task always runs in a nodejs environment, as often mentioned before. We
therefore need a headless browser engine which let us use it from within a node module, which in our case is PhantomJs:
```
gulp.task("test", function() {
	return gulp.src("test/**/*.html")
		.pipe(jasminePhantomJs());
});
```
Although we run the test via Gulp (node), PhantomJs is not a node module. It is an executable (phantomjs.exe), which
provides a WebKit compatible headless browser engine together with a command line tool (REPL).

#####7) A Note on PhantomJS

PhantomJS is not a library for NodeJS. It's a separate environment, and code written for node is unlikely to be
compatible. In particular PhantomJS does not expose a Common JS package loader. It is an NPM wrapper and can be used to
conveniently make Phantom available. It is not a Node JS wrapper.

It is common to write standalone Phantomjs scripts which then can be driven from within a node program by spawning
phantom in a child process.

Many node modules which somehow depend on Phantomjs being installed on your workstation provide a convenient npm
installation wrapper. So, for example, if you specify gulp-jasmine2-phantomjs in package.json, PhantomJs will
automatically be installed as a dependency of it (see
node_modules/gulp-jasmine2-phantomjs/node_modules/phantomjs/lib/phantom/phantomjs.exe).

#####8) What can we do without the SpecRunner.html ?

Well, not much. The SpecRunner.html collects all references to source javascript files , app modules, testing framework,
and unit tests alike. Without the SpecRunner, who is going to tell PhantomJs which app files and which spec files to
load. Who integrates Jasmine and Sinon in all this?

PhantomJS provides a working jasmine runner example – all we have to do is download it and use it.
Once we got it, all we have to do is run the following command:
```
                        phantomjs /path/to/run-jasmine.js http://localhost/js/test/unit/
```
Obviously, this is not the complete picture. From the URL we recognize that we need access to the spec files through
a web server service (node?). And where do the app files come from? In summary, this is a mediocre placeholder for something
more elaborate. See coming KARMA branch's README.md.
