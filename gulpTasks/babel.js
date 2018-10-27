var gulp = require('gulp');
var babel = require('gulp-babel');

module.exports = function () {
    gulp.task('babel', function() {
        return gulp.src('./src/js/*.js')
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(gulp.dest('./build/js'));
    });
}