const { series, src, dest } = require('gulp');
const ts = require('gulp-typescript');
const del = require('del');
const { exec } = require('child_process');

function cleanBuild(cb) {
    var tsProject = ts.createProject('tsconfig.json');

    return del([
        tsProject.options.outDir
    ]);
}

function generateAPIControllers(cb) {
    /*
    exec('openapi-generator generate -c ', function (err, stdout, stderr) {
        cb(err);
    });
    */
   cb();
}

function transpileTypescript(cb) {
    var tsProject = ts.createProject('tsconfig.json');

    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(dest(tsProject.options.outDir));
}

function runTests(cb) {
    // TODO
    cb();
}

exports.clean = series(cleanBuild);
exports.build = series(exports.clean, generateAPIControllers, transpileTypescript);
exports.test = series(exports.build, runTests);
