var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');

var styles = 'client/*.styl';

gulp.task('styles', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return gulp.src(styles)
    .pipe(stylus())
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9', 'Firefox ESR', 'Opera 12.1'))
    .pipe(gulp.dest('./client'));
});

gulp.task('watch', function() {
  gulp.watch(styles, ['styles']);
});
