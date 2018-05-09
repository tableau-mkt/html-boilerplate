var gulp = require('gulp');
var twig = require('gulp-twig');
var yamlData = require('gulp-yaml-data');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

gulp.task('compile', function() {
  return gulp.src('./src/templates/index.twig')
    .pipe(yamlData({
      property: 'data',
      src: './src/data/examples.yml'
    }))
    .pipe(twig())
    .pipe(gulp.dest('./build'));
});

gulp.task('copy', function () {
    gulp.src('./src/css/styles.css')
        .pipe(gulp.dest('./build/css/'));
    gulp.src('./src/js/scripts.js')
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch([
    './src/data/**/*.json',
    './src/data/**/*.yml',
    './src/templates/**/*.twig'
  ], ['compile']);
  gulp.watch([
    './src/css/**/*.css',
    './src/js/**/*.js',
  ], ['copy']);
});

gulp.task('default', ['compile', 'copy', 'watch']);
