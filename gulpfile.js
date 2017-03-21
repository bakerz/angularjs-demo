'use strict';

var gulp = require('gulp'),
  bs = require('browser-sync').create(),
  minifyHtml = require('gulp-minify-html'),
  ngTemplateCache = require('gulp-angular-templatecache'),
  sass = require('gulp-sass'),
  csso = require('gulp-csso'),
  wiredep = require('wiredep').stream,
  inject = require('gulp-inject'),
  rev = require('gulp-rev'),
  revReplace = require('gulp-rev-replace'),
  filter = require('gulp-filter'),
  del = require('del'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  useref = require('gulp-useref'),
  ngAnnotate = require('gulp-ng-annotate'),
  plumber = require('gulp-plumber'),
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