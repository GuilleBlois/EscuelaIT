var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');

gulp.task('sass',function(){
    gulp.src('./src/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('dest'))
});

gulp.task('watch',function(){
	gulp.watch('src/**/*.scss',['sass']);
});

gulp.task('default',['sass','watch']);
