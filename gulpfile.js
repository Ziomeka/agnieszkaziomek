var gulp = require('gulp');
var browserSync = require('browser-sync').create();

require('./gulpTasks/styles')();
require('./gulpTasks/copy')();
require('./gulpTasks/sass-lint')();
require('./gulpTasks/babel')();
require('./gulpTasks/build')();

gulp.task('default', ['build'], function() {

    browserSync.init({
        server: "./build"
    });
    gulp.watch('src/sass/**/*.scss',['sass-lint', 'styles']);
    gulp.watch('src/**/*.js',['babel']);
    gulp.watch('src/**/*.html',['copy']);
    gulp.watch(["build/*.html", "build/**/*.css"]).on('change', browserSync.reload);
});
