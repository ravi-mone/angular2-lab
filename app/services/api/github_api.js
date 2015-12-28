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
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var config_1 = require('../../config/config');
var UrlBuilder = (function () {
    function UrlBuilder(url, token) {
        this.url = url;
        this.token = token;
    }
    UrlBuilder.prototype.appendToken = function (url) {
        if (this.token) {
            return url + ("?access_token=" + config_1.API_TOKEN);
        }
        return url;
    };
    UrlBuilder.prototype.user = function (user) {
        return this.appendToken(this.url + "/users/" + user);
    };
    return UrlBuilder;
})();
var GitHubAPI = (function () {
    function GitHubAPI(http) {
        this.http = http;
        this.urlBuilder = new UrlBuilder(config_1.GITHUB_API_ROOT, config_1.API_TOKEN);
        console.log(this.urlBuilder);
    }
    GitHubAPI.prototype.getUser = function (user) {
        var httpCall = this.http.get(this.urlBuilder.user(user))
            .map(function (res) { return res.json(); })
            .toPromise();
        console.log(httpCall);
        return httpCall;
    };
    GitHubAPI.prototype.getDrivers = function () {
        var httpCall = this.http.get('drivers.json')
            .map(function (res) { return res.json(); })
            .toPromise();
        console.log(httpCall);
        return httpCall;
    };
    GitHubAPI = __decorate([
        angular2_1.Injectable(),
        __param(0, angular2_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GitHubAPI);
    return GitHubAPI;
})();
exports.GitHubAPI = GitHubAPI;
//# sourceMappingURL=github_api.js.map