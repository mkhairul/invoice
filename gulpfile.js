var uglify = require('gulp-uglify');
var gulp = require('gulp');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var gulpFilter = require('gulp-filter');
var mainBowerFiles = require('gulp-main-bower-files');
var cssmin = require('gulp-cssmin');
var usemin = require('gulp-usemin');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var fs = require('fs');
var s3 = require('gulp-s3');
var gutil = require('gulp-util');
var mkdirp = require('mkdirp');
var request = require('request');
var Parse = require('parse/node').Parse;
var http = require('http');
var sitemap = require('sitemap');
var exec = require('sync-exec');
var rename = require('gulp-rename');

var paths = {
    assets: 'app/assets'
}

gulp.task('default', function(){
  gutil.log('test');
  runSequence('sass', 'other-assets', 'usemin');
})

gulp.task('sass', function(){
  return gulp.src(paths.assets + '/css/sass/materialism.scss')
           .pipe(sass())
           .pipe(gulp.dest('app/assets/css'))
});

gulp.task('usemin', function(){
    return gulp.src('app/index.dev.html')
        .pipe(rename('index.html'))
        .pipe(usemin({
            assetsDir: 'app',
            css: ['concat', cssmin],
            js: ['concat', uglify]
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('other-assets', function(){
    return gulp.src(['app/**/*', 'app/assets/js/*.json', 
                     '!app/bower_components/**/*',
                     '!app/index.dev.html',
                     '!app/dist',
                     '!app/html',
                     '!app/assets/js/**/*.js', 
                     '!app/assets/css/**/*'])
    .pipe(gulp.dest('public'));
});