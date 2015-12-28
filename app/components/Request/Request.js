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
var AutoAuthenticator = (function () {
    function AutoAuthenticator(http, api, user) {
        this.http = http;
        this.user = user;
        this.api = null;
        this.api = api;
    }
    AutoAuthenticator.prototype.queryBuilder = function (queryObject) {
        var str = '';
        for (key in queryObject) {
            str += key + '=' + queryObject[key] + '&';
        }
        str = str.substr(0, str.length - 1);
        return str;
    };
    AutoAuthenticator.prototype.returnMethodType = function (type) {
        var requestTypes = {
            'GET': http_1.RequestMethod.Get,
            'POST': http_1.RequestMethod.Post
        };
        return requestTypes[type];
    };
    AutoAuthenticator.prototype.login = function (type, url, queryString) {
        var qString = "scope=retailer&client_id=ppPartner&client_secret=Nhgij-I87J5N0g4nso8H5J-uijd4sNbF4gha&grant_type=password&" + this.queryBuilder(queryString);
        return this.http.request(new http_1.Request({
            method: this.returnMethodType(type),
            url: "" + this.api + url,
            search: qString
        }));
    };
    AutoAuthenticator.prototype.getRequestHeaders = function () {
        return (new http_1.Headers({
            'authorization': 'Bearer ' + this.user._user.access_token,
            'accept': 'application/json',
            'content-type': 'application/json'
        }));
    };
    AutoAuthenticator.prototype.request = function (type, url, queryString) {
        return this.http.request(new http_1.Request({
            method: this.returnMethodType(type),
            url: "" + this.api + url,
            search: this.queryBuilder(queryString),
            headers: this.getRequestHeaders()
        }));
    };
    AutoAuthenticator = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('APIEndpoint')), 
        __metadata('design:paramtypes', [http_1.Http, Object, user_1.default])
    ], AutoAuthenticator);
    return AutoAuthenticator;
})();
exports.AutoAuthenticator = AutoAuthenticator;
//# sourceMappingURL=Request.js.map