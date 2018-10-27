var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
require('./sass-lint')();

module.exports = function () {
    gulp.task('styles', ['sass-lint'], function() {
        return gulp.src('./src/sass/main.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('././build/css'));
    });
}