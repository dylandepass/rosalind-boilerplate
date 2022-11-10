const {
  series, dest, src, watch,
} = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');
const rename = require('gulp-rename');

/**
 * Copy variables
 */

function copyLightTheme() {
  return src('./node_modules/@rosalind/rosalind-dna/dist/css/light/tokens.css')
    .pipe(rename('light-theme.css'))
    .pipe(dest('./styles'));
}

function copyDarkTheme() {
  return src('./node_modules/@rosalind/rosalind-dna/dist/css/dark/tokens.css')
    .pipe(rename('dark-theme.css'))
    .pipe(dest('./styles'));
}

/**
 * DEV TASKS
 */
function startWatching() {
  watch('./src/**/*.css', stylesDev);
}

function stylesDev() {
  return src('./src/styles/index.css')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(rename('system.css'))
    .pipe(dest('./styles'));
}
exports.dev = series(stylesDev, copyLightTheme, copyDarkTheme, startWatching);

/**
 * BUILD TASKS
 */
function stylesBuild() {
  return src('./src/styles/index.css')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(postcss())
    .pipe(rename('system.css'))
    .pipe(dest('./styles'));
}

exports.build = series(stylesBuild);

/**
 * UTIL TASKS
 */
const errorMsg = '\x1b[41mError\x1b[0m';

const onError = (err) => {
  gutil.beep();
  gutil.log(`${errorMsg} ${err.toString()}`);
  this.emit('end');
};
