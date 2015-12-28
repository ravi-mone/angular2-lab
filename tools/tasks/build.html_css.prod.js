var merge = require('merge-stream');
var path_1 = require('path');
var config_1 = require('../config');
module.exports = function buildJSDev(gulp, plugins) {
    return function () {
        return merge(minifyHtml(), minifyCss());
        function minifyHtml() {
            return gulp.src(path_1.join(config_1.APP_SRC, '**/*.html'))
                .pipe(gulp.dest(config_1.TMP_DIR));
        }
        function minifyCss() {
            return gulp.src(path_1.join(config_1.APP_SRC, '**/*.css'))
                .pipe(plugins.minifyCss())
                .pipe(gulp.dest(config_1.TMP_DIR));
        }
    };
};
//# sourceMappingURL=build.html_css.prod.js.map