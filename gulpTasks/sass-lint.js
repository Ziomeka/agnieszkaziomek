const gulp = require('gulp');
const config = require('../config.json');
const sassLint = require('gulp-sass-lint');
module.exports = function () {
    gulp.task('sass-lint', function () {
        return gulp.src(config.src.styles + '*.s+(a|c)ss')
            .pipe(sassLint(
                {
                    configFile: '.sass-lint.yml',
                }))
            .pipe(sassLint.format())
            .pipe(sassLint.failOnError())
    });
}