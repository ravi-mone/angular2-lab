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
var Auth = (function () {
    function Auth(http, user, api) {
        this.http = http;
        this.user = user;
        this.api = '';
        this.api = api;
    }
    Auth.prototype.login = function (qString, uri) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.request(new http_1.Request({
                method: http_1.RequestMethod.Get,
                url: "" + _this.api + uri,
                search: qString
            }))
                .subscribe(function (res) {
                if (res) {
                    _this.user.setUser(res.json());
                    resolve(_this.user);
                }
                else {
                    reject(false);
                }
            });
        });
    };
    Auth.prototype.check = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.user) {
                resolve(_this.user);
            }
            else {
                resolve(false);
            }
        });
    };
    Auth.prototype.logout = function () {
        this.user = false;
        this.isAdmin = false;
    };
    Auth = __decorate([
        core_1.Injectable(),
        __param(2, core_1.Inject('APIEndpoint')), 
        __metadata('design:paramtypes', [http_1.Http, user_1.default, Object])
    ], Auth);
    return Auth;
})();
exports.Auth = Auth;
exports.AUTH_PROVIDERS = [Auth];
//# sourceMappingURL=auth.js.map