const gulp = require('gulp');
const config = require('../config.json');
const eslint = require('gulp-eslint');

module.exports = function () {
    gulp.task('es-lint', function () {
        return gulp.src([config.src.scripts, '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
    });
}