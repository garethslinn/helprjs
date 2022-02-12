const {src, dest, series, watch} = require('gulp');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');

function compileTs() {
    return src('./js/**/*.ts')
    .pipe(ts())
    .pipe(uglify())
    .pipe(dest('./dist'));
}

exports.default = function () {
    watch( ['**/*.ts'], series(compileTs) );
};