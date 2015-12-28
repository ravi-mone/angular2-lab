var merge = require('merge-stream');
var config_1 = require('../config');
module.exports = function buildDepsProd(gulp, plugins) {
    return function () {
        var stream = merge();
        config_1.DEPENDENCIES.forEach(function (dep) {
            stream.add(addStream(dep));
        });
        return stream;
        function addStream(dep) {
            var stream = gulp.src(dep.src);
            stream.pipe(gulp.dest(dep.dest));
            return stream;
        }
    };
};
//# sourceMappingURL=build.deps.js.map