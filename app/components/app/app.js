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
var home_1 = require('../home/home');
var about_1 = require('../about/about');
var name_list_1 = require('../../services/name_list');
var user_1 = require('../../services/models/user');
var AppCmp = (function () {
    function AppCmp(user) {
        this.userSignedIn = false;
        this.user = user;
    }
    AppCmp.prototype.ngAfterContentChecked = function () {
        if (JSON.parse(localStorage.getItem('pp.user'))) {
            this.userSignedIn = true;
        }
    };
    AppCmp = __decorate([
        core_1.Component({
            selector: 'login',
            viewProviders: [name_list_1.NameList],
            templateUrl: './components/app/app.html',
            styleUrls: ['./components/app/app.css'],
            encapsulation: core_1.ViewEncapsulation.Emulated,
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/login', component: home_1.HomeCmp, name: 'Home', useAsDefault: true },
            { path: '/about', component: about_1.AboutCmp, name: 'About' }
        ]), 
        __metadata('design:paramtypes', [user_1.default])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
//# sourceMappingURL=app.js.map