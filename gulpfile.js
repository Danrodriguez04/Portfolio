const gulp = require('gulp');
const {src,dest,watch} = require('gulp');
const concat = require('gulp-concat');

const cleanCSS = require('gulp-clean-css');

function compilaCSS() {
    return src('./assets/dist/*.css')
        .pipe(concat('all.min.css'))
        .pipe(cleanCSS())
        .pipe(dest('./assets/css'));
}

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.compila = compilaCSS
exports.default = defaultTask