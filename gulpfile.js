var gulp = require('gulp')
  , gutil = require('gulp-util')
  , less = require('gulp-less')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
  , livereload = require('gulp-livereload');

gulp.task('less', function () {
  gulp.src('less/style.less')
    .pipe(less({
      paths: ['less', 'bower_components']
    }).on('error', gutil.log))
    .pipe(gulp.dest('design'))
    .pipe(livereload());
});

gulp.task('default', ['less', 'scripts']);

gulp.task('watch', function () {
  gulp.watch('less/**/*.less', ['less']);
  gulp.watch('js/main.js', ['scripts']);
});

gulp.task('scripts', function () {
  gulp.src([
    'bower_components/bootstrap/js/transition.js',
    // 'bower_components/bootstrap/js/alert.js',
    // 'bower_components/bootstrap/js/button.js',
    // 'bower_components/bootstrap/js/carousel.js',
    'bower_components/bootstrap/js/collapse.js',
    // 'bower_components/bootstrap/js/dropdown.js',
    // 'bower_components/bootstrap/js/modal.js',
    // 'bower_components/bootstrap/js/tooltip.js',
    // 'bower_components/bootstrap/js/popover.js',
    // 'bower_components/bootstrap/js/scrollspy.js',
    // 'bower_components/bootstrap/js/tab.js',
    // 'bower_components/bootstrap/js/affix.js',

    'bower_components/spin.js/spin.js',
    'bower_components/spin.js/jquery.spin.js',

    'bower_components/vanilla-bootstrap/js/main.js'
  ])
    .pipe(uglify())
    .pipe(concat('custom.js'))
    .pipe(gulp.dest('js'))
    .pipe(livereload());
});
