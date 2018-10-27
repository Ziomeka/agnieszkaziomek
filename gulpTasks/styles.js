var gulp = require('gulp');
var sass = require('gulp-sass');
module.exports = function () {
    gulp.task('styles', function() {
        return gulp.src('./src/sass/main.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('././build/css'));
    });
}