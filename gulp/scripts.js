/**
 * Created by Lucian on 8/23/16.
 */
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

module.exports = function(options) { //-- L
    gulp.task('scripts', function () {
        return gulp.src([options.src + '/app/**/*.js', options.src + '/app/wizard/scripts/*.js'])
            .pipe($.jshint())
            .pipe($.jshint.reporter('jshint-stylish'))
            .pipe(browserSync.reload({ stream: true }))
            .pipe($.size());
    });
};
