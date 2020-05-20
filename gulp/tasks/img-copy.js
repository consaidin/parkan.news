module.exports = function () {
    $.gulp.task('img-copy', function () {
        return $.gulp.src('src/img/**/*.{jpg,png}')
            .pipe($.gulp.dest('assets/img'));
    })
}