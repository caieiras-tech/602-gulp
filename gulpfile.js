

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

gulp.task("compilar-js", function () {
    return gulp.src('js/*.js')
      .pipe(concat('scripts.js'))
      .pipe(babel({
          presets:['@babel/env'] 
      }))
      .pipe(uglify())
      .pipe(gulp.dest("minify"));
  });


gulp.task('compilar-css', function(){
    return gulp.src('css/*.css')
           .pipe(concat('main.css'))
           .pipe(gulp.dest('minify-css'))
});