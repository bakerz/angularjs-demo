'use strict';

var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var reload = bs.reload;

//静态服务器
gulp.task('serve', function() {
    bs.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('client/public/styles/scss/*.scss', ['sass'], reload);
    gulp.watch('*.html').on('change', reload);
    gulp.watch('client/views/*.html').on('change', reload);
    gulp.watch('client/public/scripts/*.js').on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
    return gulp.src('client/public/styles/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('client/public/styles/css'))
        .pipe(reload({stream: true}));
});

// 注入 css、javascript、插件
gulp.task('inject', function() {
    var target = gulp.src('./index.html');

    var headSources = gulp.src([
        'client/public/styles/css/**/*.css',
        'client/public/scripts/**/route.js'
        ], {read: false});

    var bodySources = gulp.src([
        '!./client/public/scripts/route.js',
        './client/public/scripts/**/*.js'
        ], {read: false});

    return target.pipe(inject(headSources, {starttag: '<!-- inject:head:{{ext}} -->'}))
        .pipe(inject(bodySources, {starttag: '<!-- inject:body:{{ext}} -->'}))
        .pipe(wiredep())
        .pipe(gulp.dest('./'));
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