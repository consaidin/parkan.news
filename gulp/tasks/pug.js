module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src('src/pug/*.pug')
            .pipe($.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('assets'))
            .pipe($.browserSync.reload({
                stream: true
            }))
    })
}