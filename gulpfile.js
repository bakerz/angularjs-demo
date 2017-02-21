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

// 注入 bower 插件
gulp.task('wiredep', function() {
    gulp.src('./index.html')
        .pipe(wiredep({
            optional: 'configuration',
            goes: 'here'
        }))
        .pipe(gulp.dest('./'));
});

// 注入 css、javascript
gulp.task('inject', function() {
    var target = gulp.src('./index.html');

    var sources = gulp.src([
        'client/public/styles/css/**/*.css',
        'client/public/scripts/**/*.js'
        ], {read: false});

    return target.pipe(inject(sources))
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

gulp.task('default', ['serve', 'inject']);