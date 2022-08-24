var gulp = require("gulp");
var sass = require('gulp-sass')(require('sass'));
var cssnext = require('postcss-cssnext');
var cleancss = require('gulp-clean-css');
var postcss = require('gulp-postcss');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('css:full', function() {
    return gulp
        .src(['src/scss/inboxes.scss'])
        .pipe(sass())
        .pipe(gulp.dest('build'))
});

gulp.task('css:min', function() {
    return gulp.src(['src/scss/inboxes.scss'])
        .pipe(sass())
        .pipe(postcss([cssnext()]))
        .pipe(cleancss())
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build'))
        .pipe(gulp.dest('doc/css'));
});

gulp.task('default', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('css:full','css:min'))
})