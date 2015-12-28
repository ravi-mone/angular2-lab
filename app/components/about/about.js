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
var tablePlugin_1 = require('../plugins/tablePlugin');
var directive_1 = require('../directive/directive');
var AboutCmp = (function () {
    function AboutCmp(list, user, authenticator) {
        var _this = this;
        this.list = list;
        this.user = user;
        this.authenticator = authenticator;
        this.loadTable = false;
        this.reports = null;
        this.columns = [];
        this.authenticator = null;
        this.columns = [];
        try {
            authenticator.request('GET', '/api/v4.1/order', { retailerId: user._user.Retailer_id, count: 25 }).subscribe(function (res) {
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
                _this.reports = [{ data: data, columns: _this.columns }];
                _this.loadTable = true;
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    __decorate([
        router_1.CanActivate(function (next, prev) {
            console.log(next, prev);
        }), 
        __metadata('design:type', Object)
    ], AboutCmp.prototype, "columns", void 0);
    AboutCmp = __decorate([
        core_1.Component({
            selector: 'about',
            templateUrl: './components/about/about.html',
            directives: [tablePlugin_1.TablePlugIn],
            providers: [user_1.default, Request_1.AutoAuthenticator, directive_1.ChatBlinkDirective],
        }), 
        __metadata('design:paramtypes', [name_list_1.NameList, user_1.default, Request_1.AutoAuthenticator])
    ], AboutCmp);
    return AboutCmp;
})();
exports.AboutCmp = AboutCmp;
//# sourceMappingURL=about.js.map