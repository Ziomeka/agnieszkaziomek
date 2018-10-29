const gulp = require('gulp');
const config = require('./config.json');
const browserSync = require('browser-sync').create();

require('./gulpTasks/styles')();
require('./gulpTasks/copy')();
require('./gulpTasks/babel')();
require('./gulpTasks/build')();

gulp.task('default', ['build'], function() {

    browserSync.init({
        server: './build',
    });
    gulp.watch(config.src.styles + '*.scss', ['styles']);
    gulp.watch(config.src.scripts, ['babel']);
    gulp.watch(config.src.html, ['copy']);
    gulp.watch([config.dest.html + '*.html', config.dest.styles + '*.css', config.dest.scripts + '*.js']).on('change', browserSync.reload);
});
