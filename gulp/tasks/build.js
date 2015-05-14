var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    paths = require('../paths'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    fs = require('fs'),
    sass = require('gulp-sass'),
    browserify = require('browserify'),
    ngAnnotate = require('browserify-ngannotate'),
    ngHtml2Js = require('browserify-ng-html2js'),
    htmlreplace = require('gulp-html-replace'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html');


var vendors = ['angular', 'angular-ui-router'];

var production = (process.env.NODE_ENV === 'production');


/**** JS build ****/

gulp.task('build-js-libraries', function () {
    var stream = browserify();

    vendors.forEach(function (dependency) {
        stream.require(dependency);
    });

    stream
        .bundle()
        .pipe(source('vendor' + (production ? '.min' : '') + '.js'))
        .pipe(gulp.dest(paths.dist));

    return stream;
});

gulp.task('build-js', function () {
    var stream = browserify({entries: paths.src.app});

    vendors.forEach(function (dependency) {
        stream.external(dependency)
    });
    stream.transform(ngHtml2Js({
        module: 'templates',
        baseDir: './app/'
    }));
    if (production) {
        stream.transform(ngAnnotate);
    }

    fs.writeFile('./config.json', JSON.stringify({
        env: process.env.NODE_ENV || 'development'
    }));

    stream = stream
        .bundle()
        .pipe(source('bundle' + (production ? '.min' : '') + '.js'));
    if (production) {
        stream = stream
            .pipe(buffer())
            .pipe(uglify());
    }
    stream
        .pipe(gulp.dest(paths.dist));
    return stream;
});

/**** Stiles build ****/

gulp.task('build-styles', function () {
    var stream = gulp
        .src(paths.src.scss)
        .pipe(sass());

    if (production) {
        stream = stream.pipe(minifyCSS());
    }
    return stream.pipe(gulp.dest(paths.dist));
});

/**** HTML build ****/

gulp.task('build-html', function (done) {
    var scripts = ['vendor.js', 'bundle.js'];

    if (production) {
        scripts = ['vendor.min.js', 'bundle.min.js'];
    }
    return gulp.src(paths.src.html)
        .pipe(htmlreplace({
            js: scripts,
            css: 'styles.css'
        }))
        .pipe(gulp.dest(paths.dist));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function (callback) {
    return runSequence(
        'clean',
        ['build-js-libraries', 'build-js', 'build-styles'],
        'build-html',
        callback
    );
});
