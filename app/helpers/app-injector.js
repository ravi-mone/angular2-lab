var appInjectorRef;
exports.appInjector = function (injector) {
    if (!injector) {
        return appInjectorRef;
    }
    appInjectorRef = injector;
    return appInjectorRef;
};
//# sourceMappingURL=app-injector.js.map