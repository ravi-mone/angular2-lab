var connectLivereload = require('connect-livereload');
var express = require('express');
var tinylrFn = require('tiny-lr');
var openResource = require('open');
var serveStatic = require('serve-static');
var path_1 = require('path');
var config_1 = require('../config');
var tinylr = tinylrFn();
function serveSPA() {
    var server = express();
    tinylr.listen(config_1.LIVE_RELOAD_PORT);
    server.use(config_1.APP_BASE, connectLivereload({ port: config_1.LIVE_RELOAD_PORT }), express.static(process.cwd()));
    server.listen(config_1.PORT, function () {
        return openResource('http://localhost:' + config_1.PORT + config_1.APP_BASE + config_1.APP_DEST);
    });
}
exports.serveSPA = serveSPA;
function notifyLiveReload(e) {
    var fileName = e.path;
    tinylr.changed({
        body: { files: [fileName] }
    });
}
exports.notifyLiveReload = notifyLiveReload;
function serveDocs() {
    var server = express();
    server.use(config_1.APP_BASE, serveStatic(path_1.resolve(process.cwd(), config_1.DOCS_DEST)));
    server.listen(config_1.DOCS_PORT, function () {
        return openResource('http://localhost:' + config_1.DOCS_PORT + config_1.APP_BASE);
    });
}
exports.serveDocs = serveDocs;
//# sourceMappingURL=server.js.map