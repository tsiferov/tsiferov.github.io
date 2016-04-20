/**
 * Created by TsiferovSerhii on 18.04.2016.
 */
var gulp = require('gulp');
var cssmin = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('minify', function () {
    gulp.src('css/src/*.css')
        .pipe(concat('style.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('css/'));
});

gulp.task('scripts', function() {
    return gulp.src('js/src/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/'));
});

gulp.task('default', ['minify', 'scripts']);
