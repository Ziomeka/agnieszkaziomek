const gulp = require('gulp');
const config = require('../config.json');
module.exports = function () {
    gulp.task('copy', function () {
        return Promise.all ([gulp.src('./src/*.html')
            .pipe(gulp.dest(config.dest.html)),
        gulp.src(config.src.images)
            .pipe(gulp.dest(config.dest.images))]);
    });
}