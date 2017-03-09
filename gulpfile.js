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
    reload = bs.reload;

// 路径配置
var path = {
    input: {
        js: [''],
        scss: ['']
    },
    output: {
        dist: 'dist'
    }
};

// 静态服务器
gulp.task('serve', function() {
    bs.init({
        server: {
            baseDir: 'dist'
        }
    });

    gulp.watch('src/assets/styles/scss/*.scss', ['sass'], reload);
    gulp.watch([
        'src/index.html',
        'src/app/views/*.html',
        'src/app/scripts/*.js'
    ]).on('change', reload);
});

// copy
gulp.task('copy', ['sass'], function () {
   return  gulp.src([
       'src/**/*.html',
       'src/**/*.js'
   ]).pipe(gulp.dest('dist'))
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
    return gulp.src('src/assets/styles/scss/*.scss')
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(rev())
        .pipe(gulp.dest('dist/assets/styles/css'))
        .pipe(reload({stream: true}));
});

// 合并‘压缩’ js
gulp.task('js', function () {
    return gulp.src('src/app/scripts/**/*.js')
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(rev())
        .pipe(gulp.dest('dist/app/scripts'))
        .pipe(reload({stream: true}));
});

// 注入 css、javascript、插件
gulp.task('inject', ['del', 'copy'], function() {
    var target = gulp.src('dist/index.html');

    var headSources = gulp.src([
        'dist/assets/styles/css/**/*.css',
        'dist/app/scripts/**/route.js'
        ], {read: false});

    var bodySources = gulp.src([
        '!dist/app/scripts/route.js',
        'dist/app/scripts/**/*.js'
        ], {read: false});

    return target.pipe(inject(headSources, {starttag: '<!-- inject:head:{{ext}} -->', relative: true}))
        .pipe(inject(bodySources, {starttag: '<!-- inject:body:{{ext}} -->', relative: true}))
        .pipe(wiredep())
        .pipe(gulp.dest('dist'));
});

/*
// 压缩
gulp.task('js', function() {
    return gulp.src('client/public/scripts/*.js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});*/

// 清空
gulp.task('del', function() {
    del('dist/*');
});

gulp.task('default', ['serve', 'inject']);