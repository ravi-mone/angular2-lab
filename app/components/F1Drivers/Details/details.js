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
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var nationality_1 = require('../nationality/nationality');
var points_1 = require('../points/points');
var NameList_1 = require('../../../services/models/NameList');
var Details = (function () {
    function Details(list, params) {
        this.list = list;
        this.showWhenTrue = false;
        this.id = params.get('name');
    }
    Details.prototype.onInit = function () {
        this.driver = this.list.getDriverSpecific(this.id - 1);
    };
    Details = __decorate([
        core_1.Component({
            selector: 'Details',
            viewBindings: [NameList_1.NamesList]
        }),
        core_1.View({
            templateUrl: './components/F1Drivers/Details/details.html?v=<%= VERSION %>',
            directives: [router_1.RouterLink, nationality_1.Nationality, points_1.Points, common_1.CORE_DIRECTIVES]
        }),
        __param(0, core_1.Inject(NameList_1.NamesList)), 
        __metadata('design:paramtypes', [NameList_1.NamesList, router_1.RouteParams])
    ], Details);
    return Details;
})();
exports.Details = Details;
//# sourceMappingURL=details.js.map