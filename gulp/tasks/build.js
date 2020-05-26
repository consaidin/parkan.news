module.exports = function () {
    $.gulp.task('build', $.gulp.series(
        'clean',
        'pug',
        'scss',
        'img-copy',
        'scripts',
        'fonts',
        'css',
    ))
}