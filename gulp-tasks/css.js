module.exports = function (gulp, plugins, paths) {
  return function () {
    gulp.src(paths.stylus)
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.stylus({
        'include css': true
      }))
      .pipe(plugins.sourcemaps.write(''))
      .pipe(gulp.dest(paths.build + 'css'));
  };
};
