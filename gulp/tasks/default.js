var gulp = require('gulp');

gulp.task('default', ['scss', 'browserify', 'watchify', 'browser-sync', 'watch']);