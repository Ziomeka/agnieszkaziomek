const gulp = require('gulp');
const config = require('../config.json');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
require('./sass-lint')();

module.exports = function () {
    gulp.task('styles', ['sass-lint'], function() {
        return gulp.src(config.src.styles + 'main.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.dest.styles));
    });
}