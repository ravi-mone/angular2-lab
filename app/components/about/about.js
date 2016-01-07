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
var name_list_1 = require('../../services/name_list');
var user_1 = require('../../services/models/user');
var auth_1 = require('../../services/auth/auth');
var tablePlugin_1 = require('../plugins/tablePlugin');
var F1Drivers_1 = require('../F1Drivers/F1Drivers');
var events_1 = require('../Events/events');
var directive_1 = require('../directive/directive');
var app_injector_1 = require('../../helpers/app-injector');
var all_1 = require('ng2-material/all');
var AboutCmp = (function () {
    function AboutCmp(list, user, auth, _router) {
        var _this = this;
        this.list = list;
        this.user = user;
        this.auth = auth;
        this._router = _router;
        this.loadTable = false;
        this.reports = null;
        this.columns = [];
        this.auth = null;
        this.loggedIn = false;
        this.determinateValue = 30;
        var injector = app_injector_1.appInjector();
        var httpRequest = injector.get(Request_1.HTTP_REQUEST_PROVIDER);
        this.auth = auth;
        try {
            httpRequest.request('GET', '5681453b1200006c0a93a24b', { retailerId: user._user.Retailer_id, count: 25 })
                .subscribe(function (res) {
                var data = res.json().results;
                _this.columns =
                    [
                        { name: 'orderId', aggregate: 'link', displayName: 'Order Id #' },
                        { name: 'orderRef', displayName: 'Order Ref' },
                        { name: 'createdOn', aggregate: 'date', displayName: 'Created On' },
                        {
                            name: 'customerFirstName',
                            aggregate: 'concat', fields: ['customerFirstName', 'customerLastName'],
                            displayName: 'Customer Name'
                        }
                    ];
                _this.hideProgress = true;
                _this.reports = [{ data: data, columns: _this.columns }];
                _this.loadTable = true;
            }, function (err) { return console.log('Error', err); });
        }
        catch (e) {
            console.log(e);
        }
    }
    AboutCmp.prototype.routerOnActivate = function () {
        var _this = this;
        this.auth.check()
            .then(function (result) {
            _this.loggedIn = result._signed_in;
            if (!_this.loggedIn) {
                _this._router.navigate(['Login']);
            }
        })
            .catch(function () {
            _this.loggedIn = false;
        });
    };
    AboutCmp = __decorate([
        core_1.Component({
            selector: 'about',
            templateUrl: './components/about/about.html',
            styleUrls: ['./components/about/about.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [tablePlugin_1.TablePlugIn, F1Drivers_1.F1Drivers, events_1.EventsDemo, all_1.MATERIAL_DIRECTIVES],
            providers: [user_1.default, directive_1.ChatBlinkDirective, auth_1.Auth],
        }), 
        __metadata('design:paramtypes', [name_list_1.NameList, user_1.default, auth_1.Auth, router_1.Router])
    ], AboutCmp);
    return AboutCmp;
})();
exports.AboutCmp = AboutCmp;
//# sourceMappingURL=about.js.map