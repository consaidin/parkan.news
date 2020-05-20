module.exports = function () {
    $.gulp.task('svg', function () {
        return $.gulp.src('src/img/**/*.svg')
            .pipe($.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill')
                    $('[stroke]').removeAttr('stroke')
                    $('[style]').removeAttr('style')
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe($.replace('&gt;', '>'))
            // build svg sprite
            .pipe($.svgSprite({
                mode: {
                    symbol: {
                        sprite: 'sprite.svg'
                    }
                }
            }))
            .pipe($.gulp.dest('assets/img'));
    })
}