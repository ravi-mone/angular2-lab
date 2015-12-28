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
var Request_1 = require('../Request/Request');
var user_1 = require('../../services/models/user');
var core_2 = require('angular2/core');
var MdlUpgradeDirective = (function () {
    function MdlUpgradeDirective(el) {
        componentHandler.upgradeElement(el.nativeElement);
    }
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Object)
    ], MdlUpgradeDirective.prototype, "mglUpgrade", void 0);
    MdlUpgradeDirective = __decorate([
        core_2.Directive({
            selector: '[mdlUpgrade]'
        }), 
        __metadata('design:paramtypes', [core_2.ElementRef])
    ], MdlUpgradeDirective);
    return MdlUpgradeDirective;
})();
var HomeCmp = (function () {
    function HomeCmp(user, _router, authenticator) {
        this.user = user;
        this._router = _router;
        this.authenticator = authenticator;
        this.username = 'BNT2010';
        this.password = 'bnt2010';
        this.user = null;
        this.hideError = true;
        this.authenticator = null;
        this.user = user;
        this.authenticator = authenticator;
        console.log('this.authenticator', this.authenticator);
    }
    HomeCmp.prototype.subitForm = function () {
        var _this = this;
        this.hideError = false;
        try {
            this.authenticator.login('POST', '/oauth/token', { username: this.username, password: this.password }).subscribe(function (res) {
                console.log(_this.user);
                _this.user.setUser(res.json());
                _this._router.navigate(['About']);
            });
        }
        finally {
        }
    };
    HomeCmp.prototype.catch = function (e) {
        console.log(e);
    };
    HomeCmp = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './components/home/home.html',
            styleUrls: ['./components/home/home.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [Request_1.AutoAuthenticator, user_1.default],
            directives: [MdlUpgradeDirective]
        }), 
        __metadata('design:paramtypes', [user_1.default, router_1.Router, Request_1.AutoAuthenticator])
    ], HomeCmp);
    return HomeCmp;
})();
exports.HomeCmp = HomeCmp;
//# sourceMappingURL=home.js.map