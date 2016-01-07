var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var user_1 = require('../../services/models/user');
var auth_1 = require('../../services/auth/auth');
var router_1 = require('angular2/router');
var HTTP_REQUEST_PROVIDER = (function () {
    function HTTP_REQUEST_PROVIDER(http, api, user, _router, auth) {
        this.http = http;
        this.user = user;
        this._router = _router;
        this.auth = auth;
        this.api = null;
        this.userSignedIn = false;
        this.api = api;
    }
    HTTP_REQUEST_PROVIDER.prototype.queryBuilder = function (queryObject) {
        var str = '';
        for (key in queryObject) {
            str += key + '=' + queryObject[key] + '&';
        }
        str = str.substr(0, str.length - 1);
        return str;
    };
    HTTP_REQUEST_PROVIDER.prototype.returnMethodType = function (type) {
        var requestTypes = {
            'GET': http_1.RequestMethod.Get,
            'POST': http_1.RequestMethod.Post
        };
        return requestTypes[type];
    };
    HTTP_REQUEST_PROVIDER.prototype.login = function (type, url, queryString) {
        var qString = "scope=somethg&grant_type=password&" + this.queryBuilder(queryString);
        return this.auth.login(qString, url);
    };
    HTTP_REQUEST_PROVIDER.prototype.getRequestHeaders = function () {
        return (new http_1.Headers({
            'accept': 'application/json'
        }));
    };
    HTTP_REQUEST_PROVIDER.prototype.isUserLoggedIn = function () {
        return this.userSignedIn;
    };
    HTTP_REQUEST_PROVIDER.prototype.request = function (type, url, queryString) {
        return this.http.request(new http_1.Request({
            method: this.returnMethodType(type),
            url: "" + this.api + url,
            search: this.queryBuilder(queryString),
            headers: this.getRequestHeaders()
        }));
    };
    HTTP_REQUEST_PROVIDER = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('APIEndpoint')), 
        __metadata('design:paramtypes', [http_1.Http, Object, user_1.default, router_1.Router, auth_1.Auth])
    ], HTTP_REQUEST_PROVIDER);
    return HTTP_REQUEST_PROVIDER;
})();
exports.HTTP_REQUEST_PROVIDER = HTTP_REQUEST_PROVIDER;
//# sourceMappingURL=Request.js.map