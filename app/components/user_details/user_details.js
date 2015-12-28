var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var user_repo_1 = require('../../services/repositories/user_repo');
var tabs_1 = require('../tabs/tabs');
var UserDetails = (function () {
    function UserDetails(repo, params) {
        var _this = this;
        this.repo = repo;
        var username = params.get('username');
        this.repo.getUser(username)
            .then(function (u) {
            _this.user = u;
        });
    }
    UserDetails.prototype.setActive = function (id) {
        this.active = id;
    };
    UserDetails.prototype.getActive = function () {
        return this.active;
    };
    UserDetails = __decorate([
        core_1.Component({
            selector: 'user-details'
        }),
        core_1.View({
            templateUrl: './components/user_details/user_details.html',
            directives: [tabs_1.Tabs, tabs_1.Tab]
        }), 
        __metadata('design:paramtypes', [user_repo_1.default, router_1.RouteParams])
    ], UserDetails);
    return UserDetails;
})();
exports.UserDetails = UserDetails;
//# sourceMappingURL=user_details.js.map