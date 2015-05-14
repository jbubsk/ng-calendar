var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');


function reportChange(event){
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['serve'], function() {
    gulp.watch(paths.src.js, ['build-js']).on('change', reportChange);
    gulp.watch(paths.src.scss, ['build-styles', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.src.html, browserSync.reload).on('change', reportChange);
    gulp.watch(paths.dist + '**/*.*', browserSync.reload).on('change', reportChange);
});
