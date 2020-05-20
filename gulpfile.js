global.$ = {
    gulp: require('gulp'),
    pug: require('gulp-pug'),
    scss: require('gulp-sass'),
    gcmq: require('gulp-group-css-media-queries'),
    autoprefixer: require('gulp-autoprefixer'),
    sourcemaps: require('gulp-sourcemaps'),
    del: require('del'),
    browserSync: require('browser-sync').create(),
    imageminJpegRecompress: require('imagemin-jpeg-recompress'),
    pngquant: require('imagemin-pngquant'),
    imagemin: require('gulp-imagemin'),
    replace: require('gulp-replace'),
    svgSprite: require('gulp-svg-sprite'),
    cheerio: require('gulp-cheerio'),
    svgmin: require('gulp-svgmin'),
    gulpif: require('gulp-if'),
    isDev: (process.argv.indexOf('--dev') !== -1),
    isSync: (process.argv.indexOf('--sync') !== -1),
    path: {
        config: require('./gulp/config-tasks'),
    }
}

$.path.config.forEach(function (path) {
    require(path)();
})

$.gulp.task('default', $.gulp.series( 'build',$.gulp.parallel('img', 'svg'),
        $.gulp.parallel( 'server')))
