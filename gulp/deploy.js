/**
 * Created by Lucian on 8/23/16.
 */
'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();
var gulpsync = require('gulp-sync')(gulp);

module.exports = function(options) {
    gulp.task('deploy', gulpsync.sync(['clean', 'build']), function () {
        return gulp.src([options.dist + '/**/*', 'CNAME'])
            .pipe($.ghPages());
    });
};
