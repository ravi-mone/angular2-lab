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
var Tabs = (function () {
    function Tabs() {
        this.selectedIdx = 0;
        this.tabs = [];
    }
    Tabs.prototype.select = function (idx) {
        this.selectedIdx = idx;
    };
    Tabs.prototype.addTab = function (tab) {
        var idx = this.tabs.length;
        this.tabs.push(tab);
        return idx;
    };
    Tabs.prototype.getSelectedIndex = function () {
        return this.selectedIdx;
    };
    Tabs = __decorate([
        core_1.Component({
            selector: 'tabs'
        }),
        core_1.View({
            template: "\n    <div class=\"tabs\">\n      <ul class=\"tabs-header\">\n        <li *ng-for=\"#tab of tabs; #index = index\" (click)=\"select(index)\">{{tab.title}}</li>\n      </ul>\n      <ng-content></ng-content>\n    </div>\n  ",
            directives: [common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Tabs);
    return Tabs;
})();
exports.Tabs = Tabs;
var Tab = (function () {
    function Tab(parent) {
        this.parent = parent;
        this.index = parent.addTab(this);
    }
    Tab.prototype.isActive = function () {
        return this.parent.getSelectedIndex() === this.index;
    };
    Tab = __decorate([
        core_1.Component({
            selector: 'tab',
            properties: ['title']
        }),
        core_1.View({
            template: "\n    <div [hidden]=\"isActive()\">\n      <ng-content></ng-content>\n    </div>\n  "
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [Tabs])
    ], Tab);
    return Tab;
})();
exports.Tab = Tab;
//# sourceMappingURL=tabs.js.map