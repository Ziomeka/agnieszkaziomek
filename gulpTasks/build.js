var gulp = require('gulp');
var runSeq = require('run-sequence');
require('./clean')();
require('./sass-lint')();
require('./styles')();
require('./copy')();
require('./babel')();

module.exports = function () {
    gulp.task('build', function(callback){
        return runSeq('clean', 'sass-lint', ['styles', 'copy', 'babel'],callback);
    });
}