// Include gulp
var gulp = require("gulp");
// Include gulp plugins
var gutil = require("gulp-util");
var clean = require("gulp-clean");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var sass = require('gulp-sass');
var usemin = require('gulp-usemin');
var minifyCss = require("gulp-minify-css");
var minifyHtml = require("gulp-minify-html");
var jasminePhantomJs = require('gulp-jasmine2-phantomjs');

gulp.task("sass", function() {
	return gulp.src("src/scss/*.scss")
		.pipe(sass())
		.pipe(concat("beer-styles.css"))
		.pipe(gulp.dest("src/scss"));
});

gulp.task("minifyHtml", function() {
	return gulp.src("src/index.html")
		.pipe(minifyHtml())
		.pipe(gulp.dest("dist"));
});

gulp.task("usemin", function() {
	return gulp.src("src/index.html")
		.pipe(usemin({
			css: [minifyCss(), 'concat'],
			html: [minifyHtml({empty: true})],
			js: [uglify()/*, rev()*/]
		}))
		.pipe(gulp.dest('dist/'));
});

/*
gulp.copy = function(src, dest){
	return gulp.src(src, {base:"."})
		.pipe(gulp.dest(dest));
};
*/
gulp.task('clean', function() {
	if(!gutil.env["no-clean"]) {
		gulp.src(['dist/'], {read: false}).pipe(clean());
	}
});

gulp.task("copyImg", function() {
	return gulp.src("src/img/**/*", {base:"src"})
		.pipe(gulp.dest("dist/"));
});

gulp.task("test", function() {
	return gulp.src("test/**/*.html")
		.pipe(jasminePhantomJs());
});
gulp.task("default", ["clean", "copyImg", "usemin"]);