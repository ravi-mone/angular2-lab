var app_injector_1 = require('./app-injector');
var auth_1 = require('../services/auth/auth');
var router_1 = require('angular2/router');
exports.isLoggedIn = function (next, prev) {
    var injector = app_injector_1.appInjector();
    var auth = injector.get(auth_1.Auth);
    var router = injector.get(router_1.Router);
    var params = next.params;
    return auth.check()
        .then(function (result) {
        if (result) {
            return true;
        }
        else {
            router.navigate(['/Login', { target: params.target || '' }]);
            return false;
        }
    });
};
exports.isAdmin = function (target) {
    var injector = app_injector_1.appInjector();
    var auth = injector.get(auth_1.Auth);
    var router = injector.get(router_1.Router);
    return auth.check()
        .then(function (result) {
        if (result) {
            if (!auth.isAdmin) {
                router.navigateByInstruction(router.generate(['/Restricted']), true);
                return false;
            }
            return true;
        }
        else {
            router.navigate(['/Login', { target: target }]);
            return false;
        }
    });
};
//# sourceMappingURL=is-logged-in.js.map