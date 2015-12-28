var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var name_list_1 = require('../../services/name_list');
var AboutCmp = (function () {
    function AboutCmp(list) {
        this.list = list;
    }
    AboutCmp.prototype.addName = function (newname) {
        this.list.add(newname.value);
        newname.value = '';
        return false;
    };
    AboutCmp = __decorate([
        angular2_1.Component({
            selector: 'about',
            templateUrl: './components/about/about.html',
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [name_list_1.NameList])
    ], AboutCmp);
    return AboutCmp;
})();
exports.AboutCmp = AboutCmp;
//# sourceMappingURL=about.js.map