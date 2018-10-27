var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');
module.exports = function () {
    gulp.task('sass-lint', function () {
        return gulp.src('src/sass/**/*.s+(a|c)ss')
            .pipe(sassLint(
            {
                configFile: '.sass-lint.yml'
            }))
            .pipe(sassLint.format())
            .pipe(sassLint.failOnError())
    });
}