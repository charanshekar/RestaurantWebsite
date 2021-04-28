'use strict'

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

// Gulp operates on Streams which sends files through a stream of functions(with the help of pipe) 
// and gulp.dest sends the converted files to a destination folder
/* gulp.task('sass', function() {
    return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}); */

gulp.task('sass:watch', function() {
    gulp.watch('./css/*.scss', function() {
        return gulp.src('./css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
    });
});

gulp.task('browser-sync', function() {
    var files = [
        './*.html',
        './css/*.css',
        './js/*.js',
        'img/*.{png,jpg,gif}'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', gulp.parallel('browser-sync', 'sass:watch'));