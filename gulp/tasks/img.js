module.exports = function () {
    $.gulp.task('img', function () {
        return $.gulp.src('assets/img/**/*.{jpg,svg,png}')
            .pipe($.imagemin([
                $.imagemin.jpegtran({progressive: true}),
                $.imageminJpegRecompress({
                    loops: 5,
                    min: 65,
                    max: 70,
                    quality: 'medium'
                }),
                $.imagemin.optipng({optimizationLevel: 3}),
                $.pngquant({quality: [0.7, 0.8], speed: 5}),
                $.imagemin.svgo()
            ]))
            .pipe($.gulp.dest('assets/img'))
            .pipe($.browserSync.reload({
                stream: true
            }))
    })
}