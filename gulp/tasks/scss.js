var gulp       = require('gulp');
var neat       = require('node-neat');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('scss', ['glob'], function () {
  gulp.src('./content/stylesheets/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: require('node-neat').includePaths
    }))
    .pipe(gulp.dest('./content/stylesheets/css/build'))
    .pipe(rename('app.min.css'))
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./content/stylesheets/css/'))
    .pipe(reload({stream:true}));
});