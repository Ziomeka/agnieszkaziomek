var gulp = require('gulp');
var clean = require('gulp-clean');
module.exports = function () {
    gulp.task('clean', function () {
        return gulp.src('build', {read: false})
        .pipe(clean());
    });
}