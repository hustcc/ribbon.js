const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const injectVersion = require('gulp-inject-version');

gulp.task('mini', () => (
  gulp.src('src/ribbon.js')
  .pipe(injectVersion())
  .pipe(gulp.dest('dist/'))
  .pipe(uglify({
  	preserveComments: 'license'
  }))    //uglify
  .pipe(rename("ribbon.min.js"))
  .pipe(gulp.dest('dist/'))
));