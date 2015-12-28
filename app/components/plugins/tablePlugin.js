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
var aggregateFn_1 = require("../pipes/aggregateFn");
var CustomOrderByPipe_1 = require("../pipes/CustomOrderByPipe");
var TablePlugIn = (function () {
    function TablePlugIn(_router) {
        this._router = _router;
        this.columns = [];
        this.defaultSort = '-Select-';
        this.operator = null;
    }
    TablePlugIn.prototype.ngOnInit = function () {
        this.columns = this.data[0].columns;
    };
    TablePlugIn.prototype.sortBy = function (data, column) {
        this.operator = (this.operator == '') ? '-' : '';
        var customOrderBy = new CustomOrderByPipe_1.CustomOrderByPipe();
        customOrderBy.transform(data, [this.operator + column.name]);
        this.defaultSort = column.displayName;
    };
    TablePlugIn.prototype.navigateTo = function (page, value) {
        alert('Write your navigation or other related code here');
    };
    __decorate([
        core_1.Input('title'), 
        __metadata('design:type', String)
    ], TablePlugIn.prototype, "header", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TablePlugIn.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TablePlugIn.prototype, "pagination", void 0);
    TablePlugIn = __decorate([
        core_1.Component({
            selector: 'tablePlugin',
            templateUrl: './components/plugins/table.html',
            pipes: [aggregateFn_1.aggregateFnPipe, CustomOrderByPipe_1.CustomOrderByPipe]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], TablePlugIn);
    return TablePlugIn;
})();
exports.TablePlugIn = TablePlugIn;
//# sourceMappingURL=tablePlugin.js.map