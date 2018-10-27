var gulp = require('gulp');
var eslint = require('gulp-eslint');

module.exports = function () {
    gulp.task('es-lint', function () {
        return gulp.src(['src/**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
    });
}