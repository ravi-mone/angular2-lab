var async_1 = require('async');
var path_1 = require('path');
var Builder = require('systemjs-builder');
var config_1 = require('../config');
var BUNDLE_OPTS = {
    minify: true,
    sourceMaps: true,
    format: 'cjs'
};
module.exports = function bundles(gulp, plugins) {
    return function (done) {
        var builder = new Builder(config_1.SYSTEM_CONFIG_BUILDER);
        async_1.parallel([
            bundleApp
        ], function () { return done(); });
        function bundleApp(done) {
            builder.bundle('bootstrap - angular2/*', path_1.join(config_1.BUNDLES_DEST, 'app.js'), BUNDLE_OPTS).then(done);
        }
    };
};
//# sourceMappingURL=build.bundles.js.map