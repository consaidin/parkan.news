module.exports = function () {
    $.gulp.task('scripts:main', function () {
        return $.gulp.src('src/js/main.js')
            .pipe($.gulp.dest('assets/js'))
            .pipe($.browserSync.reload({
                stream: true
            }))
    })

    $.gulp.task('scripts:libs', function () {
        return $.gulp.src('src/js/libs/**/*.js')
            .pipe($.gulp.dest('assets/js/libs'))
            .pipe($.browserSync.reload({
                stream: true
            }))
    });

    $.gulp.task('scripts', $.gulp.parallel('scripts:main', 'scripts:libs'))
}