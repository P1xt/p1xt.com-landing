const gulp = require('gulp');
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const pump = require('pump');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const minify = composer(uglifyes, console);
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');

gulp.task('minify-html', function () {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-js', function (cb) {
  const options = {
    mangle: { toplevel: true }
  };
  pump([
    gulp.src('src/scripts/*.js'),
    babel({
      presets: ['env']
    }),
    minify(options),
    gulp.dest('dist/scripts')
  ],
    cb
  );
});

gulp.task('minify-css', () => {
  return gulp.src('src/styles/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('lint', () => {
  return gulp.src(['src/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('build', ['lint', 'minify-css', 'minify-js', 'minify-html']);
