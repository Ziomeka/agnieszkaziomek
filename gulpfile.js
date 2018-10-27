var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var runSeq = require('run-sequence');
var browserSync = require('browser-sync').create();
var sassLint = require('gulp-sass-lint');

gulp.task('clean', function () {
  return gulp.src('build', {read: false})
    .pipe(clean());
});

gulp.task('styles', function() {
    return gulp.src('src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('././build/css'));
});

gulp.task('copy', function () {
    return Promise.all ([gulp.src('./src/*.html')
        .pipe(gulp.dest('./build/')),
    gulp.src('./src/img/*.*')
        .pipe(gulp.dest('./build/img/'))]);
});

gulp.task('sass-lint', function () {
  return gulp.src('src/sass/**/*.s+(a|c)ss')
    .pipe(sassLint(
      {
        configFile: '.sass-lint.yml'
      }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('build', function(callback){
  return runSeq('clean', 'sass-lint', ['styles', 'copy'],callback);
});

gulp.task('default', ['build'], function() {

    browserSync.init({
        server: "./build"
    });
    gulp.watch('src/sass/**/*.scss',['sass-lint', 'styles']);
    gulp.watch('src/**/*.html',['copy']);
    gulp.watch(["build/*.html", "build/**/*.css"]).on('change', browserSync.reload);
});
