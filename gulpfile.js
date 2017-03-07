'use strict';

var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var rev = require('gulp-rev');
var reload = bs.reload;

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
            baseDir: 'src'
        }
    });

    gulp.watch('src/assets/styles/scss/*.scss', ['sass'], reload);
    gulp.watch([
        'src/index.html',
        'src/app/views/*.html',
        'src/app/scripts/*.js'
    ]).on('change', reload);
});

// 压缩合并 js
gulp.task('js', function () {});

// copy
gulp.task('copy', ['sass'], function () {
   return  gulp.src([
           'src/app/**/*.html',
           'src/app/**/*.js',
           'src/assets/styles/css/*.css'
       ]).pipe(gulp.dest('dist'))
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
    return gulp.src('src/assets/styles/scss/*.scss')
        .pipe(sass())
        .pipe(rev())
        .pipe(gulp.dest('src/assets/styles/css'))
        .pipe(reload({stream: true}));
});

// 注入 css、javascript、插件
gulp.task('inject', ['sass'], function() {
    var target = gulp.src('src/index.html');

    var headSources = gulp.src([
        'src/assets/styles/css/**/*.css',
        'src/app/scripts/**/route.js'
        ], {read: false});

    var bodySources = gulp.src([
        '!src/app/scripts/route.js',
        'src/app/scripts/**/*.js'
        ], {read: false});

    return target.pipe(inject(headSources, {starttag: '<!-- inject:head:{{ext}} -->'}, {relative: true}))
        .pipe(inject(bodySources, {starttag: '<!-- inject:body:{{ext}} -->'}, {relative: true}))
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

// 打包 dist
// 压缩
// 构建清空

gulp.task('default', ['serve', 'inject']);