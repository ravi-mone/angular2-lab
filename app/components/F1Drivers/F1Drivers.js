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
var common_1 = require('angular2/common');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var points_1 = require('./points/points');
var nationality_1 = require('./nationality/nationality');
var driverheader_1 = require('./Header/driverheader');
var NameList_1 = require('../../services/models/NameList');
var F1Drivers = (function () {
    function F1Drivers(list, http) {
        this.list = list;
        this.http = http;
    }
    F1Drivers.prototype.onInit = function () {
        var result = this.list.get();
        if (result) {
            this.driverObj = result[0]['DriverStandings'];
            this.driversList = this.driverObj;
            this.pageSelected = this.driverObj.length;
        }
    };
    F1Drivers.prototype.showSelected = function (limitTo) {
        console.log('limitTo', limitTo);
        this.pageSelected = limitTo;
    };
    F1Drivers.prototype.filterObj = function (obj, key, nameFilter) {
        var driverName = key;
        if ((driverName.toLowerCase()).indexOf(nameFilter.toLowerCase()) !== -1) {
            obj.points = parseInt(obj.points);
            obj.position = parseInt(obj.position);
            obj.wins = parseInt(obj.wins);
            return obj;
        }
    };
    F1Drivers.prototype.filterByNames = function (nameFilter) {
        this.driverObj = this.driversList;
        var self = this;
        this.driverObj = this.driverObj.filter(function (Obj) {
            return self.filterObj(Obj, Obj.Driver.givenName, nameFilter.value);
        });
        this.pageSelected = this.driverObj.length;
    };
    F1Drivers = __decorate([
        core_1.Component({
            selector: 'f1Drivers',
            viewBindings: [NameList_1.NamesList]
        }),
        core_1.View({
            templateUrl: './components/F1Drivers/f1Drivers.html',
            directives: [points_1.Points, nationality_1.Nationality, driverheader_1.driverHeader, router_1.RouterLink, common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [NameList_1.NamesList, http_1.Http])
    ], F1Drivers);
    return F1Drivers;
})();
exports.F1Drivers = F1Drivers;
//# sourceMappingURL=F1Drivers.js.map