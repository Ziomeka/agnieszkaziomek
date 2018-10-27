var gulp = require('gulp');
module.exports = function () {
    gulp.task('copy', function () {
        return Promise.all ([gulp.src('./src/*.html')
            .pipe(gulp.dest('./build/')),
        gulp.src('./src/img/*.*')
            .pipe(gulp.dest('./build/img/'))]);
    });
}