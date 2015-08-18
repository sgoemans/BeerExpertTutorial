BeerExpertTutorial
==================

###Build automation with Gulp
Goal: Automate the regular development tasks like syntax checking, code style checking, minification, uglification.

#####1) Prerequisites:

Nodejs must be installed. Node provides a Javascript runtime environment which is required for build tasks to
be automated.
Gulp is a task runner which runs in the nodejs javascript environment. Gulp and the corresponding build plugins
must be installed by using the node.js install manager 'npm'.

#####2) Create a 'package.json' file
Node/npm requires a project specific configuration file called 'package.json'. You can create a minimal version by
entering 'npm init' in the Webstorm's project terminal windows. After that, you can either immediately add each plugin
manually by entering the corresponding 'npm install <plugin-name> --save-dev' or you type in the plugin name into the
'package.json' file and run 'npm install' afterwards.

See the package.json for this project's branch:

```
{
  "name": "Beer-Expert",
  "version": "0.0.1",
  "main": "index.html",
  "author": "Stephan Goemans <stephan.goemans@gmail.com>",
  "description": "Build automation with Gulp",
  "repository": {
    "type": "git",
    "url": "https://github.com/sgoemans/BeerExpertTutorial.git"
  },
  "keywords": [
    "Gulp",
    "usemin",
    "sass"
  ],
  "license": "MIT",
  "devDependencies": {
    "gulp": "~3.8.10",
    "gulp-usemin": "~0.3.8",
    "gulp-minify-html": "~0.1.7",
    "gulp-minify-css": "~0.3.11",
    "gulp-concat": "~2.4.2",
    "gulp-uglify": "~1.0.1",
    "gulp-sass": "~1.1.0"
  }
}
```

As you can see in the 'devDependencies', Gulp and a few gulp plugins are listed. These plugins will be used later
in this tutorial to automatically build a distributable version auf our application. Please note that in this tutorial
we don't have any application javascript files yet, but we already define necessary configurations to cover them as they
appear in later tutorial branches.

#####3) Create a 'Gulpfile.js' file
The build tasks are configured by defining Gulp tasks in a javascript file called 'Gulpfile.js'. This file does not
belong to application. It is used for development purposes only.

Because running build tasks need nodejs as the execution environment, the plugins are stored in separate javascript files
which need to tbe 'required' in the build tasks code (there is no browserinvolved in this, therefore no &lt;script&gt; or
&lt;link&gt; tags). This is accomplished by using nodejs own 'require' function at the beginning of the Gulpfile.js:

```
var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var sass = require('gulp-sass');
var usemin = require('gulp-usemin');
var minifyCss = require("gulp-minify-css");
var minifyHtml = require("gulp-minify-html");
```
After having "required" all necessary code modules/plugins, we can start defining tasks for our build requirements.

#####3.1) gulp-sass

First task in this tutorial is the sass compilation. This plugin compiles the scss file into a compliant css file.
In this tutorial, we only used a single variable in the beer-styles sass file for demonstration purposes. Here is the
automated build task to compile the scss files into css files:

```
gulp.task("sass", function() {
	return gulp.src("src/scss/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("src/scss"));
});
```

As you can see, there is more than just "sass". Gulp uses pipes that connect the modules to each other. Each module
receives data, processes it, and sends it to the next module in the pipe. There is no file creation involved in this
process (if not explicitely configured). The gulp.src() function puts all specified files into a pipe which is sent to
the next piped module, which is the "sass" task as shown above. The data which the sass step has proceseed is sent
to the next module in the pipe which is the gulp.dest() function which finally stores the data in the file.

#####3.2) gulp-minify-html

This task compresses the specified HTML files by removing white spaces and newlines, effectively puting the whole content
into a single line. Again, after specifying the source files as a parameter in the gulp.src function, the pipe processing
starts. We don't need to specify a file name as ther is only a single file that is processed and the resulting file will
get the same same but in a different destination (gulp.dest()) directory.
```
gulp.task("minifyHtml", function() {
	return gulp.src("src/index.html")
		.pipe(minifyHtml())
		.pipe(gulp.dest("dist"));
});
```

#####3.3) usemin, , gulp-concat, , gulp-minify-css

'usemin' is a fairly complex task which requires certain configuration annotations in the html file. In order to minimize
the number of http requests required for loading this small web app, we want to collect all css file and concatenate then
into a single css file. As a result, only one http request is necessary to load all css rules for this app. The same
happens with javascript files. Instead of separately loading dozens of javascript files from a moderatly complex web
application, a single http request which loads only one big file is much more efficient. Processing javascript files in
this manner is covered in a later branch of this tutorial.

The problem which 'usemin' solves is that the html file still references the unconcatenated files. For the benefits of
'usemin' to come into effect, the html files need to be modified in order to reference only the concatenated file.
And this is exactly what 'usemin' does: After concatenating the files, it makes the necessary modifications of the html
files to reflect the new file references.

See the css 'usemin' annotation block from the index.html file of our project:

```
    <!-- build:css style.css -->
    <link href="scss/beer-styles.css" rel="stylesheet" />
    <link href="scss/beer-table.css" rel="stylesheet" />
    <!-- endbuild -->
```

The important thing to note is that 'usemin' requires one or more html files. It looks out for annotation blocks which
denote the collection of files which must be concatenated. Typically, these files are specified in <script> and
<link> tags. Other tags not found within 'usemin's annotation blocks are ignored.

There are some configuration options available for 'usemin' which we will not cover here.

```
gulp.task("usemin", function() {
	return gulp.src("src/index.html")
		.pipe(usemin({
			css: [minifyCss(), 'concat'],
			html: [minifyHtml({empty: true})],
			js: [uglify()/*, rev()*/]
		}))
		.pipe(gulp.dest('dist/'));
});
```

After this task was run, the resulting distribution html file includes only a single <link> tag where there have
formerly been two.

```
<link rel=stylesheet href=style.css>
```

In addition, by also running minifyCSS() during the css part of 'usemin', all comments and whitespaces and newlines
have been removed from the resulting css file.
