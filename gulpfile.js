const {
  series, dest, src, watch,
} = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const merge = require('merge-stream');
const fs = require('fs');
const path = require('path');

/**
 * UTIL TASKS
 */
const errorMsg = '\x1b[41mError\x1b[0m';

const onError = (err) => {
  gutil.beep();
  gutil.log(`${errorMsg} ${err.toString()}`);

  // @ts-ignore
  this.emit('end');
};

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
function getFolders(dir) {
  return fs.readdirSync(dir)
    .filter((file) => fs.statSync(path.join(dir, file)).isDirectory());
}

function buildBlocksCSS() {
  const blocksSrcPath = './src/styles/blocks';
  const blocksDestPath = './blocks';
  const folders = getFolders('./src/styles/blocks');

  const tasks = folders.map((folder) => src(path.join(blocksSrcPath, folder, '*.css'))
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(dest(`${blocksDestPath}/${folder}`)));

  return merge(tasks);
}

function stylesDev() {
  return src('./src/styles/system/index.css')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(rename('system.css'))
    .pipe(dest('./styles'));
}

function startWatching() {
  watch('./src/**/*.css', undefined, series(stylesDev, buildBlocksCSS));
}

exports.dev = series(stylesDev, copyLightTheme, copyDarkTheme, buildBlocksCSS, startWatching);

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
