const gulp = require('gulp');
const config = require('../config.json');
const clean = require('gulp-clean');
module.exports = function () {
    gulp.task('clean', function () {
        return gulp.src(config.dest.catalog, {read: false})
        .pipe(clean());
    });
}