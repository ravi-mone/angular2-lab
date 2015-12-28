var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var app_1 = require('./components/app/app');
var user_1 = require('./services/models/user');
var Request_1 = require('./components/Request/Request');
var http_1 = require('angular2/http');
var app_injector_1 = require('./components/helpers/app-injector');
browser_1.bootstrap(app_1.AppCmp, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS, user_1.default, Request_1.AutoAuthenticator,
    core_1.provide('APIEndpoint', {
        useValue: 'http://Some_URL_HERE'
    }),
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]).then(function (appRef) {
    app_injector_1.appInjector(appRef.injector);
});
//# sourceMappingURL=bootstrap.js.map