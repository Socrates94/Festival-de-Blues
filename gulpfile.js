import { src, dest, watch, series } from 'gulp';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import terser from 'gulp-terser';

const compileSass = gulpSass(sass);

export function css(done) {
    src('src/scss/app.scss', { sourcemaps: true })
        .pipe(compileSass({ outputStyle: 'compressed' }).on('error', compileSass.logError))
        .pipe(dest('build/css', { sourcemaps: '.' }));
    done();
}

export function js(done) {
    src('src/js/app.js')
        .pipe(terser())
        .pipe(dest('build/js'));
    done();
}

export function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', js);
}

export default series(css, js, dev);
