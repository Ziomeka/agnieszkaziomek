var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var runSeq = require('run-sequence');
var browserSync = require('browser-sync').create();

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

gulp.task('build', function(callback){
  return runSeq('clean', ['styles', 'copy'],callback);
});

gulp.task('default', ['build'], function() {

    browserSync.init({
        server: "./build"
    });
    gulp.watch('src/sass/**/*.scss',['styles']);
    gulp.watch('src/**/*.html',['copy']);
    gulp.watch(["build/*.html", "build/**/*.css"]).on('change', browserSync.reload);
});
