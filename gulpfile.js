var gulp = require('gulp');
var utils_1 = require('./tools/utils');
gulp.task('clean', utils_1.task('clean', 'all'));
gulp.task('clean.dist', utils_1.task('clean', 'dist'));
gulp.task('clean.test', utils_1.task('clean', 'test'));
gulp.task('clean.tmp', utils_1.task('clean', 'tmp'));
gulp.task('check.versions', utils_1.task('check.versions'));
gulp.task('postinstall', function (done) {
    return utils_1.runSequence('clean', 'npm', done);
});
gulp.task('build.dev', function (done) {
    return utils_1.runSequence('clean.dist', 'tslint', 'build.assets.dev', 'build.js.dev', 'build.index', done);
});
gulp.task('build.prod', function (done) {
    return utils_1.runSequence('clean.dist', 'clean.tmp', 'tslint', 'build.assets.prod', 'build.html_css.prod', 'build.deps', 'build.js.prod', 'build.bundles', 'build.index', done);
});
gulp.task('build.dev.watch', function (done) {
    return utils_1.runSequence('build.dev', 'watch.dev', done);
});
gulp.task('build.test.watch', function (done) {
    return utils_1.runSequence('build.test', 'watch.test', done);
});
gulp.task('test', function (done) {
    return utils_1.runSequence('clean.test', 'tslint', 'build.test', 'karma.start', done);
});
gulp.task('serve', function (done) {
    return utils_1.runSequence('build.dev', 'server.start', 'watch.serve', done);
});
//# sourceMappingURL=gulpfile.js.map