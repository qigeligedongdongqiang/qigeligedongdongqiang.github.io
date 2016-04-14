var gulp = require('gulp'),
	sass = require('gulp-sass'),
	postcss = require("gulp-postcss"),
	autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
	var processors = [
		autoprefixer({
				brosers: ["Android 4.4", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 9"]
		})];
		
	return gulp.src(["./src/main.scss"])
		.pipe(sass())
		.pipe(postcss(processors))
		.pipe(gulp.dest('./styles'))
});

gulp.task('sass:watch', function () {
	gulp.watch("./src/main.scss", ['sass']);
});

gulp.task('default', ['sass', 'sass:watch'])
