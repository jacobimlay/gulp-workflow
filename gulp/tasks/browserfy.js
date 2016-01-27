var gulp       = require('gulp');
var browserify = require('gulp-browserify');
 
// Basic usage 
gulp.task('browserfy', ['glob'], function() {
  // Single entry point to browserify 
  gulp.src('./content/js/app.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(gulp.dest('./content/js/build'))
});