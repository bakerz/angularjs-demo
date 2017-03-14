'use strict';

var gulp = require('gulp'),
    bs = require('browser-sync').create(),
    sass = require('gulp-sass'),
    wiredep = require('wiredep').stream,
    inject = require('gulp-inject'),
    rev = require('gulp-rev'),
    del = require('del'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    order = require('gulp-order'),
    plumber = require('gulp-plumber'),
    reload = bs.reload;

// copy
gulp.task('copy', ['del', 'styles'], function () {
   return  gulp.src([
       'src/**/*.html',
       'src/**/*.js',
       'src/**/*.{jpg,png}'
   ]).pipe(gulp.dest('dist'))
});


// scss编译后的css将注入到浏览器里实现更新
gulp.task('styles', function() {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(rev())
        .pipe(gulp.dest('dist/styles'))
        .pipe(reload({stream: true}));
});

// 合并压缩 js
gulp.task('scripts', function () {
    return gulp.src('src/scripts/**/*.js')
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(rev())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(reload({stream: true}));
});

// 注入 css、javascript、插件
gulp.task('inject', ['del', 'copy'], function() {
    var target = gulp.src('src/index.html');

    var sources = gulp.src([
        'dist/styles/**/*.css',
        'dist/scripts/_index.js',
        'dist/scripts/route.js',
        'dist/scripts/**/*.js'
        ], {read: false});

    return target
        .pipe(gulp.dest('dist'))
        .pipe(inject(sources, {relative: true}))
        .pipe(wiredep())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

// 清空
gulp.task('del:dist', function() {
    del('dist/*');
});

gulp.task('del:tmp', function() {
    del('.tmp/*');
});

gulp.task('styles:dev', function () {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(reload({stream: true}));
});

gulp.task('inject:dev', ['styles:dev'], function() {
    var target = gulp.src('src/index.html');

    var sources = gulp.src([
        '.tmp/styles/**/*.css',
        'src/scripts/_index.js',
        'src/scripts/route.js',
        'src/scripts/**/*.js'
    ], {read: false});

    return target
        .pipe(gulp.dest('.tmp'))
        .pipe(inject(sources, {ignorePath: ['.tmp', 'src'], addRootSlash: false}))
        .pipe(wiredep())
        .pipe(gulp.dest('.tmp'))
        .pipe(reload({stream: true}));
});

// event.type: [added, changed, deleted]
gulp.task('watch', ['inject:dev'], function () {
    gulp.watch('src/views/**/*.html').on('change', reload);

    gulp.watch('src/styles/**/*.scss', ['styles:dev']);

    gulp.watch([
        'src/index.html',
        'src/scripts/**/*.js'
    ], ['inject:dev']);
});

// browser-sync 静态服务器
gulp.task('serve:dev', ['del:tmp', 'watch'], function() {
    bs.init({
        server: {
            baseDir: ['.tmp', 'src'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });
});

//gulp.task('server:dist', ['dist'], function() {});
gulp.task('server:dist', function () {
    bs.init({
        server: {
            baseDir: 'dist'
        }
    })
});

gulp.task('default', ['serve:dev']);
//gulp.task('default', ['serve:dev', 'inject']);