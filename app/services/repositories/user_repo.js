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
var github_api_1 = require('../api/github_api');
var user_1 = require('../models/user');
var UserRepo = (function () {
    function UserRepo(api) {
        this.api = api;
        this.users = new Map();
    }
    UserRepo.prototype.getUser = function (username) {
        var _this = this;
        if (this.users.has(username)) {
            return Promise.resolve(this.users.get(username));
        }
        else {
            return this.api.getUser(username)
                .then(function (u) {
                var user = new user_1.default();
                user.id = u.id;
                user.name = u.name;
                user.username = u.login;
                user.avatarUrl = u.avatar_url;
                user.followers = u.followers;
                user.following = u.following;
                _this.users.set(username, user);
                return user;
            });
        }
    };
    UserRepo.prototype.getDrivers = function () {
        return this.api.getDrivers()
            .then(function (u) {
            console.log('In user_repo.ts');
            return u;
        });
    };
    UserRepo.prototype.getAll = function () {
        return this.users.values();
    };
    UserRepo.prototype.remove = function (user) {
        this.users.delete(user.username);
    };
    UserRepo = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(github_api_1.GitHubAPI)), 
        __metadata('design:paramtypes', [github_api_1.GitHubAPI])
    ], UserRepo);
    return UserRepo;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserRepo;
//# sourceMappingURL=user_repo.js.map