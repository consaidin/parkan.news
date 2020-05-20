module.exports = function () {
    $.gulp.task('css', function () {
        return $.gulp.src('src/css/**/*.css')
            .pipe($.gulp.dest('assets/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }))
    })
}