'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var runSequence = require('run-sequence');


var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});


var options = {
    src: 'src',
    dist: 'dist',
    tmp: '.tmp',
    e2e: 'e2e',
    errorHandler: function(title) {
        return function(err) {
            gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
            this.emit('end');
        };
    },
    wiredep: {
        directory: 'bower_components',
        exclude: []
    }
};
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
    require('./gulp/' + file)(options);
});


//gulp.task('bower', function() {
//    return bower()
//        .pipe(gulp.dest(config.bowerDir))
//});
//
//gulp.task('js', function() {
//    var mainJS = [options.src + '/app/wizard/scripts/*.js',options.src + '/app/**/*.js' ];
//    gulp.src($.mainBowerFiles().concat(mainJS))
//        .pipe($.filter('*.js'))
//        //.pipe($.concat('main.js'))
//        //.pipe($.uglify())
//        .pipe(gulp.dest(options.dist + '/js'));
//});






gulp.task('default', function() {
    // place code for your default task here
});




/** watch **/
//gulp.task('watch', function(){
//   gulp.watch('app/styles/*.scss', ['buildStyles']);
//});

///** sass task **/
//gulp.task('sass', function() {
//   return gulp.src(['app/styles/main.scss'])
//       .pipe(sass().on('error', sass.logError))
//       .pipe(gulp.dest('app/styles'));
//});
//gulp.task('devCSS', function () {
//   return gulp.src(['app/bower_components/bootstrap/dist/css/bootstrap.min.css',
//       'app/styles/main.css'])
//       .pipe(concat('main.css'))
//       .pipe(gulp.dest('app/styles'));
//});
//gulp.task('buildStyles', function(){
//   runSequence('sass');
//});