const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCss = require('gulp-clean-css');
const del = require('del');

const paths = {
  scss: { in: 'src/scss/main.scss', watch: 'src/scss/**/*.scss', out: 'css' },
  js:   { in: 'src/js/**/*.js',     watch: 'src/js/**/*.js',     out: 'js' },
  img:  { in: 'src/img/**/*',       watch: 'src/img/**/*',       out: 'img' }
};

function styles() {
  return src(paths.scss.in)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCss())
    .pipe(dest(paths.scss.out));
}

function scripts() {
  return src(paths.js.in).pipe(dest(paths.js.out));
}

function images() {
  return src(paths.img.in).pipe(dest(paths.img.out));
}

function clean() {
  return del(['css', 'js', 'img']);
}

function watchFiles() {
  watch(paths.scss.watch, series(styles));
  watch(paths.js.watch, series(scripts));
  watch(paths.img.watch, series(images));
}

const build = series(clean, parallel(styles, scripts, images));
const dev = series(build, watchFiles);

exports.styles = styles;
exports.clean = clean;
exports.build = build;
exports.default = dev;