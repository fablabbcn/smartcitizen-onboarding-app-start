var gulp = require('gulp');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var concat = require('gulp-concat');


gulp.task('default', function() {
    // place code for your default task here
});

/** watch **/

gulp.task('watch', function(){
   gulp.watch('app/styles/*.scss', ['buildStyles']);
});

/** sass task **/
gulp.task('sass', function() {
   return gulp.src(['app/styles/main.scss'])
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('app/styles'));
});
gulp.task('devCSS', function () {
   return gulp.src(['app/bower_components/bootstrap/dist/css/bootstrap.min.css',
       'app/styles/main.css'])
       .pipe(concat('main.css'))
       .pipe(gulp.dest('app/styles'));
});
gulp.task('buildStyles', function(){
   runSequence('sass', 'devCSS');
});