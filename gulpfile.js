// Config
const config = {
    source: 'src/assets/css',
    dest: 'src/assets/css/dist',
};

// Modules
const gulp = require('gulp');
const minifycss = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const tailwind = require('tailwindcss');

/**
 * Default Task that runs when you type gulp in the console
 */
const defaultTask = function (done) {
    gulp.series('compileCSS', 'watch');
    done();
};

/**
 * Compile SASS
 *
 * Compiles your SASS files in to one stylesheet
 */
const compileCSS = function () {
    // Load SASS Files
    return (
        gulp
            .src(`${config.source}/style.css`)

            // Autoprefix and Minify
            .pipe(postcss([tailwind()]))
            .pipe(autoprefixer({ cascade: false }))
            .pipe(minifycss())

            // Save it and update the browser
            .pipe(gulp.dest(config.dest))
    );
};

function watch(done) {
    gulp.watch(`${config.source}/*.css`, compileCSS);
    done();
}

const watchAndSync = gulp.parallel(watch);

exports.default = defaultTask;
exports.compileCSS = compileCSS;
exports.watch = watchAndSync;
