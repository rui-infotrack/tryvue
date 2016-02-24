var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var glob = require('glob');
var sourcemaps = require('gulp-sourcemaps');
var vueify = require('vueify')

gulp.task('browserify', function(cb) {
  glob('./public/javascripts/index.js', {}, function (err, files) {
    var b = browserify({ debug: true });
    files.forEach(function (file) {
      b.add(file);
    });

    b.transform(vueify);

    b.bundle()
     .pipe(source('bundle.js'))
     .pipe(buffer())
     .pipe(sourcemaps.init({loadMaps: true}))
     .pipe(sourcemaps.write('.'))
     .pipe(gulp.dest('./public/dist'));
    cb();
  }); 
});

gulp.task('default', function() {
  gulp.watch('./public/javascripts/**/*.*', ['browserify']);
});
