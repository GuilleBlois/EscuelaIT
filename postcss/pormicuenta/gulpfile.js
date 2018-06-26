var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var precss = require('precss');
gulp.task('css',function(){
    var processors=[
    	cssnext,
	precss
    ];
    return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});

gulp.task('watch',function(){
	gulp.watch('src/**/*.css',['css']);
});

gulp.task('default',['css','watch']);
