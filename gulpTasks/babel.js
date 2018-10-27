var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
require('./es-lint')();

module.exports = function () {
    gulp.task('babel', ['es-lint'], function() {
        return gulp.src('./src/js/*.js')
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['@babel/env'],
            }))
            .pipe(concat('app.js'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./build/js'));
    });
}