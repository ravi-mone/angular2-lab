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
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var NamesList = (function () {
    function NamesList(http) {
        var _this = this;
        this.http = http;
        this.driverNames = [];
        this.articleList = [];
        http.get('drivers.json').subscribe(function (res) {
            _this.driverNames = res.json();
        });
    }
    NamesList.prototype.get = function () {
        return this.driverNames;
    };
    NamesList.prototype.getDriverSpecific = function (index) {
        console.log('callong index, ', index, this.driverNames);
        return this.driverNames[0]['DriverStandings'][index];
    };
    NamesList.prototype.getArticleList = function (index) {
        return this.articleList[index];
    };
    NamesList.prototype.postArticle = function (article) {
        this.articleList.push(article);
    };
    NamesList.prototype.deleteArticle = function (index) {
        this.articleList.splice(index, 1);
    };
    NamesList = __decorate([
        angular2_1.Injectable(),
        __param(0, angular2_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NamesList);
    return NamesList;
})();
exports.NamesList = NamesList;
//# sourceMappingURL=NameList.js.map