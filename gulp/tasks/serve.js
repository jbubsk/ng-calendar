var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('serve', ['build'], function (done) {

    browserSync.init({
        open: false,
        port: 8080,
        server: './dist'
    });
});
