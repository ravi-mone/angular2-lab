var async = require('async');
var del = require('del');
var config_1 = require('../config');
function cleanAll(done) {
    async.parallel([
        cleanDist,
        cleanTest,
        cleanTmp
    ], done);
}
function cleanDist(done) {
    del(config_1.APP_DEST, done);
}
function cleanTest(done) {
    del(config_1.TEST_DEST, done);
}
function cleanTmp(done) {
    del(config_1.TMP_DIR, done);
}
module.exports = function clean(gulp, plugins, option) {
    return function (done) {
        switch (option) {
            case 'all':
                cleanAll(done);
                break;
            case 'dist':
                cleanDist(done);
                break;
            case 'test':
                cleanTest(done);
                break;
            case 'tmp':
                cleanTmp(done);
                break;
            default: done();
        }
    };
};
//# sourceMappingURL=clean.js.map