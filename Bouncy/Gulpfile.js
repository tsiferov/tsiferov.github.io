'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uncss = require('gulp-uncss');
var clean = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var gcmq = require('gulp-group-css-media-queries');
var cleanCSS = require('gulp-clean-css');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/sass/**/*.+(sass|scss)", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/sass/**/*.+(sass|scss)")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 5 versions', 'ie >= 8'],
            cascade: false
        }))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

//Cleaning unused styles
gulp.task('uncss', function () {
    return gulp.src('app/css/*.css')
        .pipe(uncss({
            html: ['app/index.html', 'posts/**/*.html', 'http://example.com']
        }))
        .pipe(gulp.dest('dist/css'));
});

//Cleaning destination directory
gulp.task('clean', function () {
    return gulp.src('dist/css/*.css', {read: false})
        .pipe(clean());
});

//Cleaning unused styles, group media queries and minify CSS
gulp.task('minifyCSS', ['clean'], function () {
    return gulp.src('app/css/*.css')
    	.pipe(uncss({
            html: ['app/index.html', 'app/**/*.html', 'http://example.com']
        }))
        .pipe(gcmq())
        .pipe(cleanCSS())
    	// .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});




gulp.task('imagemin', function() {
	return gulp.src('app/img/**.*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
});

gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
});

gulp.task('html', function() {
	return gulp.src('app/*.html')
		.pipe(gulp.dest('dist'))
});

gulp.task('js', function() {
	return gulp.src('app/js/*')
		.pipe(gulp.dest('dist/js'))
});

gulp.task('build', ['html', 'fonts', 'js', 'imagemin', 'minifyCSS']);

gulp.task('default', ['serve']);