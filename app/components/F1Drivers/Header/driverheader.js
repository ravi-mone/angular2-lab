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
var NameList_1 = require('../../../services/models/NameList');
var driverHeader = (function () {
    function driverHeader(list) {
        this.list = list;
        this.isreverse = false;
    }
    driverHeader.prototype.onInit = function () {
        this.driverObj = this.list.get();
        this.driverObj = this.driverObj[0]['DriverStandings'];
    };
    driverHeader.prototype.sortBy = function (name) {
        if (this.isreverse == false) {
            this.driverObj = this.driverObj.sort(function (a, b) {
                return a[name] - b[name];
            });
            this.isreverse = true;
        }
        else {
            this.driverObj = this.driverObj.sort(function (a, b) {
                return b[name] - a[name];
            });
            this.isreverse = false;
        }
    };
    driverHeader = __decorate([
        core_1.Component({
            selector: 'driverHeader',
            templateUrl: './components/F1Drivers/Header/driverheader.html?v=<%= VERSION %>'
        }), 
        __metadata('design:paramtypes', [NameList_1.NamesList])
    ], driverHeader);
    return driverHeader;
})();
exports.driverHeader = driverHeader;
//# sourceMappingURL=driverheader.js.map