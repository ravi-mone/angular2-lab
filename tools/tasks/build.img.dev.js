var path_1 = require('path');
var config_1 = require('../config');
module.exports = function buildImagesDev(gulp, plugins) {
    return function () {
        return gulp.src([
            path_1.join(config_1.APP_SRC, '**/*.gif'),
            path_1.join(config_1.APP_SRC, '**/*.jpg'),
            path_1.join(config_1.APP_SRC, '**/*.png'),
            path_1.join(config_1.APP_SRC, '**/*.svg')
        ])
            .pipe(gulp.dest(config_1.APP_DEST));
    };
};
//# sourceMappingURL=build.img.dev.js.map