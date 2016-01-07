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
var all_1 = require('ng2-material/all');
var router_1 = require('angular2/router');
var Request_1 = require('../Request/Request');
var user_1 = require('../../services/models/user');
var MdlUpgradeDirective = (function () {
    function MdlUpgradeDirective(el) {
        componentHandler.upgradeElement(el.nativeElement);
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdlUpgradeDirective.prototype, "mglUpgrade", void 0);
    MdlUpgradeDirective = __decorate([
        core_1.Directive({
            selector: '[mdlUpgrade]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdlUpgradeDirective);
    return MdlUpgradeDirective;
})();
var LoginCmp = (function () {
    function LoginCmp(user, _router, authenticator) {
        this.user = user;
        this._router = _router;
        this.authenticator = authenticator;
        this.username = '';
        this.password = '';
        this.showError = false;
    }
    LoginCmp.prototype.subitForm = function () {
        var _this = this;
        if (this.username != 'demo123' && this.password != 'password') {
            this.showError = true;
            return false;
        }
        try {
            this.authenticator.login('GET', '568142e2120000960993a242', { username: this.username, password: this.password })
                .then(function () {
                _this._router.navigate(['/About']);
            })
                .catch(function (e) {
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    LoginCmp = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './components/login/login.html',
            providers: [Request_1.HTTP_REQUEST_PROVIDER, user_1.default],
            directives: [MdlUpgradeDirective, all_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_1.default, router_1.Router, Request_1.HTTP_REQUEST_PROVIDER])
    ], LoginCmp);
    return LoginCmp;
})();
exports.LoginCmp = LoginCmp;
//# sourceMappingURL=login.js.map