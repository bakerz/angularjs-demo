'use strict';

var gulp = require('gulp'),
  bs = require('browser-sync').create(),                    // 浏览器同步工具
  minifyHtml = require('gulp-minify-html'),                 // HTML 文件压缩
  ngTemplateCache = require('gulp-angular-templatecache'),  // 将html模板页面 以angularjs的方式 压缩并缓存
  sass = require('gulp-sass'),                              // 编译 sass
  csso = require('gulp-csso'),                              // 压缩、优化css
  wiredep = require('wiredep').stream,                      // 将js、css文件自动插入到html中
  inject = require('gulp-inject'),                          // 把css，js这些静态文件注入到html文件中
  rev = require('gulp-rev'),                                // 给静态资源文件名添加hash值
  revReplace = require('gulp-rev-replace'),                 // 重写被gulp-rev重命名的文件名
  filter = require('gulp-filter'),                          // 在虚拟文件流中过滤文件
  del = require('del'),                                     // 替代gulp-clean,删除文件
  concat = require('gulp-concat'),                          // 合并文件
  uglify = require('gulp-uglify'),                          // 压缩js文件
  useref = require('gulp-useref'),                          // 通过插入特定的标签，用于标示gulp-useref要处理的资源。解析构建块在HTML文件来代替引用未经优化的脚本和样式表。
  ngAnnotate = require('gulp-ng-annotate'),                 // 处理angularjs依赖注入
  plumber = require('gulp-plumber'),                        // 可以阻止 gulp 插件发生错误导致进程退出并输出错误日志
  reload = bs.reload;

//=========== dev start ===========\\

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
    'src/scripts/_index.js',// 保证引入顺序
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

//=========== dist start ==============\\

gulp.task('del:dist', function() {
  del('dist/*');
});

gulp.task('build:dist', function() {

  var temFilter = filter('src/views/**/*.html', {restore: true});
  var otherFilter = filter(['src/index.html', 'src/**/*.{jpg, png}']);

  return gulp.src([
    'src/**/*.html',
    'src/**/*.{jpg,png}'
  ])
    .pipe(temFilter)
    .pipe(minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(ngTemplateCache('templateCacheHtml.js', {
      module: 'myApp'
    }))
    .pipe(gulp.dest('.tmp/template'))
    .pipe(temFilter.restore)
    .pipe(otherFilter)
    .pipe(gulp.dest('dist'))
});

gulp.task('styles:dist', function () {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass())
    .pipe(concat('app.css'))
    .pipe(csso())
    .pipe(rev())
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts:dist', ['build:dist'], function () {
  return gulp.src([
      'src/scripts/_index.js',
      'src/scripts/route.js',
      'src/scripts/**/*.js',
      '.tmp/template/templateCacheHtml.js'
    ])
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(rev())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(reload({stream: true}));
});

gulp.task('inject:dist', ['styles:dist', 'scripts:dist'], function() {

  var target = gulp.src('src/index.html');

  var sources = gulp.src([
    'dist/styles/**/*.css',
    'dist/scripts/**/*.js'
  ], {read: false});

  var jcFilter = filter([
    '**/vendor.js',
    '**/vendor.css'
  ], {restore: true});

  return target
    .pipe(inject(sources, {ignorePath: 'dist', addRootSlash: false}))
    .pipe(wiredep())
    .pipe(useref())
    .pipe(jcFilter)
    .pipe(rev())
    .pipe(jcFilter.restore)
    .pipe(revReplace())
    .pipe(gulp.dest('dist'));
});

gulp.task('serve:dist', ['del:dist', 'inject:dist'], function () {
  bs.init({
    server: {
      baseDir: 'dist'
    }
  })
});

gulp.task('default', ['serve:dev']);