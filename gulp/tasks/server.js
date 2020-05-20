module.exports = function () {
    $.gulp.task('server', function () {

        $.browserSync.init({
            server: {
                baseDir: "assets/"
            },
            files: ['assets/**/*.*']
        });
        $.gulp.watch('src/scss/**/*.scss', $.gulp.series('scss'))
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'))
        $.gulp.watch('src/js/**/*.js', $.gulp.series('scripts'))
        $.gulp.watch('src/img/*', $.gulp.series('img-copy'))
    })
}
