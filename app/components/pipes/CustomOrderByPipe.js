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
var CustomOrderByPipe = (function () {
    function CustomOrderByPipe() {
    }
    CustomOrderByPipe.prototype.transform = function (value, args) {
        var params = Array.isArray(args[0]) ? args[0] : args;
        if (!value) {
            return value;
        }
        value.sort(this.dynamicSortMultiple.apply(this, params));
        return value;
    };
    CustomOrderByPipe.prototype.dynamicSort = function (prop) {
        var sortOrder = 1;
        if (prop[0] === '-') {
            sortOrder = -1;
            prop = prop.slice(1);
        }
        return function (a, b) {
            var result = a[prop] < b[prop] ? -1 : (a[prop] > b[prop] ? 1 : 0);
            return result * sortOrder;
        };
    };
    CustomOrderByPipe.prototype.dynamicSortMultiple = function () {
        var _this = this;
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i - 0] = arguments[_i];
        }
        return function (obj1, obj2) {
            var i = 0;
            var result = 0;
            while (result === 0 && i < props.length) {
                result = _this.dynamicSort(props[i])(obj1, obj2);
                i++;
            }
            return result;
        };
    };
    CustomOrderByPipe = __decorate([
        core_1.Pipe({
            name: 'customOrderBy'
        }), 
        __metadata('design:paramtypes', [])
    ], CustomOrderByPipe);
    return CustomOrderByPipe;
})();
exports.CustomOrderByPipe = CustomOrderByPipe;
//# sourceMappingURL=CustomOrderByPipe.js.map