const gulp = require ('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglifly = require('gulp-uglify')
const image = require('gulp-imagemin')

function tarefasCSS(cb){
    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css', 
        './vendor/owl/css/owl.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        './vendor/jquery-ui/jquery-ui.css',
        './src/css/style-custom.css'
    ])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
}

function tarefasJS(){
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './vendor/jquery-mask/jquery.mask.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './vendor/owl/owl.carousel.js',
        './vendor/jquery-ui/jquery-ui.js',
        './src/js/custom.js'
    ])
        .pipe(concat('scripts.js'))
        .pipe(uglifly())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
}

function tarefasImagem(){
        return gulp.src('./src/images/*')
            .pipe(image({
                pngquant: true,
                optipng: false,
                zopflipng: true,
                jpegRecompress: false,
                mozjpeg: true,
                gifsicle: true,
                svgo: true,
                concurrent: 10,
                quiet: true
            }))
            .pipe(gulp.dest('./dist/images'))
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
