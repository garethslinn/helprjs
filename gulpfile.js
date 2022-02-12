const {src, dest, series, watch} = require('gulp');
const concat = require('gulp-concat');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');

function compileTs() {
    return src('./ts/**/*.ts')
    .pipe(ts())
    .pipe(uglify())
    .pipe(concat('index.js', {newLine: ';'}))
    .pipe(dest('./dist/'));
}

exports.default = function () {
    watch( ['**/*.ts'], series(compileTs) ),
    done => {
        done();
    }
};

