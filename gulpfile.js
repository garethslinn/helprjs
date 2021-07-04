var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel');
    concat = require('gulp-concat');

gulp.task('default', function(){
    gulp.src(['js/**/*.js', 'js/*.js'])
        .pipe(concat('index.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default');