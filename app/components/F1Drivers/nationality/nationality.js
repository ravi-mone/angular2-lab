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
var Nationality = (function () {
    function Nationality() {
    }
    Object.defineProperty(Nationality.prototype, "text", {
        set: function (value) {
            this.nationality = value;
        },
        enumerable: true,
        configurable: true
    });
    Nationality = __decorate([
        core_1.Component({
            selector: 'nationality',
            properties: ['text: cty'],
        }),
        core_1.View({
            templateUrl: './components/F1Drivers/nationality/nationality.html?v=<%= VERSION %>'
        }), 
        __metadata('design:paramtypes', [])
    ], Nationality);
    return Nationality;
})();
exports.Nationality = Nationality;
//# sourceMappingURL=nationality.js.map