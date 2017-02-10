'use strict';

var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
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

/*gulp.task('js', function() {
    return gulp.src('client/public/scripts/*.js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});*/

gulp.task('default', ['serve']);