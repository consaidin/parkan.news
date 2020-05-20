module.exports = function () {
    $.gulp.task('scss', function () {
        return $.gulp.src('src/scss/style.scss')
            .pipe($.gulpif($.isDev, $.sourcemaps.init()))
            .pipe($.scss().on('error', $.scss.logError))
            // .pipe($.gcmq())
            .pipe($.autoprefixer({overrideBrowserslist: ['last 2 versions']}))
            .pipe($.gulpif($.isDev, $.sourcemaps.write()))
            .pipe($.gulp.dest('assets/css'))
            .pipe($.gulpif($.isSync, $.browserSync.reload({
                stream: true
            })))
    })
}