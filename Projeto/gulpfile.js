const gulp = require ('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglifly = require('gulp-uglify')
const image = require('gulp-image')

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

exports.styles = tarefasCSS
exports.scripts = tarefasJS
