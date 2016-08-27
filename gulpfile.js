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


gulp.task('default', function() {
    // place code for your default task here
});