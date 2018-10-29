const gulp = require('gulp');
const config = require('../config.json');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
require('./es-lint')();

module.exports = function () {
    gulp.task('babel', ['es-lint'], function() {
        return gulp.src(config.src.scripts)
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['@babel/env'],
            }))
            .pipe(concat('app.js'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(config.dest.scripts));
    });
}